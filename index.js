// Code your solution in this file!

const hqStreet = 42;
const feetPerBlock = 264;
const pricePerFoot = 0.02; //dollars

function distanceFromHqInBlocks(street) {
    return Math.abs(street - hqStreet);
}

function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street) * feetPerBlock);
}

function distanceTravelledInFeet(street1, street2) {
    return (feetPerBlock * Math.abs(street1 - street2));
}

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination);
    if (x <= 400) {
        return 0;
    }
    if ((x > 400) && (x <= 2000)) {
        return (pricePerFoot * (x - 400));
    }
    if ((x > 2000) && (x <= 2500)) {
        return 25;
    }
    if (x > 2500) {
        return 'cannot travel that far';
    }
}