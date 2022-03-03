import { getPokedex, getStarwars } from './fetch';

// import functions
const template = document.querySelector('#template');
const selectEl = document.queryCommandValue ('select');
const list = document.querySelector('#list');
const errorElement = document.querySelector('#error-message');

// console.log(template, selectEl);
// grab DOM elements

async function loadPokedex(){
    const pokedex = await getPokedex();

    list.classlist.add('pokemon');
    
    for (let pokemon of pokedex){
        const clone=template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name ' + pokemon.pokemon;

        type.textContent = 'Egg ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}

async function loadStarWars(){
    const pokedex = await getStarwars();

    list.classlist.add('pokemon');
    
    for (let starwars of starwars){
        const clone=template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name ' + starwars.starwars;

        type.textContent = 'Egg ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}

// set event listeners 

selectEl.addEventListener('change', async(e) => {
    const selected = e.target.value;

    if (selected === 'pokemon'){
        list.innerHTML = '';
        await loadPokedex();
    } else if (selected === 'star-wars') {

        list.innerHTML = '';
        await loadStarWars();
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
