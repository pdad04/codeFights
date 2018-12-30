function deleteDigit(n) {
    let nArray = n.toString().split('');
    let largestNumber = null;
    
    for(let i = 0; i < nArray.length; i++){
       let oneRemoved = nArray.splice(i,1);
 
       if(nArray.join('') > largestNumber) largestNumber = parseInt(nArray.join(''));
 
       nArray.splice(i,0,oneRemoved.join(''));
    }
    
    return largestNumber;
 }
 