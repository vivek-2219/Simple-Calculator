let operators = document.querySelectorAll('.operators');
let output = document.querySelector('.output');
let evaluator = document.querySelector('.evaluator');
let lastValueSlicer = document.querySelector('.lastValueSlicer');
let numbers = document.querySelectorAll('.numbers');
let mathematicalOperators = ['+', '-', '/'];

evaluator.addEventListener('click', () => {
    let functions = ['sin', 'cos', 'tan', 'cosec', 'sec', 'cot', 'asin', 'acos', 'atan', 'acosec', 'asec', 'acot'];
    functions.forEach(element => {
        let trigoFunc = 'Math.' + element;
        output.value = output.value.replaceAll(element, trigoFunc);
        output.value = output.value.replaceAll('Math.cosec', '1/Math.sin');
        output.value = output.value.replaceAll('Math.sec', '1/Math.cos');
        output.value = output.value.replaceAll('Math.cot', '1/Math.tan');
        output.value = output.value.replaceAll('aMath.', 'a');
        output.value = output.value.replaceAll('a1/Math.sin(', 'asin(1/');
        output.value = output.value.replaceAll('a1/Math.cos(', 'acos(1/');
        output.value = output.value.replaceAll('a1/Math.tan(', 'atan(1/');
        output.value = output.value.replaceAll('π', Math.PI);
        output.value = output.value.replaceAll('°', '*Math.PI/180');
    });
    let result = eval(output.value.replaceAll('X', '*'));
    output.value = result;
});

lastValueSlicer.addEventListener('click', () => {
    output.value = output.value.slice(0, output.value.length - 1);
});

numbers.forEach(element => {
    element.addEventListener('click', () => {
        if (output.value.length > 1) {
            if (output.value.startsWith(0)) {
                output.value = output.value.slice(1);
            };
            if (output.value.startsWith(00)) {
                output.value = output.value.slice(2);
            };
        };
    });
});

operators.forEach(element => {
    element.addEventListener('click', () => {
        mathematicalOperators.forEach(operand => {
            if (output.value.charAt(output.value.length - 2) === operand) {
                output.value = output.value.slice(0, output.value.length - 2) + element.value;
            };
        });
    });
});

