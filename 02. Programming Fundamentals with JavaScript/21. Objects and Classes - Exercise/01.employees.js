function emplpoyees(namesArray) {

    for(let name of namesArray) {
        let personalNumber = name.length;

        let employeeObj = {
            name,
            personalNumber
        }

        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
    }
}

emplpoyees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
emplpoyees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
