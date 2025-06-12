function chessBoard(n) {
  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= n; i++) {
    console.log(` <div>`);
    if (i % 2 === 1) {
      for (let j = 1; j <= n; j++) {
        if (j % 2 === 1) {
          console.log(`  <span class="black"></span>`);
        } else {
          console.log(`  <span class="white"></span>`);
        }
      }
    }else {
        for (let j = 1; j <= n; j++) {
        if (j % 2 === 1) {
          console.log(`  <span class="white"></span>`);
        } else {
          console.log(`  <span class="black"></span>`);
        }
      }
    }
    console.log(` </div>`);
  }
  console.log(`</div>`);
}

chessBoard(4);
