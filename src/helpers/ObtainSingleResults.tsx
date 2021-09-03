export const obtainSingleResults = (expression: Array<string>) => {
    let expressionArray = expression.join('').split(' ');
    var firstValue, operator;
    if (expressionArray[0] === ""){
        expressionArray.shift();
        firstValue = parseFloat(expressionArray[0].concat(expressionArray[1]));
        operator = expressionArray[2];
    } else {
        firstValue = parseFloat(expressionArray[0]);
        operator = expressionArray[1];
    }
    switch (operator) {
        case 'x²':
            return (Math.pow(firstValue, 2)).toFixed(2);
        case '√x':
            return (Math.sqrt(firstValue)).toFixed(2);
        case '%':
            return (firstValue / 100);
        case '1/x':
            return (1 / firstValue).toFixed(2);
        case '+/-':
            return (- firstValue);
        default:
            return 0;
    }
}