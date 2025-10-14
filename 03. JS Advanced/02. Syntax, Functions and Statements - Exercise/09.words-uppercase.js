function extractAndConvert(text) {
  let result = text
    .toUpperCase()
    .split(/[\W]+/)
    .filter((w) => w.length > 0)
    .join(", ");

  console.log(result);
}

extractAndConvert("Hi, how are you?");
extractAndConvert("hello");
