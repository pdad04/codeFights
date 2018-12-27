function bishopAndPawn(bishop, pawn) {
    const bishopCharCode = bishop.charCodeAt(0);
    const bishopNum = bishop.charAt(1);
    const pawnCharCode = pawn.charCodeAt(0);
    const pawnNum = pawn.charAt(1);
    
    return Math.abs(bishopCharCode - pawnCharCode) === Math.abs(bishopNum - pawnNum) ? true : false;
    
}
