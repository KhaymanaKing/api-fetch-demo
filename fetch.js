export async function getPokedex(){
    let url = 'https://pokdex-alchemy.herokuapp.com/api/pokedex';

    const resp = await fetch(url);

    const json = await resp.json();

    return json.results;
}
