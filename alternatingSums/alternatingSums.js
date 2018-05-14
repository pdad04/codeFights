function alternatingSums(a) {
    let weights = [0,0];
    
    a.forEach((item, index) => {
        if(index % 2 === 0) {
            weights[0] += item;
        }else {
            weights[1] += item;
        }
    });

    return weights;
}
