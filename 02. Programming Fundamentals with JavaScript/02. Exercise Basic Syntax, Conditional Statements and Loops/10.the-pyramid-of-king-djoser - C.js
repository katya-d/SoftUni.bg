function pyramid(baseSize, stepHeight) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let height = 0;
    let currentSize = baseSize;

    while (currentSize > 2) {
        height++;
        let outer = (currentSize * 4) - 4;
        let inner = (currentSize - 2) * (currentSize - 2);
        let stone = inner * stepHeight;
        let marbleOrLapis = (currentSize * currentSize - inner) * stepHeight;

        totalStone += stone;

        if (height % 5 === 0) {
            totalLapis += marbleOrLapis;
        } else {
            totalMarble += marbleOrLapis;
        }

        currentSize -= 2;
    }

    // Top layer is gold
    height++;
    totalGold = (currentSize * currentSize) * stepHeight;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * stepHeight)}`);
}

pyramid(11, 1);
