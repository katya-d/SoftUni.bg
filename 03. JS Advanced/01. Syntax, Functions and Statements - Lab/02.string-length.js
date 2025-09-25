function strLength(strOne, strTwo, strThree) {
    let strSum = strOne.length + strTwo.length + strThree.length;

    let average = strSum / 3;

    console.log(strSum)
    console.log(Math.floor(average));
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');