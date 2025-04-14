function passGuess(password) {
    if(password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }else {
        console.log("Wrong password!");
    }
}

passGuess('qwerty');
passGuess('s3cr3t!P@ssw0rd');
passGuess('s3cr3t!p@ss');