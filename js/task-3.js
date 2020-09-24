console.log("Задание 3");

const ADMIN_PASSWORD = "jqueryismyjam";
let userPassword = prompt("Enter your password:");

const CANCELLED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
const ACCESS_GRANTED = "Добро пожаловать!";

let message;

if (userPassword === null) {
  message = CANCELLED_BY_USER;
} else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_GRANTED;
} else {
  message = ACCESS_DENIED;
}

alert(message);
