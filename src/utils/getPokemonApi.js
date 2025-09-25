export const getPokemonData = async () => {
    try {
        const number = 151;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
}


export const getPokemonGifs = async (pokemonId) => {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonId}.gif`);
        if (!res.ok) {
            throw new Error("Couldn't fetch GIFs");
        }
        const data = res.json();
        console.log(data);
        return data;

    } catch (error) {
        return null;

    }
}
