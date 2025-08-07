function pointsValidation(data) {
  let firstPointX1 = Number(data[0]);
  let firstPointY1 = Number(data[1]);
  let secondPointX2 = Number(data[2]);
  let secondPointY2 = Number(data[3]);

  // Between X1, Y1 and 0, 0
  let distanceBetweenX1Y1And0 = Math.sqrt(
    Math.pow(firstPointX1 - 0, 2) + Math.pow(firstPointY1 - 0, 2)
  );

  if (Number.isInteger(distanceBetweenX1Y1And0)) {
    console.log(`{${firstPointX1}, ${firstPointY1}} to {0, 0} is valid`);
  } else {
    console.log(`{${firstPointX1}, ${firstPointY1}} to {0, 0} is invalid`);
  }

  // Between X2, Y2 and 0, 0
  let distanceBetweenX2Y2And0 = Math.sqrt(
    Math.pow(secondPointX2 - 0, 2) + Math.pow(secondPointY2 - 0, 2)
  );

  if (Number.isInteger(distanceBetweenX2Y2And0)) {
    console.log(`{${secondPointX2}, ${secondPointY2}} to {0, 0} is valid`);
  } else {
    console.log(`{${secondPointX2}, ${secondPointY2}} to {0, 0} is invalid`);
  }

  // Between (X1, Y1) and (X2, Y2)
  let distanceBetweenXAndY = Math.sqrt(
    Math.pow(secondPointX2 - firstPointX1, 2) + Math.pow(secondPointY2 - firstPointY1, 2)
  );

  if (Number.isInteger(distanceBetweenXAndY)) {
    console.log(
      `{${firstPointX1}, ${firstPointY1}} to {${secondPointX2}, ${secondPointY2}} is valid`
    );
  } else {
    console.log(
      `{${firstPointX1}, ${firstPointY1}} to {${secondPointX2}, ${secondPointY2}} is invalid`
    );
  }
}

pointsValidation([3, 0, 0, 4]);
console.log("-------");
pointsValidation([2, 1, 1, 1]);
