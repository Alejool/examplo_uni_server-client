


const button = document.getElementById('getJokeBtn');
const cardElement = document.getElementById('jokeCard');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3001/api/public');

    // Convertir la respuesta en JSON
    const data = await response.json();
    
    const card = document.createElement('div');
    card.className = 'card';

    // Contenido de la tarjeta
    card.innerHTML = `
      <img src="${data.icon_url}" alt="Chuck Norris Icon" class="card-icon" />
      <h2 class="card-title">Chiste de Chuck Norris</h2>
      <p class="card-value">${data.value}</p>
      <a href="${data.url}" target="_blank" class="card-link">Ver Chiste Original</a>
    `;


    cardElement.innerHTML = '';
    cardElement.appendChild(card); 
  } catch (error) {
 
    console.error('Error al obtener el dato:', error);
    cardElement.textContent = 'Ocurrió un error al obtener el dato.';
  }
});