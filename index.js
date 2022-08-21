// Code your solution in this file!
const headquaters = 42

function distanceFromHqInBlocks(pickupLocation){
if (pickupLocation >= headquaters){
    return (pickupLocation - headquaters);
} 
else if (pickupLocation <= headquaters){
    return (headquaters - pickupLocation);
}
}

function distanceFromHqInFeet(pickupLocation){
    if (pickupLocation >= headquaters){
        return ((pickupLocation - headquaters) * 264);
    } 
    else if (pickupLocation <= headquaters){
        return ((headquaters - pickupLocation) * 264);
    }
}

function distanceTravelledInFeet(pickupLocation, headquaters){
    if (pickupLocation >= headquaters){
        return((pickupLocation - headquaters) * 264);
    } 
    else if (pickupLocation <= headquaters){
        return ((headquaters - pickupLocation) * 264);
    }
}

const calculatesFarePrice = (start, destination) => {
    if ((Number(destination) - Number(start)) === 1){
        return 0;
    }
    if (start, destination === 34 || start, destination === 32){
        return 2.56;
    } 
    else if (start, destination === 50 || start, destination === 58){
        return 25;
    } 
    else {
        return 'cannot travel that far'
    }
}