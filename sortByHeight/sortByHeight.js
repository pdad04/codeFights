function sortByHeight(a) {
  var trees = [];
  var sorted_by_height = [];

  a.filter(function(element,index){
    if(element === -1) {
      trees.push(index);
    }else {
      sorted_by_height.push(element);
    }
  });

  sorted_by_height.sort(function(a,b){
    return a-b;
  });


  for(var i = 0; i < trees.length; i++) {
    sorted_by_height.splice(trees[i],0,-1);
  }

  return sorted_by_height;
}
