function sortByHeight(a) {
  var trees = [];
  var sortedByHeight = [];

  a.filter(function(element,index){
    if(element === -1) {
      trees.push(index);
    }else {
      sortedByHeight.push(element);
    }
  });

  sortedByHeight.sort(function(a,b){
    return a-b;
  });


  for(var i = 0; i < trees.length; i++) {
    sortedByHeight.splice(trees[i],0,-1);
  }

  return sortedByHeight;
}
