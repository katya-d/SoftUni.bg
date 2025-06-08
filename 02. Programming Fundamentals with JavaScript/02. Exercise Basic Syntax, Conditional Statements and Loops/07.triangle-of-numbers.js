function triangleOfNumbers(num) {
    let rows = "";
    let cols = "";
    for(let i = 1; i <= num; i++) {
        
        for(let j = 1; j <= i; j++) {
              cols += i + " ";
        }

        console.log(cols);
        cols = "";
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);