function walking(input) {
    let index = 0;
    let command = input[index];
    let steps = 0;
    let totalSteps = 0;

    while(index < input.length) {
        if(command !== "Going home") {
            steps += Number(command);
            if(steps >= 10000) {
                console.log(`Goal reached! Good job!`);
                totalSteps = steps - 10000;
                console.log(`${totalSteps} steps over the goal!`);
                break;
            }
        }else if(command === "Going home") {
            index++;
            command = input[index];
            steps += Number(command);

            if(steps < 10000) {
                totalSteps = 10000 - steps;
                console.log(`${totalSteps} more steps to reach goal.`);
                break;
            }else {
                console.log(`Goal reached! Good job!`);
                totalSteps = steps - 10000;
                console.log(`${totalSteps} steps over the goal!`);
                break;
            }
        }
        index++;
        command = input[index];
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
