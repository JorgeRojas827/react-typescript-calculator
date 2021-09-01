export const operationRegEx = /(\s-\s)?[0-9]*\s(\+|x|\/|-)?\s[0-9]+/;
export const singleOperationRegEx = /^[\d]*(?![\D])/;
export const additionalOperationRegEx = /^[\d]*\s(x\^2|x\^1\/2|%|1\/x|\+\/-)/;

export const singleOperation = (value: Array<String>) => {
    return value.join('');
}

