function sudoku(grid) {
    let rowSum = 0;
    let colSum = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            rowSum += grid[i][j];
            colSum += grid[j][i];
        }
        
        if(colSum !== 45 || rowSum !== 45){
            return false;
        }
        
        rowSum = 0;
        colSum = 0;
        
    }
    
    return checkSubGrid(grid);
    
}

function checkSubGrid(grid){
    let subGrid1 = new Set();
    let subGrid2 = new Set();
    let subGrid3 = new Set();
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(j < 3){
                subGrid1.add(grid[i][j]);
            }else if(j < 6){
                subGrid2.add(grid[i][j]);
            }else{
                subGrid3.add(grid[i][j]);
            }
        }
        
        if(i === 2 || i === 5 || i === 8){
            if(subGrid1.size !== 9 || subGrid2.size !== 9 || subGrid3.size !== 9){
                return false;
            }
            
            subGrid1.clear();
            subGrid2.clear();
            subGrid3.clear();
        }

    }
    
    return true;  
}
