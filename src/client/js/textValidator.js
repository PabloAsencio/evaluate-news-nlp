const isValidText = (text) => /^((\w+)\s)*(\w+)(\.|\?|!)?$/.test(text);

export { isValidText };
