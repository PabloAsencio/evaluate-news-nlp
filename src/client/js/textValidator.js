const validNumber = '(\\$)?(((\\d{1,3})(,(\\d{3}))*)|(\\d+))(\\.\\d+)?(%)?';
const validSimpleWord =
    "(([A-Z][A-Z]*('[A-Z])?)|([A-Z][a-z]*('[a-z]+)?)|([a-z][a-z]*('[a-z]+)?))";
const validWordSeparator = '(\\.|,|;|:|!|\\?)?\\s';
const validWordConnector = '(-|\\/)';
const validWord = `(${validSimpleWord}|(${validSimpleWord}${validWordConnector}${validSimpleWord}))`;
const isValidText = (text) => {
    const validTextRegEx = new RegExp(
        `^((${validWord}|${validNumber})${validWordSeparator})*(${validWord}|${validNumber})(\\.|\\?|!)?$`
    );
    return validTextRegEx.test(text);
};

export { isValidText };
