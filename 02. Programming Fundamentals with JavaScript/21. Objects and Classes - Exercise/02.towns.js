function towns(dataArray) {
    for(let townInput of dataArray) {
        let townData = townInput.split(' | ');

        let town = townData[0];
        let latitude = (Number(townData[1])).toFixed(2);
        let longitude = (Number(townData[2])).toFixed(2);

        let townInfo = {
            town,
            latitude,
            longitude
        }

        console.log(townInfo);
    }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
console.log("---------------");
towns(["Plovdiv | 136.45 | 812.575"]);
