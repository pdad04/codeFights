function longestWord(text) {
    const splitText = text.trim().split(/\s|-|_/);
    const regEx = /[A-Z]+/i;
    let found = '';

    splitText.forEach(word => {
        found = word.match(regEx)[0].length > found.length ? word.match(regEx)[0] : found;
    });
    
    return found;
}