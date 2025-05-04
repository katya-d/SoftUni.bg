function skiTrip(tripDays, roomType, review) {
    let roomPrice = 0;

    tripDays -= 1;

    switch (roomType) {
        case "room for one person":
            roomPrice = tripDays * 18;
        break;
    
        case "apartment":
            roomPrice = tripDays * 25;

            if(tripDays < 10) {
                roomPrice -= roomPrice * 0.30;
            }else if(tripDays >= 10 && tripDays <= 15) {
                roomPrice -= roomPrice * 0.35;
            } else if(tripDays > 15) {
                roomPrice -= roomPrice * 0.50;
            }
        break;

        case "president apartment":
            roomPrice = tripDays * 35;

            if(tripDays < 10) {
                roomPrice -= roomPrice * 0.10;
            }else if(tripDays >= 10 && tripDays <= 15) {
                roomPrice -= roomPrice * 0.15;
            } else if(tripDays > 15) {
                roomPrice -= roomPrice * 0.20;
            }
        break;
    }

    if(review === "positive") {
        roomPrice += (roomPrice * 0.25);
    }else if(review === "negative") {
        roomPrice -= (roomPrice * 0.10);
    }

    console.log(roomPrice.toFixed(2));
}

skiTrip(14, 'apartment', 'positive');
skiTrip(30, 'president apartment', 'negative');
skiTrip(12, 'room for one person', 'positive');
skiTrip(2, 'apartment', 'positive');