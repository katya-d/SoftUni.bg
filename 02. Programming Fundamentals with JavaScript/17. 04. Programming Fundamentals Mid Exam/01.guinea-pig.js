function guineaPig(arr) {
  let foodInGrams = Number(arr[0]) * 1000;
  let hayInGrams = Number(arr[1]) * 1000;
  let coverInGrams = Number(arr[2]) * 1000;
  let pigWeightInGrams = Number(arr[3]) * 1000;

  for (let day = 1; day <= 30; day++) {

    foodInGrams -= 300;

    if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }

     if (day % 2 === 0) {
      hayInGrams -= foodInGrams * 0.05;
    }

    if (day % 3 === 0) {
      coverInGrams -= pigWeightInGrams / 3;
    }
  
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(
      2
    )}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(
      coverInGrams / 1000
    ).toFixed(2)}.`
  );
}

guineaPig([10, 5, 5.2, 1]);
guineaPig([1, 1.5, 3, 1.5]);
guineaPig([9, 5, 5.2, 1]);
