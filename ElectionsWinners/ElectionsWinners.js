function electionsWinners(votes, k) {
    const maxCurrentVotes = Math.max(...votes);
    let numberOfWinners = 0;
    let maxFinishedVotes = 0;
    
    // If k is 0 need to check if there is one winner
    if(k === 0){
        if(votes.indexOf(Math.max(...votes)) === votes.lastIndexOf(...votes)){
            return 1
        }else{
            return 0;
        }
    }
    
    votes.forEach(currentVotes => {
      let finishedVotes = currentVotes + k;
      if(finishedVotes > maxCurrentVotes && finishedVotes > maxFinishedVotes){
          numberOfWinners++;
      }  
    });
    
    return numberOfWinners;
}