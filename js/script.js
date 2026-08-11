console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);


console.log("Well, it was nice to talk to you. Have a nice day!");


day 2 


console.log("Hello! I'm your coding fun fact guide!");

let botName ="YAGIbot";
let botLocation ="YAGISpc";
let favoriteLanguage ="swift";

console.log("My name is " + botName + " and I live on " +botLocation+".")// la rpm aca perdi como una hora y el error era un cagado espacion al lado de las comillas
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = "s"; 
codingFact= "His favorite programming is "+favoriteLanguage + ".";
console.log(codingFact);
codingFact = "He enjoys coding in " + favoriteLanguage + ".";
console.log(codingFact);
codingFact = favoriteLanguage + " is his top choice for programming.";
console.log(codingFact);

console.log("It was fun sharing these facts with you. Goodbye! - " +botName + " from " +botLocation+  ".");


let adjective ="cranky";
let noun="dildo";
let verb="buzzes";
let place="home";
let adjective2="sticky"
let noun2="phone";
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";  //aca mi error fue no haber colocado comillas y espacion entre adjetivo y noun

console.log("First story: " + firstStory);

// Nuevos valores
adjective = "brave";
noun = "knight";
verb = "running";
place = "castle";
adjective2 = "fiery";
noun2 = "apples";

// Segunda historia
let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// Mostrar en consola
console.log("Second story: " + secondStory);


d3 console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));
console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));


_____________________________________________________________________________________________________________________________________________________________________
console.log("I hope you enjoyed learning today.");

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");


_____________________________________________________________________________________________________________________________________________________________________
[11:57, 2/5/2026] Abuelo Humber: const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.);

const message = "Welcome to freeCodeCamp!";

console.log("Here ar…
[11:58, 2/5/2026] Abuelo Humber: (actulaizar mñañna dominigo)
[15:45, 2/5/2026] Abuelo Humber: const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice (-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);


_____________________________________________________________________________________________________________________________________________________________________
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd()
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);


_____________________________________________________________________________________________________________________________________________________________________
const firstResult = 10 + 5;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);

let counter = 10;
console.log(`Counter is currently ${counter}`);
let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);

const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 13;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}

_____________________________________________________________________________________________________________________________________________________________________
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");

______________________________________________________________________________________________________________________________________________________________________________
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune)

console.log("oil day 21 morrow ill study 2ble   done ");
______________________________________________________________________________________________________________________________________________________________________________

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

______________________________________________________________________________________________________________________________________________________________________________

function booWho(arg) {
  // typeof devuelve el tipo de dato de arg como string
  // ej: typeof true    → "boolean"
  // ej: typeof 42      → "number"
  // ej: typeof "hola"  → "string"
  // ej: typeof null    → "object"

  // === "boolean" compara si el tipo es exactamente "boolean"
  // si arg es true o false → devuelve true
  // si arg es cualquier otra cosa → devuelve false

  // El return devuelve directamente el resultado de la comparación
  // no necesita if/else porque === ya devuelve true o false
  return typeof arg === "boolean";
}

// Ejemplos:
console.log(booWho(true));    // true  ✅ es boolean
console.log(booWho(false));   // true  ✅ es boolean
console.log(booWho(42));      // false ❌ es number
console.log(booWho("true"));  // false ❌ es string
console.log(booWho(null));    // false ❌ es object
}
______________________________________________________________________________________________________________________________________________________________________________


let email = "usuario@gmail.com";

function maskEmail(email) {

  // indexOf("@") recorre el string buscando el carácter "@" y devuelve su posición numérica.
  // Lo necesitamos porque no sabemos qué tan largo es el nombre de usuario,
  // puede tener 5 o 20 caracteres. Se calcula dinámicamente cada vez que la función corre.
  // ej: "apple.pie@example.com" → atIndex = 9
  // ej: "freecodecamp@example.com" → atIndex = 12
  const atIndex = email.indexOf("@");

  // Los strings en JS funcionan como arrays, cada carácter tiene un índice.
  // [0] siempre es el primero.
  // Lo guardamos porque el ejercicio pide conservar el primer carácter visible.
  // ej: "apple.pie@example.com" → first = "a"
  const first = email[0];

  // atIndex es donde está el "@", entonces atIndex - 1 es el carácter justo antes,
  // es decir el último del nombre de usuario.
  // Lo guardamos porque el ejercicio pide conservar el último carácter visible.
  // ej: "apple.pie@example.com" → email[8] → last = "e"
  const last = email[atIndex - 1];

  // repeat() repite un string N veces.
  // atIndex es el total de caracteres del nombre de usuario.
  // Restamos 2 porque ya tomamos el primero y el último,
  // entonces quedan atIndex - 2 caracteres para enmascarar con "*".
  // Si usáramos solo atIndex sin restar 2, incluiríamos el primero y el último
  // también, rompiendo el formato esperado.
  // ej: atIndex = 9 → repeat(7) → "*******"
  const masked = "*".repeat(atIndex - 2);

  // slice(atIndex) corta el string desde la posición del "@" hasta el final,
  // devolviendo el dominio completo incluyendo el "@".
  // ej: "apple.pie@example.com" → "@example.com"
  // El operador "+" concatena los strings uno tras otro en orden:
  // first + masked + last + dominio
  // ej: "a" + "*******" + "e" + "@example.com" = "a*******e@example.com" ✅
  return first + masked + last + email.slice(atIndex);
}

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));    // "a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com")); // "f**********p@example.com"

