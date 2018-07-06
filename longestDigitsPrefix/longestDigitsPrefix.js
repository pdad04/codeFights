function longestDigitsPrefix(inputString) {
    const regEx = /^\d+/
    
    return regEx.test(inputString) ? inputString.match(regEx).shift() : ''
}