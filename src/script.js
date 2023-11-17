// Função para buscar dados da API
function fetchData() {
    fetch('https://api.covid19api.com/dayone/country/brazil')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-container');
            
            // Iterar sobre os dados e criar um card para cada ponto de dados
            data.forEach(entry => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h2>${formatDate(entry.Date)}</h2>
                    <p><strong>Confirmados:</strong> ${entry.Confirmed}</p>
                    <p><strong>Recuperados:</strong> ${entry.Recovered}</p>
                    <p><strong>Mortes:</strong> ${entry.Deaths}</p>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao buscar dados da API: ', error));
}

// Função para formatar a data (opcional)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Chame a função para buscar e exibir os dados
fetchData();
