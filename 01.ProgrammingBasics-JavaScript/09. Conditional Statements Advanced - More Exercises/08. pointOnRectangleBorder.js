function pointOnRectangleBorder(x1, y1, x2, y2, x, y) {
    let status = "";

    if((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
        status = "Border";
    }else if((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
        status = "Border";
    }else {
        status = "Inside / Outside";
    }

    console.log(status);
}

pointOnRectangleBorder(2, -3, 12, 3, 8, -1);
pointOnRectangleBorder(2, -3, 12, 3, 12, -1);