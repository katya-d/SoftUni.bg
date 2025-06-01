function password(input) {
  let index = 0;
  let username = input[index];
  index++;
  let userPassword = input[index];
  let enteredPassword = "";
  while (enteredPassword !== userPassword) {
      enteredPassword = input[index];
      index++;
      
      if(enteredPassword === userPassword) {
        console.log(`Welcome ${username}!`);
      }
  }
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
