function rotateArray(arr) {
    let rotationsNumber = Number(arr[arr.length - 1]);
    arr.pop();

    for(let i = rotationsNumber; i > 0; i--) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
    
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);