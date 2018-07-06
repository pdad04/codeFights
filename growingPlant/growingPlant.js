function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let totalGrowth = 0;
    let count = 0;
    
    while(totalGrowth < desiredHeight){
                
        totalGrowth += upSpeed;
        count++;
        
        if(totalGrowth >= desiredHeight){
            return count++;
        }
        
        totalGrowth -= downSpeed;
    }
}