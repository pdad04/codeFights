function checkPalindrome(inputString) {
    var splitString = inputString.split('').reverse().join('');

    if(splitString == inputString){
        return true;
    }else {
        return false;
    }        
}