let email = "usuario@gmail.com";

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const first = email[0];
  const last = email[atIndex - 1];
  const masked = "*".repeat(atIndex - 2);
  return first + masked + last + email.slice(atIndex);
}

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));




___________________________________________________________________________________________________________________________________________________________________________




const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  }else   {
    return "You don't qualify for any loans."
  }
  }
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg
  

___________________________________________________________________________________________________________________________________________________________________________

let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}
let count = 0;
// Variable global inicializada en 0.
// "global" significa que existe fuera de la función
// y puede ser modificada desde dentro de ella.

function cardCounter(card) {

  // Cartas 2-6 suman 1 al count.
  // card >= 2 && card <= 6 verifica que el número esté en ese rango.
  // count++ es postfijo, incrementa count en 1 después de evaluarlo.
  if (card >= 2 && card <= 6) {
    count++;

  // Cartas 10, J, Q, K, A restan 1 al count.
  // Se usan === porque los valores son exactos, no rangos.
  // Las letras van entre comillas porque son strings, no números.
  // count-- es postfijo, decrementa count en 1 después de evaluarlo.
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  // Cartas 7, 8, 9 no entran en ningún if,
  // por lo que count no se modifica. Se ignoran.

  // Si count es positivo (mayor que 0) → devuelve count + "Bet"
  // Si count es 0 o negativo → devuelve count + "Hold"
  // El template literal ${count} inserta el valor actual de count en el string.
  // El espacio entre ${count} y Bet/Hold es el separador requerido. ej: "3 Bet", "-1 Hold"
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

/* 
javascriptlet count = 0;
let permite que count sea modificada dentro de la función. 
const no funcionaría porque su valor cambia. Es global porque está declarada 
fuera de la función, lo que permite que cardCounter la lea y modifique.*/

javascriptif (card >= 2 && card <= 6) {
  count++;
}
/*
>= y <= verifican que card esté dentro del rango 2-6 inclusive. && exige que 
ambas condiciones sean true al mismo tiempo. count++ es postfijo,
 incrementa count en 1 después de usarlo en esa línea.
*/

javascript} else if (card === 10 || card === "J" || card === "Q" 
|| card === "K" || card === "A") {
  count--;
}
/*
=== compara valor y tipo, necesario porque "J", "Q", "K", "A" 
son strings y 10 es número. || significa que basta con que una condición 
sea true para ejecutar el bloque. count-- decrementa count en 1. Las cartas
 7, 8, 9 no entran en ningún if, por lo que count no cambia. */

javascriptif (count > 0) {
  return `${count} Bet`;
} else {
  return `${count} Hold`;
}
/* 
Después de modificar count, se evalúa su valor actual. Si es
 positivo devuelve "Bet", si es 0 o negativo devuelve "Hold". El template 
 literal ` ` con ${} inserta el valor de count directamente en el string, 
 separado por un espacio de Bet o Hold, cumpliendo el formato -3 Hold o 2 Bet.
¿Deseas explicación adicional?*/



___________________________________________________________________________________________________________________________________________________________________________

let year = 2024;

function isLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result);


let year = 2024;
/* 
Se declara year fuera de la función para que sea global
y pueda pasarse como argumento a isLeapYear.
Se usa let porque su valor puede cambiar si se quiere
probar con otro año.
*/

function isLeapYear(year) {
/*
La función recibe year como parámetro. Aunque existe una
variable global year, este parámetro es independiente y
solo vive dentro de la función.
*/

  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  }
  /*
  % es el operador módulo, devuelve el residuo de la división.
  Si year % 400 === 0 significa que el año es divisible
  exactamente por 400, lo que lo hace bisiesto sin excepción.
  Ej: 2000 % 400 = 0 → bisiesto.
  */

  else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  }
  /*
  Si llega aquí, no es divisible por 400 pero sí por 100.
  Los años divisibles por 100 pero no por 400 NO son bisiestos.
  Ej: 1900 % 100 = 0 pero 1900 % 400 ≠ 0 → no bisiesto.
  */

  else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  }
  /*
  Si llega aquí, no es divisible por 100 ni por 400.
  Si es divisible por 4, entonces sí es bisiesto.
  Ej: 2024 % 4 = 0 → bisiesto.
  */

  else {
    return `${year} is not a leap year.`;
  }
  /*
  Si no cumple ninguna condición anterior,
  el año no es bisiesto.
  Ej: 2023 % 4 ≠ 0 → no bisiesto.
  */
}

const result = isLeapYear(year);
/*
Se llama la función con year como argumento y el valor
retornado se guarda en result. Se usa const porque
result no cambiará después de ser asignado.
*/

console.log(result);
/*
Muestra en consola el string retornado por isLeapYear.
Ej: "2024 is a leap year."
*/

___________________________________________________________________________________________________________________________________________________________________________


function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }



}function truncateString(str, num) {
/*
La función recibe dos parámetros:
str → la cadena que se desea truncar.
num → el número máximo de caracteres permitidos.
*/

  if (str.length > num) {
/*
str.length devuelve el número total de caracteres del string.
Si es mayor que num, el string necesita ser truncado.
Ej: "Hello World".length = 11, num = 5 → 11 > 5 → truncar.
*/

    return str.slice(0, num) + "...";
/*
slice(0, num) corta el string desde el índice 0 hasta num (sin incluirlo),
devolviendo solo los primeros num caracteres.
Ej: "Hello World".slice(0, 5) → "Hello"
El operador + concatena "..." al final del string truncado.
Resultado: "Hello..."
*/

  } else {
    return str;
/*
Si str.length es igual o menor que num, el string
se devuelve sin ningún cambio.
Ej: "Hi".length = 2, num = 5 → 2 <= 5 → devuelve "Hi"
*/
  }
}
___________________________________________________________________________________________________________________________________________________________________________

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}


