function rightPlace(firstString, char, secondString) {
  let fullString = firstString.replace("_", char);

  if (fullString === secondString) {
    console.log('Matched');
  }else {
    console.log('Not Matched')
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
