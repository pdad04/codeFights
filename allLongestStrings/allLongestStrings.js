function allLongestStrings(inputArray) {
    var longest = 0;

    inputArray.forEach(function(str){
        if(str.length > longest){
            longest = str.length;
        }
    });


    return inputArray.filter(function(string){
        if(string.length >= longest){
            longest = string.length;
            return string;
        }
    })
}
