import { getPokedex, getStarwars } from './fetch.js';

// import functions
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');
const errorElement = document.querySelector('#error-message');

// console.log(template, selectEl);
// grab DOM elements

async function loadPokedex(){
    const pokedex = await getPokedex();

    list.classList.add('pokemon');
    
    for (let pokemon of pokedex){
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name ' + pokemon.pokemon;

        type.textContent = 'Type ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}

async function loadStarWars(){
    const starwars = await getStarwars();
    // console.log(starwars);
    list.classList.add('starwars');
    
    for (let ship of starwars){
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');

        name.textContent = 'Name ' + ship.name;

        type.textContent = 'Model ' + ship.model;


        list.appendChild(clone);
    }
}

// set event listeners 

selectEl.addEventListener('change', async(event) => {
    const selected = event.target.value;
    list.innerHTML = '';

    if (selected === 'none') {
        const p = document.createElement('p');

        p.textContent = 'Please Choose';

        errorElement.appendChild(p);
    } else if (selected === 'pokemon'){
        list.innerHTML = '';
        errorElement.innerHTML = '';
        await loadPokedex();
    } else if (selected === 'starwars') {

        list.innerHTML = '';
        await loadStarWars();
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
