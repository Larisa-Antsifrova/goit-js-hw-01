console.log("Задание 2");

const total = 100;
let ordered = 100;
let messageDenied = "На складе недостаточно твоаров!";
let messageSuccess = "Заказ оформлен, с вами свяжется менеджер";

if (ordered > total) {
  console.log(messageDenied);
} else {
  console.log(messageSuccess);
}
