console.log("Задание 4");

let credits = 23580;
let pricePerDroid = 3000;
let numberOfDroids = prompt("Ведите цифрами кол-во дроидов для покупки:");
let totalPrice = numberOfDroids * pricePerDroid;
let creditsBalance = credits - totalPrice;

const CANCELLED_BY_USER = "Отменено пользователем!";
const PURCHASE_DENIED = "Недостаточно средств на счету!";
const PURCHASE_SUCCESS = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBalance} кредитов.`;

if (numberOfDroids === null) {
  console.log(CANCELLED_BY_USER);
} else if (totalPrice > credits) {
  console.log(PURCHASE_DENIED);
} else {
  console.log(PURCHASE_SUCCESS);
}
