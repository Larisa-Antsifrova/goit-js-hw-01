console.log("Задание 6");

let total = 0;

// do {
//   let input = prompt("Введи число:");

//   if (input === null) {
//     break;
//   }

//   input = Number(input);
//   total += input;
// } while (true);

while (true) {
  let input = prompt("Введи число:");

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    continue;
  }

  total += input;
}

console.log(`Общая сумма: ${total}`);
