// Calculator variables.
let operators = document.querySelectorAll('.operators');
let output = document.querySelector('.output');
let evaluator = document.querySelector('.evaluator');
let lastValueSlicer = document.querySelector('.lastValueSlicer');
let numbers = document.querySelectorAll('.numbers');
let mathematicalOperators = ['+', '-', '/'];
let degree = document.querySelector('.degree');
let PI = document.querySelector('.PI');
let allClear = document.querySelector('.allClear');
let degreeAndPI = ['°', 'π'];

// Logics for EQUAL TO operator.
evaluator.addEventListener('click', () => {
    let functions = ['sin', 'cos', 'tan', 'cosec', 'sec', 'cot', 'asin', 'acos', 'atan', 'acosec', 'asec', 'acot'];
    let PIErrorArray = ['π1', 'π2', 'π3', 'π4', 'π5', 'π6', 'π7', 'π8', 'π9', 'π0', '1π', '2π', '3π', '4π', '5π', '6π', '7π', '8π', '9π', '0π'];
    let degreeErrorArray = ['°1', '°2', '°3', '°4', '°5', '°6', '°7', '°8', '°9', '°0', '°π'];

    // Solving errors related with PI and numbers concatination. Multiplying Numbers with PI or PI with PI when concatinated.
    PIErrorArray.forEach(element => {
        if (output.value.match(element)) {
            output.value = output.value.replaceAll(element, `${(element[0])}X${(element[1])}`);
        };
    });

    // Showing errors for Degree and Number concatination.
    // degreeErrorArray.forEach(element => {
    //     if (output.value.match(element)) {
    //         output.value = output.value.replaceAll(element, element.slice(1));
    //     };
    // });

    // Dealing with TRIGONOMETRIC AND INVERSE TRIGONOMETRIC functions including PI and degree values.
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

    // Evaluating the output using eval function.
    try {
        let result = eval(output.value.replaceAll('X', '*'));
        output.value = result;
    }
    catch (error) {
        output.value = 'Error';
    }
});

// Solving error for Degree-Degree concatination.
degree.addEventListener('click', () => {
    if (output.value.endsWith('°')) {
        output.value = output.value.replaceAll('°°', '°');
    };
});

// Converting PI-PI concatination into PI-PI multiplication.
PI.addEventListener('click', () => {
    if (output.value.endsWith('π')) {
        output.value = output.value.replaceAll('ππ', 'πXπ');
    };
});

// Slicing the last number, mathematical operator or other things.
lastValueSlicer.addEventListener('click', () => {
    let inverseFunctions = ['asin(', 'acos(', 'atan(', 'acosec(', 'asec(', 'acot('];
    let functions = ['sin(', 'cos(', 'tan(', 'cosec(', 'sec(', 'cot('];

    // Slicing the INVERSE TRIGONOMETRIC functions.
    for (let index = 0; index < inverseFunctions.length; index++) {
        if (output.value.endsWith(inverseFunctions[index])) {
            output.value = output.value.slice(0, (output.value.length - (inverseFunctions[index].length - 1)));
        };
    };

    // Slicing the TRIGONOMETRIC functions.
    for (let index = 0; index < functions.length; index++) {
        if (output.value.endsWith(functions[index])) {
            output.value = output.value.slice(0, (output.value.length - (functions[index].length - 1)));
        };
    };

    // Retruning the output value.
    output.value = output.value.slice(0, output.value.length - 1);
});

// Fixing the starting of output values with multiple zeros.
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

// Fixing issues related with multiple mathematical operators concatination.
operators.forEach(element => {
    element.addEventListener('click', () => {
        mathematicalOperators.forEach(operand => {
            if (output.value.charAt(output.value.length - 2) === operand) {
                output.value = output.value.slice(0, output.value.length - 2) + element.value;
            };
        });
    });
});



