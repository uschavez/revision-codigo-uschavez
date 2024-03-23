const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se agrega un punto para poder ser seleccionable por clase
const $b = document.querySelector('.blog'); // Se quita # y se agrega un punto para poder ser seleccionable por clase
const $l = document.querySelector('.location');

async function displayUser(username) { // Se agrega la función async para que trabaje correctamente la expresión await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = data.name; // Se eliminan $ y apóstrofes para llamar al objeto data
  $b.textContent = data.blog; // Se eliminan $ y apóstrofes para llamar al objeto data
  $l.textContent = data.location; // Se eliminan $ y apóstrofes para llamar al objeto data
}

function handleError(error) { // Se escribe correctamente la palabra "error" para mejor legibilidad
  console.log('OH NO!');
  console.log(error); // Se escribe correctamente la palabra "error" para mejor legibilidad
  $n.textContent = `Algo salió mal: ${error}` // Se agrega la $ en "n" para que se imprima correctamente la función y se escribe correctamente la palabra "error" para mejor legibilidad
}

displayUser('stolinski').catch(handleError);