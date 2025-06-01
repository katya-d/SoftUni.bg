function vacation(input) {
  let vacationPrice = Number(input[0]);
  let availableMoney = Number(input[1]);
  index = 2;
  let spendDays = 0;
  let totalDays = 0;

  while (availableMoney <= vacationPrice && spendDays < 5) {
    let action = input[index];
    index++;
    let sum = Number(input[index]);
    index++;

    
    totalDays++;
     if (action === "save") {
      availableMoney += sum;
      
      if(availableMoney >= vacationPrice) {
         console.log(`You saved the money for ${totalDays} days.`);
        break;
      }
    } else {
      if(availableMoney <= sum) {
        availableMoney = 0;
      }else {
        availableMoney -= sum;
      }
      
      
    }

    if (action === "spend") {
      spendDays++;
      if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${spendDays}`);
        
        break;
      }
    } else {
      spendDays = 0;
    }

    if (index >= input.length) {
            break;
        }
        
  }
  
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
console.log("---------");
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
console.log("---------");
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
