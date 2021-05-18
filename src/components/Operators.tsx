export const operationRegEx = /(\s-\s)?[0-9]*\s(\+|x|\/|-)?\s[0-9]+/;
export const singleOperationRegEx = /^[\d]*(?![\D])/;
export const additionalOperationRegEx = /^[\d]*\s(x\^2|x\^1\/2|%|1\/x|\+\/-)/;

export const additionalOperation = (expression: Array<string>) => {
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
        case 'x^2':
            return (Math.pow(firstValue, 2)).toFixed(2);
        case 'x^1/2':
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

export const singleOperation = (value: Array<String>) => {
    return value.join('');
}

export const obtainResults = (expression: Array<String>) => {
    let expressionArray = expression.join('').split(' ');
    var firstValue, lastValue, operator
    if (expressionArray[0] === "") {
        expressionArray.shift()
        firstValue = parseFloat(expressionArray[0].concat(expressionArray[1]));
        lastValue = parseFloat(expressionArray[3]);
        operator = expressionArray[2];
    } else {
        firstValue = parseFloat(expressionArray[0]);
        lastValue = parseFloat(expressionArray[2]);
        operator = expressionArray[1];
    }
    switch (operator){
        case '+':
            return firstValue + lastValue;
        case '-':
            return firstValue - lastValue;
        case 'x':
            return (firstValue * lastValue).toFixed(2);
        case '/':
            return (firstValue / lastValue).toFixed(2);
        default:
            return 0;
    }
}