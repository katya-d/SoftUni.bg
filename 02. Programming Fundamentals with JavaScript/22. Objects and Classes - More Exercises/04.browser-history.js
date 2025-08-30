function browserHistory(inputObject, inputArray) {
  let browser = {};

  for (let line of inputArray) {
    if (line === "Clear History and Cache") {
      let inputObject2 = {
        "Browser Name": inputObject["Browser Name"],
        "Open Tabs": [],
        "Recently Closed": [],
        "Browser Logs": [],
      };

      inputObject = { ...inputObject2 };
    }

    let splittedLine = line.split(" ");
    let command = splittedLine[0];
    let website = splittedLine[1];
    if (command === "Open") {
      inputObject["Open Tabs"].push(website);
      inputObject["Browser Logs"].push(line);
    } else if (command === "Close") {
      if (inputObject["Open Tabs"].includes(website)) {
        inputObject["Recently Closed"].push(website);
        inputObject["Browser Logs"].push(line);

        let indexOfOpenedSite = inputObject["Open Tabs"].indexOf(website);
        inputObject["Open Tabs"].splice(indexOfOpenedSite, 1);
      }
    }
  }

  for (let [key, value] of Object.entries(inputObject)) {
    browser[key] = value;
  }

  console.log(browser["Browser Name"]);

  console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);

  console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);

  console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
console.log("------------------");
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
