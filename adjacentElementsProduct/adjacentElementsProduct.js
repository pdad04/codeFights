function adjacentElementsProduct(inputArray) {
  var largestProductArray = inputArray.map(function(element,index) {
                          return element * inputArray[index + 1];
  });

  largestProductArray.pop();
  var max = largestProductArray.reduce(function(a,b){
     return Math.max(a,b);
  });

  return max;
}
