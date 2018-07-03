function differentSymbolsNaive(s) {
    let differentCharacters = [];
    
    s.split('').filter( x => {
        if(!differentCharacters.includes(x)){
            differentCharacters.push(x);
        }
    });
    
    return differentCharacters.length;
}