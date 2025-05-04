function fruitShop(fruit, day, quantity) {
    let fruitName = "";
    let dayOfWeek = "";
    let price = 0;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana":
                price = 2.50; 
                fruitName = "banana";  
            break;
            case "apple":
                price = 1.20;
                fruitName = "apple";
            break;
            case "orange":
                price = 0.85; 
                fruitName = "orange";  
            break;
            case "grapefruit":
                price = 1.45; 
                fruitName = "grapefruit";
            break;
            case "kiwi":
                price = 2.70;
                fruitName = "kiwi";   
            break;
            case "pineapple":
                price = 5.50;
                fruitName = "pineapple";
            break;
            case "grapes":
                price = 3.85;
                fruitName = "grapes"
            break;
            default:
                fruitName = "error";
            break;
        }
    }else if(day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana":
                price = 2.70; 
                fruitName = "banana";  
            break;
            case "apple":
                price = 1.25;
                fruitName = "apple";
            break;
            case "orange":
                price = 0.90; 
                fruitName = "orange";  
            break;
            case "grapefruit":
                price = 1.60; 
                fruitName = "grapefruit";
            break;
            case "kiwi":
                price = 3.00;
                fruitName = "kiwi";   
            break;
            case "pineapple":
                price = 5.60;
                fruitName = "pineapple";
            break;
            case "grapes":
                price = 4.20;
                fruitName = "grapes"
            break;
            default:
                fruitName = "error";
            break;
        }
    } else {
        dayOfWeek = 'error'
    }

    if(fruitName !== "error" && dayOfWeek !== "error") {
        let sum = quantity * price;
        console.log(sum.toFixed(2));
    }else {
        console.log("error");
    }
}

fruitShop('apple', 'Tuesday', 2);
fruitShop('orange', 'Sunday', 3);
fruitShop('kiwi', 'Monday', 2.5);
fruitShop('grapes', 'Saturday', 0.5);
fruitShop('tomato', 'Monday', 0.5);