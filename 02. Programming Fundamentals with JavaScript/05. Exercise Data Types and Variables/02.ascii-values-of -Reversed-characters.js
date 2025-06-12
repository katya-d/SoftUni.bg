function solve(paramOne, paramTwo, paramThree) {
  console.log(`${paramThree}${paramTwo}${paramOne}`);
  console.log(
    `${paramThree.charCodeAt(0)} ${paramTwo.charCodeAt(
      0
    )} ${paramOne.charCodeAt(0)}`
  );
}

solve("a", "b", "c");
solve("%", "2", "o");
solve("1", "5", "p");
