function fileNaming(names) {
    let fileNames = [];
    
    names.forEach(name => {
        let tempName = name;
        
        if(!fileNames.length){
            fileNames.push(name);
        }else if(name.includes(")") && name.lastIndexOf("(") - name.indexOf(")") > 2){
            let x = name[name.lastIndexOf(")") - 1];
            name += `(${x})`
            fileNames.push(name);
        }else{
            let x = 0;
            while(fileNames.includes(name)){
                x++;
                name = tempName;
                name += `(${x})`
            }
            fileNames.push(name);
        }
    });
    
    return fileNames;
}
