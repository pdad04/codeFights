function digitDegree(n) {
    let nArray = n.toString().split('');
    
    if(nArray.length === 1){
        return 0;
    }
    
    let sum = 0;
    let count = 0;

    while(nArray.length != 1){
        sum = nArray.reduce( (accum, currVal) => parseInt(accum) + parseInt(currVal)).toString();
        
        nArray = sum.split('');
        count++
    }
    
    return count;
}