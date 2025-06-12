function convertDistance(distanceInMeters) {
    let metersToKm = distanceInMeters / 1000;
    let kmToMiles = metersToKm * 0.621371;

    console.log(`${distanceInMeters} meters is equal to ${metersToKm} kilometers.`);
    console.log(`${metersToKm} kilometers is equal to ${kmToMiles.toFixed(2)} miles.`);
    
}

convertDistance(1852);
convertDistance(798);