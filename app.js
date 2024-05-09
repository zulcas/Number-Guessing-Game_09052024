// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 10);
let numIntentos = 10;
let numUser 
let previousGuesses = [];

function refreshVariables{
  document.querySelector('.guesses').textContent = previousGuesses;
  document.querySelector('.lastResult').textContent = numIntentos;
  document.querySelector

}

// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET
  console.log(e);
  //Capturamos elemento usuario
  numUser = document.querySelector('#guessField').value;
  // Comprobar si el número que ha puesto el usuario es el numeroCorrecto
  if (numUser == numeroCorrecto){
  }
  else{
    if (numIntentos>0){
      numIntentos--;
      previousGuesses.push(numUser);

    }

  }
});
