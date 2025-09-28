
export const getPokemonData = async () => {
    try {
        const number = 10;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        // Return only the array of pokemon
        // console.log(data.results)
        // return data.results;
        const pokemonDetails = [];

        // Fetch details one by one (sequentially)
        for (const pokemon of data.results) {
            const res = await fetch(pokemon.url);
            if (!res.ok) throw new Error("Couldn't fetch Pokémon details");
            const details = await res.json();
            pokemonDetails.push(details); // store full object
        }

        console.log(pokemonDetails);
        return pokemonDetails;


    } catch (error) {
        console.error(error);
        return null;
    }
}


export const getPokemonGifs = (pokemonId) => {
    // Just return the image URL string
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonId}.gif`;
}
