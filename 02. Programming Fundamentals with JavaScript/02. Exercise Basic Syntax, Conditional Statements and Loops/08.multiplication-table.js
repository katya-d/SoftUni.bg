function multiplicationTable(num) {
    let result = "";

    for(let i = 1; i <= 10; i++) {
        result = `${num} X ${i} = ${num * i}`;
        
        console.log(result);
    }
}

multiplicationTable(5);
console.log("-------")
multiplicationTable(2);