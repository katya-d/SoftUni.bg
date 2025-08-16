function softUniReception(data) {
    data = data.map(Number);
    let totalStudents = data.pop();

    let totalWorkers = data[0] + data[1] + data[2];

    let workHours = 0;

    while(totalStudents > 0) {
        totalStudents -= totalWorkers;
        workHours++;
        
        if(workHours % 4 === 0) {
            workHours++;
        }
    }

    console.log(`Time needed: ${workHours}h.`)
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
