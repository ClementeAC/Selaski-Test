const KEYBOARD: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Orden de teclado dado
const DIGITS: number[] = [1, 2, 9, 7] //Digitos a introducir
const INITIAL_CURSOR_POSITION: number = 0; //Indice inicial del cursor
const TIME_BETWEEN_DIGITS_MS: number = 1; //Tiempo entre digitos


//Calcula el tiempo de escribir un digito
//Esta funcion toma un numero a escribir, un orden de teclado y una posicion de cursor actual

function calculateTypingTime(number: number, keyboard: number[], cursorPosition: number): number {
  const digitIndex: number = keyboard.indexOf(number);
  const distanceToTravel: number = Math.abs(cursorPosition - digitIndex);
  const timeToTravel: number = distanceToTravel * TIME_BETWEEN_DIGITS_MS;
  return timeToTravel;
}

//Calcula el tiempo total de escribir los digitos
//Esta funcion toma un arreglo de numeros a escribir, un array de teclado e itera por aca numero
//calculando el tiempo de cada digito usando la funcion calculateTypingTime
//Y lo suma en el tiempo total.

function calculateTotalTypingTime(numbers: number[], keyboard: number[]): number {
  let cursorPosition: number = INITIAL_CURSOR_POSITION;
  let totalTime: number = 0;
  for (const number of numbers) {
    const timeToTypeDigit: number = calculateTypingTime(number, keyboard, cursorPosition);
    totalTime += timeToTypeDigit;
    cursorPosition = keyboard.indexOf(number);
  }
  return totalTime;
}

const totalTimeTaken: number = calculateTotalTypingTime(DIGITS, KEYBOARD)
console.log("Tiempo tomado: " + totalTimeTaken + "ms")

module.exports = {calculateTotalTypingTime: calculateTotalTypingTime, calculateTypingTime: calculateTypingTime}