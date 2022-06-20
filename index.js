let userLetter = String(prompt("Write a letter"));

let findUser = users.filter(user => (user.name).includes(userLetter));
console.log(findUser);

console.log(`Hi ${userLetter.name}`);