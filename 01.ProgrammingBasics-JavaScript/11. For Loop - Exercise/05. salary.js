function salary(input) {
    let tabsNumber = Number(input[0]);
    let totalSalary = Number(input[1]);

    for(let i = 2; i <= tabsNumber + 2; i++) {
        let openedTab = input[i];

        if(openedTab === "Facebook") {
            totalSalary -=150;
        }else if(openedTab === "Instagram") {
            totalSalary -= 100;
        }else if(openedTab === "Reddit") {
            totalSalary -= 50;
        }

        if(totalSalary <= 0) {
        console.log("You have lost your salary.");
        break;
        }
    }

    if(totalSalary > 0) {
        console.log(totalSalary.toFixed(0));
    }
}

salary([
  10,
  750,
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook"]);

salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