___________________________________________________________________________________________________________________________________________________________________________

c3 stp 36

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

function confirmEnding(str, target) {
/*
La función recibe dos parámetros:
str → la cadena principal que se desea verificar.
target → la cadena con la que se comprueba si str termina.
*/

  return str.slice(str.length - target.length) === target;
/*
str.length → número total de caracteres de str.
target.length → número total de caracteres de target.
str.length - target.length → índice donde empieza el final de str
con la misma longitud que target.
Ej: str = "Bastian", target = "ian"
str.length = 7, target.length = 3
7 - 3 = 4 → slice empieza en índice 4
str.slice(4) → "ian"
"ian" === "ian" → true ✅

Si target no coincide con el final:
str = "Bastian", target = "abc"
str.slice(4) → "ian"
"ian" === "abc" → false ❌
*/
}

___________________________________________________________________________________________________________________________________________________________________________

c4 stp 25 d 34

console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));

const shoppingList = [];
/*
Se declara un array vacío con const. Se usa const porque la variable
shoppingList siempre apuntará al mismo array, aunque su contenido cambie.
*/

shoppingList.push("Apples");
/*
push() agrega un elemento al final del array.
shoppingList → ["Apples"]
*/

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}
/*
Función que recibe el array como argumento y devuelve un string
con el contenido actual del array usando template literal.
Cuando un array se inserta en un template literal, JS lo convierte
automáticamente a string separando los elementos con comas.
*/

shoppingList.push("Grapes");
/*
push() agrega "Grapes" al final del array.
shoppingList → ["Apples", "Grapes"]
*/

shoppingList.unshift("Vegetable Oil");
/*
unshift() agrega un elemento al inicio del array.
shoppingList → ["Vegetable Oil", "Apples", "Grapes"]
*/

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
/*
push() puede recibir múltiples argumentos y los agrega todos al final.
shoppingList → ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky", "Potato Chips"]
*/

shoppingList.pop();
/*
pop() elimina el último elemento del array.
shoppingList → ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
*/

shoppingList.unshift("Chocolate Cake");
/*
unshift() agrega "Chocolate Cake" al inicio del array.
shoppingList → ["Chocolate Cake", "Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
*/

shoppingList.shift();
/*
shift() elimina el primer elemento del array.
shoppingList → ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
*/

shoppingList[0] = "Canola Oil";
/*
[0] accede al índice 0 del array (primer elemento) y lo reemplaza.
shoppingList → ["Canola Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
*/

console.log(getShoppingListMsg(shoppingList));
/*
Llama la función con el array final como argumento y muestra
el resultado en consola.
*/

___________________________________________________________________________________________________________________________________________________________________________

___________________________________________________________________________________________________________________________________________________________________________
c4 stp 26 d 34

___________________________________________________________________________________________________________________________________________________________________________

let lunches = [];

function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length > 0) {
    let removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length > 0) {
    let removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}
- - - - - - - -
___________________________________________________________________________________________________________________________________________________________________________

let lunches = [];
/*
Se declara un array vacío con let porque su contenido
cambiará a lo largo del programa al agregar o eliminar elementos.
*/

function addLunchToEnd(arr, lunchItem) {
/*
Recibe el array y un string como argumentos.
arr → el array donde se agregará el elemento.
lunchItem → el string que se agregará al final.
*/
  arr.push(lunchItem);
  /*
  push() agrega lunchItem al final del array.
  Modifica el array original directamente.
  */
  return arr;
  /*
  Devuelve el array actualizado para poder encadenar
  operaciones o verificar el resultado.
  */
}

function addLunchToStart(arr, lunchItem) {
/*
Misma estructura que addLunchToEnd pero agrega al inicio.
*/
  arr.unshift(lunchItem);
  /*
  unshift() agrega lunchItem al inicio del array,
  desplazando los demás elementos una posición hacia la derecha.
  */
  return arr;
}

function removeLastLunch(arr) {
/*
Recibe solo el array como argumento.
Elimina el último elemento si el array no está vacío.
*/
  if (arr.length > 0) {
    /*
    arr.length > 0 verifica que el array tenga al menos un elemento
    antes de intentar eliminar, evitando errores.
    */
    let removedItem = arr.pop();
    /*
    pop() elimina y devuelve el último elemento del array.
    Se guarda en removedItem para usarlo en el console.log.
    */
    return arr;
  } else {
    /*
    Si el array está vacío, no hay nada que eliminar.
    */
  }
  return arr;
}

function removeFirstLunch(arr) {
/*
Misma estructura que removeLastLunch pero elimina el primer elemento.
*/
  if (arr.length > 0) {
    let removedItem = arr.shift();
    /*
    shift() elimina y devuelve el primer elemento del array,
    desplazando los demás elementos una posición hacia la izquierda.
    */
    return arr;
  } else {
  }
  return arr;
}

