function distanceConverter(distnaceInMeters) {
    let oneKmInMeters = 1000;
    let distanceInKm = distnaceInMeters / oneKmInMeters;
    const oneKmInMiles = 0.621371;
    let distanceInMiles = distanceInKm * oneKmInMiles;

    console.log(`${distnaceInMeters} meters is equal to ${distanceInKm} kilometers.`);
    console.log(`${distanceInKm} kilometers is equal to ${distanceInMiles.toFixed(2)} miles.`);
}

distanceConverter(1852);
console.log('--------------------------');
distanceConverter(798);