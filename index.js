const regexp = /(:?\.\s?|^)([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD])/gi;
export default input => input.replace(regexp, match => match.toUpperCase());
