function roadRadar(speedString, area) {
  let speed = Number(speedString);
  let overTheLimit = false;
  let diff = 0;
  let limit = 0;

  switch (area) {
    case "motorway":
      if (speed > 130) {
        overTheLimit = true;
        diff = speed - 130;
        limit = 130;
      } else {
        limit = 130;
      }
      break;
    case "interstate":
      if (speed > 90) {
        overTheLimit = true;
        diff = speed - 90;
        limit = 90;
      } else {
        limit = 90;
      }
      break;
    case "city":
      if (speed > 50) {
        overTheLimit = true;
        diff = speed - 50;
        limit = 50;
      } else {
        limit = 50;
      }
      break;
    case "residential":
      if (speed > 20) {
        overTheLimit = true;
        diff = speed - 20;
        limit = 20;
      } else {
        limit = 20;
      }
      break;
  }

  let status = "";

  if (diff <= 20) {
    status = "speeding";
  } else if (diff <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  if (overTheLimit) {
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
