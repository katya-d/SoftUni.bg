function hospital(input) {
    let doctors = 7;
    let period = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;

    for(let day = 1; day <= period; day++) {
        let numberPatients = Number(input[day]);

        if(day % 3 === 0) {
            doctors += 1;
        }

        if(numberPatients > doctors) {
            untreatedPatients = untreatedPatients + (numberPatients - doctors);

            treatedPatients += doctors;
        }else {
            treatedPatients += numberPatients;
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["4", "7", "27", "9", "1"]);

hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
