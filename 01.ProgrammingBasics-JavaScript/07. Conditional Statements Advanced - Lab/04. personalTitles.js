function personalTitles(age, sex) {
    if(sex === "m") {
        if(age >= 16) {
            console.log("Mr.");
        }else if(age < 16) {
            console.log("Master");
        }
    }else if(sex === "f") {
        if(age >= 16) {
            console.log("Ms.");
        }else if(age < 16) {
            console.log("Miss")
        }
    }
}

personalTitles(12, "f");
personalTitles(17, "m");
personalTitles(25, "f");
personalTitles(13.5, "m");