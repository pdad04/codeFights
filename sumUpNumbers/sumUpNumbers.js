function sumUpNumbers(inputString) {
    return inputString.split(/[^0-9]/)
                      .filter(el => !Number.isNaN(parseInt(el)))
                      .reduce((accum, cv) => accum + parseInt(cv),0);
 }
 