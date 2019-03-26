function maxMultiple(divisor, bound) {
    let largest = 0;
    
    for(let i = 1; i <= bound; i++){
        if(i % divisor === 0){
            largest = i;
        }
    }   
    return largest;
}
