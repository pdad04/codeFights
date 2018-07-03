function firstDigit(inputString) {
    let regEx = /[0-9]/
    
    return inputString.match(regEx).shift();
}