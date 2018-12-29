function lineEncoding(s){
    let groupedLetters = []

    while(s.length){
        let regEx = new RegExp(s.charAt(0) + "+");
        groupedLetters.push(s.match(regEx).join(''));
        s = s.replace(regEx, '');
    }

    for(let i = 0; i < groupedLetters.length; i++){
       groupedLetters[i].length > 1 ? groupedLetters[i] = `${groupedLetters[i].length}${groupedLetters[i][0]}` : groupedLetters[i];
    }
    
    return groupedLetters.join('');
}