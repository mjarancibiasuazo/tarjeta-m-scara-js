
//REFERENCIA A CADA INPUT HTML
const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

//MÁSCARA
const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

//VARIABLES
let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

//EVENTO INPUT CARD
inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();//permite eliminar la funcionalidad nativa de la tecla keydown.
  handleInput(maskNumber, e.key, cardNumber);//pide máscara, la tecla que estoy presionando y el arreglo.
  inputCard.value = card
  Number.join("");
});

//EVENTO INPUT DATE
inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join("");
});

//EVENTO INPUT CVV
inputCVV.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join("");
});

//VALIDACIÓN NÚMEROS
function handleInput(mask, key, arr) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //si la tecla que voy a presionar es igual a backspace y si el largo del arreglo es mayor a 0
  if (key === "Backspace" && arr.length > 0) {//simulando la eliminación de un caracter dentro del input.
    arr.pop();
    return;
  }

  //si existe el valor de key en el arreglo y además cuando el arreglo le saco la longitud le sumo 1 es menor o igual que mi másscara
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
}