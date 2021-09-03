export const operationRegEx = /(\s-\s)?([0-9]+|(\d+\.\d+))\s(\+|x|\/|-)?\s[0-9]+/;
export const singleOperationRegEx = /^[\d]+(?![\D])$/;
export const additionalOperationRegEx = /^([0-9]+|(\d+\.\d+))*\s(x²|√x|%|1\/x|\+\/-)/;

export const singleOperation = (value: Array<String>) => {
    return value.join('');
}

    