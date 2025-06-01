function accountBalance(input) {
    let step = 0;
    let command = input[step];
    let totalSum = 0;

    while(command !== "NoMoreMoney") {
        command = Number(input[step]);
        if(command >= 0) {
            totalSum += command;
            console.log(`Increase: ${command.toFixed(2)}`);
        }else {
            if(input[step] === "NoMoreMoney") {
                break;
            }
            console.log(`Invalid operation!`);
            break;
        }

        step++;
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
console.log("------------------");
accountBalance(["120", "45.55", "-150"]);
