function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetRepairNumber = Math.floor(lostFights / 2);
    let swordRepairNumber = Math.floor(lostFights / 3);
    let shieldRepairNumber = Math.floor(lostFights / 6);
    let armorRepairNumber = Math.floor(lostFights / (2 * 6));

    let helmetRepairPrice = helmetRepairNumber * helmetPrice;
    let swordRepairPrice = swordRepairNumber * swordPrice;
    let shieldRepairPrice = shieldRepairNumber * shieldPrice;
    let armorRepairPrice = armorRepairNumber * armorPrice;

    let totalExpences = helmetRepairPrice + swordRepairPrice + shieldRepairPrice + armorRepairPrice;

    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);
}

gladiatorExpences(7, 2, 3, 4, 5);
gladiatorExpences(23, 12.5, 21.5, 40, 200);
