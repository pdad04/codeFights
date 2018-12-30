function chessKnight(cell) {
    const horizontalLeftBoundry = 97;
    const horizontalRightBoundry = 104;
    const verticalTopBoundry = 8;
    const vertialBottomBoundry = 1;
    
    const position = [cell[0].charCodeAt(0), parseInt(cell[1])];
    let possibleMoves = 0;

    // Horizontal
    if(position[0] + 2 <= horizontalRightBoundry){
        if(position[1] + 1 <= verticalTopBoundry) possibleMoves++;
        if(position[1] - 1 >= vertialBottomBoundry) possibleMoves++;
    }
    
    if(position[0] - 2 >= horizontalLeftBoundry){
        if(position[1] + 1 <= verticalTopBoundry) possibleMoves++;
        if(position[1] - 1 >= vertialBottomBoundry) possibleMoves++;
    }
    
    // Veritcal
    if(position[1] + 2 <= verticalTopBoundry){
        if(position[0] + 1 <= horizontalRightBoundry) possibleMoves++;
        if(position[0] - 1 >= horizontalLeftBoundry) possibleMoves++;
    }
    
    if(position[1] - 2 >= vertialBottomBoundry){
        if(position[0] + 1 <= horizontalRightBoundry) possibleMoves++;
        if(position[0] - 1 >= horizontalLeftBoundry) possibleMoves++;
    }
    
    return possibleMoves;
    

}
