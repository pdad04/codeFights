function isMAC48Address(inputString) {   
    const macString = inputString.split('-');
    const invalidChars = /[G-Z]/;
    
    for(let i = 0; i < macString.length; i++){
        if(macString[i].length != 2 || invalidChars.test(macString[i])) {return false}
    }
    
    return true; 
}
