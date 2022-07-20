export function fetchAllPokemons(limit, url) {
    const initialUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`

    return fetch(url ===  null ? initialUrl : url).then((response) => {
        return response.json()
    })
}

export function fetchPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    
    return fetch(url).then((response) => {
        return response.json()
    })
}
