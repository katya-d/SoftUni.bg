function loadingBar(n) {

    let percentSymbol = "";

    for(let percent = 10; percent <= n; percent += 10) {
        percentSymbol += "%";
    }

    let dotsSymbol = '';

    for(let dots = 100 - n; dots > 0; dots -= 10) {
        dotsSymbol += '.';
    }

    if(n < 100) {
        console.log(`${n}% [${percentSymbol}${dotsSymbol}]`);
        console.log('Still loading...');
        
    }else {
        console.log('100% Complete!');
        console.log(`[${percentSymbol}${dotsSymbol}]`);
    }
}

loadingBar(100);