function getRandomLunch(arr) {
/*
Selecciona y muestra un elemento aleatorio del array.
No devuelve valor, solo registra en consola.
*/
  if (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    /*
    Math.random() genera un número entre 0 y 1.
    Se multiplica por arr.length para obtener un número entre 0 y la longitud del array.
    Math.floor() redondea hacia abajo para obtener un índice entero válido.
    Ej: array de 5 elementos → índices válidos 0,1,2,3,4
    Math.floor(Math.random() * 5) → número entre 0 y 4.
    */
  } else {
  }
}

function showLunchMenu(arr) {
/*
Muestra todos los elementos del array en consola.
*/
  if (arr.length > 0) {
    /*
    join(", ") convierte el array en un string donde cada elemento
    está separado por una coma y un espacio.
    Ej: ["Pizza", "Burger", "Salad"] → "Pizza, Burger, Salad"
    */
  } else {
  }
}

- - - - - - - -- - - - - - - -- - - - - - - -- - - - - - - -

function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if (strokes === par + 2) {
    return "Double Bogey";
  }

  if (strokes >= par + 3) {
    return "Go Home!";
  }
}

- - - - - - - -- - - - - - - -- - - - - - - -- - - - - - - -

function golfScore(par, strokes) {

  /* Verifica si el jugador hizo el hoyo en un solo golpe */
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  /* Verifica si los golpes son 2 o más debajo del par */
  if (strokes <= par - 2) {
    return "Eagle";
  }

  /* Verifica si los golpes son 1 debajo del par */
  if (strokes === par - 1) {
    return "Birdie";
  }

  /* Verifica si los golpes son iguales al par */
  if (strokes === par) {
    return "Par";
  }

  /* Verifica si los golpes son 1 por encima del par */
  if (strokes === par + 1) {
    return "Bogey";
  }

  /* Verifica si los golpes son 2 por encima del par */
  if (strokes === par + 2) {
    return "Double Bogey";
  }

  /* Verifica si los golpes son 3 o más por encima del par */
  if (strokes >= par + 3) {
    return "Go Home!";
  }
}

______________________________



c4 end
------------------------------
const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);
------------------------------
const arr = ["apple", "banana", "cherry", "date"];
/* const → inmutable. [] → array de 4 strings. */

const slicedArr = arr.slice(1, 3);
/* slice(start, end) → extrae elementos desde índice start hasta end (sin incluirlo).
1 → índice de inicio ("banana").
3 → índice de fin, no incluido ("date").
No modifica arr original, devuelve un nuevo array.
slicedArr → ["banana",  gdia ues de ow cherry"] */

console.log(slicedArr);
;M;::___________________________________________________________________________________________

c5 stp 14 d 41

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName)=>{
  return animal[propertyName];
}

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant,"age"));
------------------------------ ------------------------------------------------------------------------------------------------------------------------
------------------------------
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};
console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};
console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};
console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};
console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};
console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};
console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
------------------------------
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};
/*
const → inmutable en referencia, propiedades sí pueden cambiar.
{} → sintaxis literal de objeto.
: → separa clave y valor.
"Tiger" → string, 5 → number, true → boolean.
*/

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};
/*
Misma estructura que tiger, segundo objeto del programa.
*/

const getSpecies = (animal) => {
  return animal.species;
};
/*
Arrow function, recibe animal como parámetro.
. → notación de punto, accede a la propiedad species.
return → devuelve el valor de species como string.
*/
console.log(getSpecies(tiger));
/* Imprime: "Tiger" */

const getAge = (animal) => {
  return animal.age;
};
/*
Accede a la propiedad age del objeto recibido.
return → devuelve el valor de age como number.
*/
console.log(getAge(tiger));
/* Imprime: 5 */

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};
/*
Recibe el objeto y un string habitat.
animal.habitat = habitat → crea la propiedad habitat si no existe y asigna el valor.
Los objetos se pasan por referencia, modifica el original directamente.
return → devuelve el objeto con la nueva propiedad.
*/
console.log(addHabitat(tiger, "Rainforest"));
/* Imprime: { species: "Tiger", age: 5, isEndangered: true, habitat: "Rainforest" } */

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};
/*
animal.age = newAge → sobreescribe la propiedad age existente con el nuevo valor.
return → devuelve el objeto con age actualizado.
*/
console.log(updateAge(elephant, 12));
/* Imprime: { species: "Elephant", age: 12, isEndangered: true } */

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};
/*
delete → palabra clave que elimina completamente la propiedad del objeto.
isEndangered deja de existir en animal después de ejecutarse.
return → devuelve el objeto sin la propiedad eliminada.
*/
console.log(removeEndangeredStatus(tiger));
/* Imprime: { species: "Tiger", age: 5, habitat: "Rainforest" } */

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};
/*
hasOwnProperty() → método nativo de objetos JS.
Recibe un string con el nombre de la propiedad a verificar.
Devuelve true si existe en el objeto, false si no.
*/
console.log(hasHabitat(tiger));
/* Imprime: true → habitat fue agregado en addHabitat */
console.log(hasHabitat(elephant));
/* Imprime: false → elephant nunca recibió propiedad habitat */

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};
/*
[] → notación de corchetes, accede a propiedades usando una variable como clave.
propertyName → contiene el nombre de la propiedad como string.
Equivalente a notación de punto pero dinámico.
Ej: animal["species"] === animal.species → "Tiger"
*/
console.log(getProperty(tiger, "species"));
/* Imprime: "Tiger" */
console.log(getProperty(elephant, "age"));
/* Imprime: 12 → age fue actualizado en updateAge */

_________________________________________________________________________
c5 stp 20 d 41

