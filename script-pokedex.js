fetchPokemonList();


function fetchPokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonListContainer = document.getElementById('pokemon-list');
            data.results.forEach((pokemon, index) => {
                fetchPokemonData(pokemon.url, index + 1);
            });
        })
}

function fetchPokemonData(url, index) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const nombrePokemon = data.name;
            const imagenPokemon = data.sprites.front_default;
            

            const tarjetaPokemon = document.createElement('div');
            tarjetaPokemon.classList.add('pokemon-card');
            tarjetaPokemon.innerHTML = `
                <h3>${nombrePokemon}</h3>
                <h4>#${index}</h4>
                <img src="${imagenPokemon}" alt="${nombrePokemon}">
            `;

            document.getElementById('pokemon-list').appendChild(tarjetaPokemon);
        })
        
}