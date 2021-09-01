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