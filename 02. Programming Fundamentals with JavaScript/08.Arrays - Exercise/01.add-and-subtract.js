function addAndSubtract(arr) {
    let arraySum = 0;
    let modifiedArraySum = 0;
    let modifiedArray = [];

    for(let i = 0; i < arr.length; i++) {
        let value = Number(arr[i]);
        arraySum += value;
       if(value % 2 === 0) {
        modifiedArray[i] = (value + i);
       }else {
        modifiedArray[i] = (value - i);
       }

       let newValue = Number(modifiedArray[i]);
       modifiedArray[i] = newValue;
       modifiedArraySum += newValue;
    }

    console.log(modifiedArray);
    console.log(arraySum);
    console.log(modifiedArraySum); 
}

addAndSubtract([5, 15, 23, 56, 35]);
console.log("----------------");
addAndSubtract([-5, 11, 3, 0, 2]);