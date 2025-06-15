function tseamAccount(arr) {
  let index = 0;
  let command = "";
  let gameName = "";
  let games = arr[0].split(" ");
  let isIncluded = "";
  while (arr[index] !== "Play!") {
    let stringContent = arr[index + 1];
    let splitContent = stringContent.split(" ");

    if (splitContent[0] !== "Play!") {
      command = splitContent[0];
      gameName = splitContent[1];
      isIncluded = games.includes(gameName);
    } else {
      break;
    }

    if (command === "Install") {
      if (!isIncluded) {
        games.push(gameName);
      }
    } else if (command === "Uninstall") {
      if (isIncluded) {
        let gameIndex = games.indexOf(gameName);
        if (gameIndex !== -1) {
          games.splice(gameIndex, 1);
        }
      }
    } else if (command === 'Expansion') {
      let splitGameName = gameName.split('-');
      isIncluded = games.includes(splitGameName[0]);
      if (isIncluded) {
        let indexOfTheGameName = games.indexOf(splitGameName[0]);
        let expansionGameName = `${splitGameName[0]}:${splitGameName[1]}`;
        games.splice(indexOfTheGameName + 1, 0, expansionGameName);
      }
    } else if (command === 'Update') {
      isIncluded = games.includes(gameName);
      if (isIncluded) {
        let indexOfTheGameName = games.indexOf(gameName);
        games.splice(indexOfTheGameName, 1);
        games.push(gameName);
      }
    }
    
    index++;
  }

  console.log(games.join(' '));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);

tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
