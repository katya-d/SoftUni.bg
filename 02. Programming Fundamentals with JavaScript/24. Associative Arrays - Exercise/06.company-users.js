function companyUsers(input) {
  let company = new Map();

  for (let line of input) {
    let [companyName, userId] = line.split(" -> ");
    if (!company.has(companyName)) {
      company.set(companyName, []);
    }

    let users = company.get(companyName);

    if (!users.includes(userId)) {
      users.push(userId);
      company.set(companyName, users);
    }
  }

  let sortedCompanies = Array.from(company).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let line of sortedCompanies) {
    let companyName = line[0];
    console.log(companyName);
    let users = line[1].map((a) => console.log(`-- ${a}`));
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("-----------------------------");
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
