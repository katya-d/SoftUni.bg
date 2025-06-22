function listOfProducts(productsList) {
    let sortedProductList = productsList
        .sort()
        .map((number, index) => `${index + 1}.${productsList[index]}`)
        .join('\n');

    console.log(sortedProductList)
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('---------');
listOfProducts(['Watermelon', 'Banana', 'Apples']);