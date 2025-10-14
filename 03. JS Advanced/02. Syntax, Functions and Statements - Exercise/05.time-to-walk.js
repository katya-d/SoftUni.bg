function timeToWalk(steps, footprintInMeters, speed) {
  let totalLengthInMeters = steps * footprintInMeters;
  let breakTimeInMinutes = Math.trunc(totalLengthInMeters / 500);
  let breakTimeInSeconds = breakTimeInMinutes * 60;

  let speedInMeters = speed / 3.6;

  let timeInSeconds = totalLengthInMeters / speedInMeters;
  let totalTimeInSeconds = timeInSeconds + breakTimeInSeconds;

  let hours = Math.trunc(totalTimeInSeconds / 3600);
  let minutes = Math.trunc(totalTimeInSeconds / 60);
  let seconds = Math.ceil(totalTimeInSeconds % 60);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