------------------------------
function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return {
      ...manifest,
      weight: manifest.weight * 0.45,
      unit: "kg"
    };
  }
  return { ...manifest };
}

function validateManifest(manifest) {
  const errors = {};
  const requiredProps = ["containerId", "destination", "weight", "unit", "hazmat"];

  for (const prop of requiredProps) {
    if (!(prop in manifest)) {
      errors[prop] = "Missing";
    } else if (
      (prop === "containerId" && (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0)) ||
      (prop === "destination" && (typeof manifest.destination !== "string" || manifest.destination.trim() === "")) ||
      (prop === "weight" && (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0)) ||
      (prop === "unit" && manifest.unit !== "lb" && manifest.unit !== "kg") ||
      (prop === "hazmat" && typeof manifest.hazmat !== "boolean")
    ) {
      errors[prop] = "Invalid";
    }
  }
  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}
------------------------------
function normalizeUnits(manifest) {
/*
Recibe un objeto manifest.
No modifica el original, siempre devuelve un nuevo objeto.
*/
  if (manifest.unit === "lb") {
  /*
  === → compara valor y tipo estrictamente.
  Verifica si la unidad es libras para aplicar conversión.
  */
    return {
      ...manifest,
      weight: manifest.weight * 0.45,
      unit: "kg"
    };
    /*
    ... → operador spread, copia todas las propiedades del objeto original.
    weight → sobreescribe el peso multiplicándolo por 0.45 (1 lb = 0.45 kg).
    unit → sobreescribe la unidad a "kg".
    El spread + sobreescritura garantiza que el objeto original no se modifique.
    */
  }
  return { ...manifest };
  /*
  Si la unidad ya es "kg", devuelve una copia del objeto sin cambios.
  {} con spread evita devolver la referencia original.
  */
}

function validateManifest(manifest) {
/*
Recibe un objeto manifest.
Devuelve {} si es válido, o un objeto con errores si no lo es.
No modifica el original.
*/
  const errors = {};
  /*
  {} → objeto vacío donde se acumularán los errores encontrados.
  */

  const requiredProps = ["containerId", "destination", "weight", "unit", "hazmat"];
  /*
  Array con los nombres de todas las propiedades requeridas.
  Sirve como referencia para iterar y validar cada una.
  */

  for (const prop of requiredProps) {
  /*
  for...of → itera sobre cada elemento del array.
  prop → toma el valor string de cada propiedad en cada iteración.
  */
    if (!(prop in manifest)) {
    /*
    in → verifica si la propiedad existe en el objeto.
    ! → niega el resultado, entra si la propiedad NO existe.
    */
      errors[prop] = "Missing";
      /*
      [] → notación de corchetes, crea dinámicamente una propiedad en errors.
      Asigna "Missing" si la propiedad no existe en el manifest.
      */
    } else if (
      (prop === "containerId" && (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0)) ||
      /*
      Number.isInteger() → verifica si el valor es un número entero.
      ! → niega el resultado, inválido si NO es entero.
      || → inválido también si containerId es <= 0.
      Ej: 3.50 no es entero → "Invalid". 0 es <= 0 → "Invalid".
      */
      (prop === "destination" && (typeof manifest.destination !== "string" || manifest.destination.trim() === "")) ||
      /*
      typeof !== "string" → inválido si no es string.
      .trim() → elimina espacios al inicio y al final.
      === "" → inválido si el string está vacío o solo tiene espacios.
      Ej: "  " → trim() → "" → "Invalid".
      */
      (prop === "weight" && (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0)) ||
      /*
      typeof !== "number" → inválido si no es número.
      Number.isNaN() → inválido si es NaN (Not a Number).
      <= 0 → inválido si el peso es negativo o cero.
      */
      (prop === "unit" && manifest.unit !== "lb" && manifest.unit !== "kg") ||
      /*
      && → inválido solo si unit NO es "lb" Y NO es "kg".
      Cualquier otro string como "pounds" es inválido.
      */
      (prop === "hazmat" && typeof manifest.hazmat !== "boolean")
      /*
      typeof !== "boolean" → inválido si no es true o false.
      Ej: "no" es string → "Invalid".
      */
    ) {
      errors[prop] = "Invalid";
      /*
      Asigna "Invalid" a la propiedad en errors si su valor no cumple las reglas.
      */
    }
  }
  return errors;
  /*
  Devuelve errors. Si no hubo errores devuelve {}.
  Si hubo errores devuelve un objeto con las propiedades inválidas o faltantes.
  */
}

function processManifest(manifest) {
/*
Función principal que coordina validación y normalización.
Registra en consola el resultado según si el manifest es válido o no.
*/
  const errors = validateManifest(manifest);
  /*
  Llama validateManifest y guarda el resultado.
  Si errors está vacío el manifest es válido.
  */

  if (Object.keys(errors).length === 0) {
  /*
  Object.keys() → devuelve array con las claves del objeto errors.
  .length === 0 → verifica si no hay errores.
  */
    const normalized = normalizeUnits(manifest);
    /*
    Convierte el peso a kg si es necesario.
    Guarda el objeto normalizado sin modificar el original.
    */
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
    /*
    Llama validateManifest nuevamente para pasar el objeto
    de errores directamente a console.log sin guardarlo en variable.
    */
  }
}
/*

APRTIR DE MAÑAN YA NO SERRE MAS VAGO , AVANZARE UN MODULO  MAS EN EL CURSO ,
 YA NO ME QUEDARE ATRAS , VAMOS POR MASSSS


aclaracion 6 horas de estudio diario ,
 3 horas en la mañana y 3 horas en la noche , 
 no me importa nada , voy a avanzar y terminar
  este curso de una vez por todas , no me quedare atras , vamos por massssss


  
avanze hoy en teoria y aplique a gigcx, y saldre a trabjar un rarto para completar esos 45 servicios */
__________________________________________________
- - - - - - - -- - - - - - - -- - - - - - - -- - - - - - - -

