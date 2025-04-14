function swimmingRecord(worldRecordInSeconds, distanceInMeters, swimmingTimePerMeter) {

   let delayTime = Math.floor(distanceInMeters / 15) * 12.5;

   let totalSwimingTime = distanceInMeters *  swimmingTimePerMeter;

   let ivanTime = totalSwimingTime + delayTime;

   let difference = ivanTime - worldRecordInSeconds;

   if(difference < 0) {
    console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
   }else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
   }
}

swimmingRecord(10464, 1500, 20);
swimmingRecord(55555.67, 3017, 5.03);