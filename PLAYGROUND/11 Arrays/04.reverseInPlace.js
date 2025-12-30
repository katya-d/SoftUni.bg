function reverseInPlace(input) {
    input.reverse();
    
    console.log(input.join(' '));
}

reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