------------------------------

const recipes=[];

const recipe1={
  name:"Spaghetti Carbonara",
  ingredients:["spaghetti","Parmesan cheese","pancetta","black pepper"],
  cookingTime:22,
  totalIngredients:null,
  difficultyLevel:""
};

const recipe2={
  name:"Chicken Curry",
  ingredients:["chicken breast","coconut milk","curry powder","onion","garlic"],
  cookingTime:42,
  totalIngredients:null,
  difficultyLevel:""
};

const recipe3={
  name:"Vegetable Stir Fry",
  ingredients:["broccoli","carrot","bell pepper"],
  cookingTime:15,
  totalIngredients:null,
  difficultyLevel:""
};

recipes.push(recipe1,recipe2,recipe3);

function getTotalIngredients(ingredients){
  return ingredients.length;
}

function getDifficultyLevel(cookingTime){
  if(cookingTime<=30){
    return "easy";
  }else if(cookingTime<=60){
    return "medium";
  }else{
    return "hard";
  }
}

const recipe1TotalIngredients=getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel=getDifficultyLevel(recipe1.cookingTime);

recipe1.totalIngredients=getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel=getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients=getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel=getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients=getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel=getDifficultyLevel(recipe3.cookingTime);

console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);
console.log(recipes);

------------------------------

const recipes=[];/* const=crea una referencia que no puede apuntar a otro valor. [] crea un arreglo vacío. recipes almacenará todas las recetas. */

const recipe1={ /* {} crea un objeto: una estructura que agrupa datos relacionados mediante propiedades clave:valor */
  name:"Spaghetti Carbonara",/* name es una propiedad. : separa nombre de propiedad y valor. */
  ingredients:["spaghetti","Parmesan cheese","pancetta","black pepper"],/* [] crea un arreglo. Cada elemento ocupa una posición numérica empezando en 0. */
  cookingTime:22,/* número de minutos */
  totalIngredients:null,/* null significa "sin valor calculado todavía" */
  difficultyLevel:""/* cadena vacía. Se llenará después. */
};

const recipe2={
  name:"Chicken Curry",
  ingredients:["chicken breast","coconut milk","curry powder","onion","garlic"],
  cookingTime:42,
  totalIngredients:null,
  difficultyLevel:""
};

const recipe3={
  name:"Vegetable Stir Fry",
  ingredients:["broccoli","carrot","bell pepper"],
  cookingTime:15,
  totalIngredients:null,
  difficultyLevel:""
};

recipes.push(recipe1,recipe2,recipe3);/* . accede a un método de un objeto. push() agrega elementos al final del arreglo recipes. */

function getTotalIngredients(ingredients){/* function crea una función reutilizable. ingredients es un parámetro que recibirá un arreglo. */
  return ingredients.length;/* return devuelve un valor al lugar donde se llamó la función. .length devuelve la cantidad de elementos del arreglo. */
}

function getDifficultyLevel(cookingTime){/* recibe un número de minutos y devuelve una dificultad */
  if(cookingTime<=30){/* if ejecuta código si la condición es verdadera. <= significa menor o igual. */
    return "easy";
  }else if(cookingTime<=60){/* else if evalúa otra condición si la anterior fue falsa. */
    return "medium";
  }else{/* else se ejecuta cuando ninguna condición anterior fue verdadera. */
    return "hard";
  }
}

const recipe1TotalIngredients=getTotalIngredients(recipe1.ingredients);
/* = asigna un valor.
   recipe1.ingredients:
   . accede a una propiedad del objeto.
   Obtiene el arreglo de ingredientes.
   La función cuenta los elementos.
   Resultado: 4.
*/

const recipe1DifficultyLevel=getDifficultyLevel(recipe1.cookingTime);
/* Obtiene cookingTime (22).
   La función evalúa 22<=30.
   Resultado: "easy".
*/

recipe1.totalIngredients=getTotalIngredients(recipe1.ingredients);
/* Se calcula nuevamente la cantidad de ingredientes.
   Resultado: 4.
   Se guarda dentro de la propiedad totalIngredients del objeto recipe1.
*/

recipe1.difficultyLevel=getDifficultyLevel(recipe1.cookingTime);
/* Se calcula dificultad usando 22 minutos.
   Resultado: "easy".
   Se almacena en difficultyLevel.
*/

recipe2.totalIngredients=getTotalIngredients(recipe2.ingredients);
/* Cuenta ingredientes de recipe2.
   Resultado: 5.
*/

recipe2.difficultyLevel=getDifficultyLevel(recipe2.cookingTime);
/* 42<=60 es verdadero.
   Resultado: "medium".
*/

recipe3.totalIngredients=getTotalIngredients(recipe3.ingredients);
/* Cuenta ingredientes de recipe3.
   Resultado: 3.
*/

recipe3.difficultyLevel=getDifficultyLevel(recipe3.cookingTime);
/* 15<=30 es verdadero.
   Resultado: "easy".
*/

console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);
console.log(recipes);

