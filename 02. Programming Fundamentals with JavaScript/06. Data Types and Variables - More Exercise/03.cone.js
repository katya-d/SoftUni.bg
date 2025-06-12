function cone(baseRadius, baseHeight) {
    let volume = 1/3 * baseHeight * Math.PI * Math.pow(baseRadius, 2);
    let area = Math.PI * baseRadius * (baseRadius + Math.sqrt((Math.pow(baseHeight, 2) + Math.pow(baseRadius, 2))));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);