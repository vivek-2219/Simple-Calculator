let operators = document.querySelectorAll('.operators');
let output = document.querySelector('.output');
let evaluator = document.querySelector('.evaluator');
let lastValueSlicer = document.querySelector('.lastValueSlicer');

evaluator.addEventListener('click', () => {
    output.value = eval(output.value.replaceAll('X', '*'));
});

lastValueSlicer.addEventListener('click', () => {
    output.value = output.value.slice(0, output.value.length - 1);
})

operators.forEach(element => {
    element.addEventListener('click', () => {
        if (output.value.charAt(output.value.length - 2) === '+') {
            output.value = output.value.slice(0, output.value.length - 2) + element.value;
        }
        if (output.value.charAt(output.value.length - 2) === '-') {
            output.value = output.value.slice(0, output.value.length - 2) + element.value;
        }
        if (output.value.charAt(output.value.length - 2) === 'X') {
            output.value = output.value.slice(0, output.value.length - 2) + element.value;
        }
        if (output.value.charAt(output.value.length - 2) === '/') {
            output.value = output.value.slice(0, output.value.length - 2) + element.value;
        }
    });
});

