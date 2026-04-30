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


console.log("I hope you enjoyed learning today.");