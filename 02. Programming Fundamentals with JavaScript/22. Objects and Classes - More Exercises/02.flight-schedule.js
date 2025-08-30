function flightShedule(input) {
  let specificSector = input.shift();
  let newlyChangedStatuses = input.shift();
  let flightStatus = input.shift()[0];

  let flightsArray = [];

  for (let flight of specificSector) {
    let flightsParts = flight.split(" ");
    let flights = {
      sector: flightsParts[0],
      Destination: flightsParts.slice(1).join(" "),
      Status: "Ready to fly",
    };
    flightsArray.push(flights);
  }

  for (let line of flightsArray) {
    let flightSector = line.sector;
    let flightDestination = line.Destination;

    for (let statusLine of newlyChangedStatuses) {
      let changedStatus = statusLine.split(" ");
      let sectorName = changedStatus[0];
      let sectorStatus = changedStatus[1];

      if (flightSector === sectorName) {
        line.Status = sectorStatus;
      }
    }

    if (line.Status === flightStatus) {
      console.log(
        `{ Destination: '${flightDestination}', Status: '${line.Status}' }`
      );
    }
  }
}

flightShedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
console.log("-------------------");
flightShedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
