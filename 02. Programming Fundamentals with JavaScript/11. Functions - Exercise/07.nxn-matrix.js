function matrix(num) {
    let str = num + '';

    for(let rows = 1; rows <= num; rows++) {
        console.log(`${str} `.repeat(num)); 
    }
}

matrix(3);