// Code your solution in this file!
const hqLocation = 42;

function distanceFromHqInBlocks(location){
    let distanceFromHQBlocks = Math.abs(location - hqLocation);
    return distanceFromHQBlocks;
}

function distanceFromHqInFeet(location) {
    let distanceFromHQFeet = Math.abs(location - hqLocation) * 264;
    return distanceFromHQFeet;
}

function distanceTravelledInFeet(start, end) {
    let distanceTravelled = Math.abs(start - end) * 264;
    return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
    let farePrice = 0;
    let blocks = Math.abs(start - destination);
    let feet = blocks * 264;
    if (feet <= 400){
        return farePrice;
    }
    else if (feet > 400 && feet <= 2000) {
        farePrice = (feet-400) * 0.02;
        return farePrice
    }
    else if (feet > 2000 && feet < 2500){
        farePrice = 25;
        return farePrice;
    }
    else {
        return 'cannot travel that far'
    }
}