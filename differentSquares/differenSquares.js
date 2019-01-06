function differentSquares(matrix) {
    if(matrix.length === 1) return 0;
    
    let twoByTwo = []
    let unique = new Set();

    
    for(let i = 0; i < matrix.length - 1; i++){
        let j = matrix[i].length - 1;
        let k = 0;
        
        while(k < j){
            twoByTwo.push(matrix[i][k].toString());
            twoByTwo.push(matrix[i][k+1].toString());
            twoByTwo.push(matrix[i+1][k].toString());
            twoByTwo.push(matrix[i+1][k+1].toString());
            
            unique.add(twoByTwo.reduce((a,c) => a + c));
            
            twoByTwo = [];
            k++;
        }

    }
    
    return unique.size;
}