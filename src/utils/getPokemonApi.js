export const getPokemonData = async () => {
    try {
        const number = 10;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        // Return only the array of pokemon
        console.log(data.results)
        return data.results;

    } catch (error) {
        console.error(error);
        return null;
    }
}


export const getPokemonGifs = (pokemonId) => {
    // Just return the image URL string
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonId}.gif`;
}