/* Estado final de recipes:

[
  {
    name:"Spaghetti Carbonara",
    ingredients:[...],
    cookingTime:22,
    totalIngredients:4,
    difficultyLevel:"easy"
  },
  {
    name:"Chicken Curry",
    ingredients:[...],
    cookingTime:42,
    totalIngredients:5,
    difficultyLevel:"medium"
  },
  {
    name:"Vegetable Stir Fry",
    ingredients:[...],
    cookingTime:15,
    totalIngredients:3,
    difficultyLevel:"easy"
  }
]

El objetivo del programa es:
1. Crear recetas.
2. Guardarlas en un arreglo.
3. Calcular automáticamente cuántos ingredientes tiene cada una.
4. Determinar su dificultad según el tiempo de cocción.
5. Actualizar los objetos con esos valores.
6. Mostrar el resultado final.
*/

------------------------------


/*
Aprobado:1. Deberías crear un array llamado questions.
Aprobado:2. El array questions debe contener al menos cinco objetos, cada uno con las claves category, question, choices y answer.
Aprobado:3. La clave category debe tener el valor de una cadena que represente una categoría de pregunta.
Aprobado:4. La clave question debe tener el valor de una cadena que represente una pregunta.
Aprobado:5. La clave choices debe tener el valor de un arreglo que contenga tres cadenas diferentes entre sí.
Aprobado:6. La clave answer debe tener el valor de una cadena.
Aprobado:7. El valor de answer debe estar incluido en el array choices.
Aprobado:8. Debes tener una función llamada getRandomQuestion que tome un array de preguntas como parámetro y devuelva un objeto de pregunta aleatoria del array.
Aprobado:9. Debes tener una función llamada getRandomComputerChoice que tome el array de las opciones disponibles como parámetro y devuelva una respuesta aleatoria a la pregunta seleccionada.
Aprobado:10. Debes tener una función llamada getResults.
Aprobado:11. Tu función getResults debe tomar el objeto de pregunta como primer parámetro y la elección de la computadora como segundo parámetro.
Aprobado:12. Si la elección de la computadora coincide con la respuesta, getResults debería devolver ¡La elección de la computadora es correcta!
Aprobado:13. Si la elección de la computadora no coincide con la respuesta, getResults debe devolver The computer's choice is wrong. The correct answer is: <correct-answer>, donde <correct-answer> es el valor de la respuesta correcta a la pregunta elegida.
Aprobado:14. Tu función getResults debe usar comparación de igualdad exacta, no coincidencia de subcadenas.

Deberías crear un array llamado questions.
El array questions debe contener al menos cinco objetos, cada uno con las claves category, question, choices y answer.
La clave category debe tener el valor de una cadena que represente una categoría de pregunta.
La clave question debe tener el valor de una cadena que represente una pregunta.
La clave choices debe tener el valor de un array que contenga tres cadenas, que son respuestas alternativas a la pregunta.
La clave answer debe tener el valor de una cadena, que representa la respuesta correcta a la pregunta. Además, el valor de answer debe estar incluido en el array choices.
Debes tener una función llamada getRandomQuestion que tome un array de preguntas como parámetro y devuelva un objeto de pregunta aleatoria del array.
Debes tener una función llamada getRandomComputerChoice que tome el array de las opciones disponibles como parámetro y devuelva una respuesta aleatoria a la pregunta seleccionada.
Debes tener una función llamada getResults que tome el objeto de pregunta como primer parámetro y la elección de la computadora como segundo parámetro. La función debe devolver ¡La elección de la computadora es correcta! si la respuesta es correcta. De lo contrario, devuelve La elección de la computadora es incorrecta.  The correct answer is: , where ` is the value of the correct answer to the chosen question.
 */

const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is 12 x 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

este fue el que cambio

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "La elección de la computadora es correcta!";
  } else {
    return `La elección de la computadora es incorrecta. The correct answer is: ${question.answer}`;
  }
}

HORIZON TODO EL D

