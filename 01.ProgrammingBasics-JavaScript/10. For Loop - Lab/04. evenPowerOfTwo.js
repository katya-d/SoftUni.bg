function evenPowerOfTwo(power) {
        for(let i = 0; i <= power; i++) {
            if(i % 2 === 0) {
                console.log(Math.pow(2, i));
            }
        }
}

evenPowerOfTwo(3);
evenPowerOfTwo(4);
evenPowerOfTwo(5);
evenPowerOfTwo(6);
evenPowerOfTwo(7);