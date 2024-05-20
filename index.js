const passBox = document.querySelector(".pw-box input");
const copyBtn = document.querySelector(".text-copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "qwertyuioplkjhgfsadzxcvbnm";
const number = "0123456789";
const symbol = '!@#$%^&*().?":<>[]';
let length = 12;
const allChars = uppercase + lowercase + number + symbol;

function genPassword() {
  let password = "";
  //   password += password +
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password;
}

function copyText() {
  passBox.select();
  document.execCommand("copy");
}