_______________________________
------------------------------
constquestions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is 12 x 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "La elección de la computadora es correcta!";
  } else {
    return `La elección de la computadora es incorrecta. The correct answer is: ${question.answer}`;
  }
}
------------------------------
const questions = [
/*
[] → array que contiene 5 objetos de preguntas.
Cada objeto tiene category, question, choices y answer.
*/
  {
    category: "Science",
    /* category → string, identifica el tema de la pregunta */
    question: "What is the chemical symbol for water?",
    /* question → string con el enunciado de la pregunta */
    choices: ["H2O", "CO2", "O2"],
    /* choices → array de 3 strings, opciones de respuesta */
    answer: "H2O"
    /* answer → string que debe coincidir con uno de los choices */
  },
  {
    category: "Math",
    question: "What is 12 x 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
/*
Recibe el array completo de preguntas.
*/
  return questions[Math.floor(Math.random() * questions.length)];
  /*
  Math.random() → genera decimal entre 0 y 1.
  questions.length → 5 (total de preguntas).
  Math.random() * questions.length → decimal entre 0 y 5 (sin incluir 5).
  Math.floor() → redondea hacia abajo, da un índice entero entre 0 y 4.
  questions[índice] → accede al objeto pregunta en esa posición.
  Devuelve un objeto pregunta completo elegido al azar.
  */
}

function getRandomComputerChoice(choices) {
/*
Recibe el array choices de la pregunta seleccionada.
*/
  return choices[Math.floor(Math.random() * choices.length)];
  /*
  Misma lógica que getRandomQuestion pero aplicada al array choices.
  choices.length → 3 (siempre 3 opciones).
  Devuelve un string aleatorio de las 3 opciones disponibles.
  */
}

function getResults(question, computerChoice) {
/*
Recibe el objeto question completo y el string computerChoice
devuelto por getRandomComputerChoice.
*/
  if (computerChoice === question.answer) {
  /*
  === → compara valor y tipo. Verifica si la elección de la
  computadora coincide exactamente con la respuesta correcta.
  */
    return "La elección de la computadora es correcta!";
  } else {
    return `La elección de la computadora es incorrecta. The correct answer is: ${question.answer}`;
    /*
    ${} → template literal, inserta el valor de question.answer
    directamente dentro del string.
    */
  }
}

________________________________________________

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
------------------------------
function updateRecords(records, id, prop, value) {
/*
Función que actualiza un álbum dentro del objeto records.
records → objeto completo de la colección.
id → número que identifica el álbum específico. Ej: 2548
pr  op → string con el nombre de la propiedad a modificar. Ej: "tracks"
value → string con el valor a asignar. Puede ser vacío "".
*/

  if (value === "") {
  /*
  === → compara valor y tipo estrictamente.
  Si value es string vacío, la propiedad debe eliminarse del álbum.
  */
    delete records[id][prop];
    /*
    delete → palabra clave que elimina completamente una propiedad del objeto.
    records[id] → [] notación de corchetes, accede al álbum usando id como clave dinámica.
    Ej: records[2548] → accede al álbum Bon Jovi.
    [prop] → accede a la propiedad usando prop como clave dinámica.
    Ej: records[2548]["artist"] → elimina artist del álbum.
    No se puede usar notación de punto porque id y prop son variables.
    */

  } else if (prop === "tracks") {
  /*
  Si value no es vacío Y prop es "tracks", entramos a este bloque.
  tracks es especial porque es un array, no un string simple.
  */

    if (!records[id].hasOwnProperty("tracks")) {
    /*
    hasOwnProperty() → método nativo de objetos, devuelve true si la
    propiedad existe en el objeto, false si no.
    ! → niega el resultado, entra al bloque si tracks NO existe.
    Ej: álbum 5439 no tiene tracks → crea el array vacío.
    */
      records[id].tracks = [];
      /*
      = → asigna un array vacío [] a la propiedad tracks del álbum.
      Necesario antes de hacer push(), ya que no se puede agregar
      a una propiedad que no existe.
      */
    }

    records[id].tracks.push(value);
    /*
    .tracks → accede al array tracks del álbum (recién creado o ya existente).
    push() → agrega value al final del array.
    Ej: tracks = ["1999"] → push("Free") → ["1999", "Free"]
    */

  } else {
    records[id][prop] = value;
    /*
    Si value no es vacío y prop no es "tracks", asigna directamente.
    records[id] → accede al álbum por id.
    [prop] → accede a la propiedad por nombre dinámico.
    = → asigna el value a esa propiedad.
    Ej: records[5439]["artist"] = "ABBA"
    */
  }

  return records;
  /*
  Devuelve el objeto records completo con los cambios aplicados.
  Como los objetos se pasan por referencia, los cambios ya están
  aplicados sobre el original, pero se retorna para cumplir el requerimiento.
  */
}


________________________________________________

onst person = {
  name: "Alice",
  age: 30
};

person.job = "Engineer"
person["hobby"] = "Knitting"
console.log(person);  // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}
}

const person = {
  name: "Alice",
  age: 30
};

person.job = "Engineer"
person["hobby"] = "Knitting"
console.log(person);  // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}
Eliminar propiedades de un objeto
Operador delete: Este operador se usa para eliminar una propiedad de un objeto.
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
------------------------------
ya casi  tengo los promtp s estoy puliendo , mañad destripo y aplico drivers
 starlink drives, sada
______
/*

ORDEN DE LOS MÓDULOS:
1. ESTUDIO RESUMEN , ACTULIZACON VSCOD
ORDEN NOTION 
 TAREAS, 

 tambien aprendi a no cambiar el  nombre de la carpeta dev
 
 
 
 owwo todo el diaaaaaaaaaaa

 x2
 hoy hyega colmobia , mañana estudio durisimo

hoydescanse durismiom mañana madurog
creo ñque el lunes comienzo de nuevo supongo
mañan es el dia
DEPRESION

ya se me quito , esto es cuestio de mentalidad per mas que de mentalida
ES DE ACTUAR, HAY QUE HACERLO ASI NO UIERAAAAAA


no mirar videos en la mañna es lo que debo hacer, si pierdo la mañan pierdo todo
depresion


buyeno ya se me quieto , ya empece a postular con grow up mentruas tanto
bueno ya tengo el teclado mañna empiezo omggggggggg tiene ññññññññññññññññññññññññññññññññññññññññññ jajaja
lunes empiezo

manana es el dia 
mañanes el dia definitivo
ya empece porfin
pak ia , y dia 2

hoy todo el dia estuve ene el


fap y se me van las ganas
mecanico ma;a

todo va bien  mañan ya empiezo seguro
vamos bien avanzando constnate 
terminamos con foto ia
mañan le damos
 bien , ama vamos con el reto 30 dias
 maña es el dia
 orden y estudio 

 primer dia reto 30

 hbd mom
 depurando vacantes a las que puedo postular ahora
 bien con el remoto
 ojas en tipo harvar, 
*/