function asciiValues(firstChar, secondChar, thirdChar) {
  let concatenatedChars = thirdChar + secondChar + firstChar;

  let firstCharAscii = firstChar.charCodeAt();
  let secondCharAscii = secondChar.charCodeAt();
  let thirdCharAscii = thirdChar.charCodeAt();

  console.log(concatenatedChars);
  console.log(`${thirdCharAscii} ${secondCharAscii} ${firstCharAscii}`);
}

asciiValues("a", "b", "c");
console.log("-----------");
asciiValues("%", "2", "o");
console.log("-----------");
asciiValues("1", "5", "p");
