function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
  }
  function distanceFromHqInFeet(blockNumber) {
    let distance;
    if (blockNumber > 42) {
      distance = (blockNumber - 42) * 264;
    } else {
      distance = (42 - blockNumber) * 264;
    }
    return distance;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let distance;
    if (destination > start) {
      distance = (destination - start) * 264;
    } else {
      distance = (start - destination) * 264;
    }
    return distance;
  }
  
  function calculatesFarePrice(start, destination) {
     const totalDistance = Math.abs(destination - start)*264;
     let fareAmount =0;
  
     if(totalDistance <=400){
         fareAmount =0
     }else if(totalDistance >400 && totalDistance <=2000){
         const chargeableDistance=totalDistance-400
         fareAmount =(chargeableDistance*2)/100
     }else if(totalDistance>2000 && totalDistance<=2500){
         fareAmount=25
     }else{
         return 'cannot travel that far'
     }
     return fareAmount;
  
  }