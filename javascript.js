/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

const firstName = "Jan";
const lastName = "Banan";
const x = 12;
let counter = 10;
let total = null;
const pi = 3.14;
const circleDiameter = 18;
let circleRadius = null;
const circleRadiusNotNull = 24;
const earthGravity = 9.8; // m/s²
const hello = "Hello, world!";
let catGirl = true;
let catBoy = true;
let mouse = false;
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
console.log(`x + counter = ${x + counter}`);
console.log(`x - counter = ${x - counter}`);
console.log(x * circleDiameter);
console.log(`pi * 5\u00B2 = ${pi * (5 * 5)}`);
console.log(pi / 1.3);
console.log(pi * (circleRadiusNotNull * circleRadiusNotNull));
const area = pi * (circleRadiusNotNull * circleRadiusNotNull);
console.log(`Approximate area of circle: ${area}cm\u00B2`);
console.log(`Your number is: ${counter}`);
counter += 10;
console.log(`Your number is now: ${counter}`);
console.log(`Your number has changed to: ${(counter -= 25)}`);
console.log(`Your total is ${total}`);

// Just testing stuff for fun
circleRadius = math.chain(circleDiameter).divide(2).done();
console.log(`Circle radius: ${circleRadius}`);

const squared = math.pow(circleRadius, 2);
console.log(`Radius squared: ${squared}`);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Christian";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "/home";

// Skriv koden for oppgave 4 her
if (userName !== "" && userAge <= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Velkommen! ${userName}`);
} else {
  console.log("En feil har oppstått.");
}
/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her
const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);
