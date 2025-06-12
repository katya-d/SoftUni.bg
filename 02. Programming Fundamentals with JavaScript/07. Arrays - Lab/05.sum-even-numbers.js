function solve(input) {
    let result = 0;

    for(let num of input) {
        let toNum = Number(num);

        if(toNum % 2 === 0) {
            result += toNum;
        }
    }

    console.log(result);
}

solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);