// Assegnazione variabili
const firstName = prompt("Qual'é il tuo nome?");
const lastName = prompt("Qual'é il tuo cognome?");
const color = prompt("Qual'é il tuo colore preferito?");
const passwordInsicura = firstName + lastName + color + 24;

document.getElementById("password").innerHTML = 
   `
      <h1>Questa é la tua password: ${passwordInsicura}</h1>
   `;
document.getElementById("length").innerHTML = 
   `
      <h2>La lunghezza della password é di ${passwordInsicura.length} caratteri.</h2>
   `;

console.log("Nome", firstName);
console.log("Cognome", lastName);
console.log("Colore preferito", color);
console.log("Password", passwordInsicura);
console.log("Lunghezza password", passwordInsicura.length, "caratteri");