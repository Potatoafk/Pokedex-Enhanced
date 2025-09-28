<script>
    import "../styles/global.css";
    import { getPokemonData, getPokemonGifs } from "../utils/getPokemonApi.js";
    import { onMount } from "svelte";

    let pokemonData;
    let pokemonGifs;
    let errorMessage = "";

    onMount(async () => {
        pokemonData = await getPokemonData();
        for (const pokemon of pokemonData) {
            pokemonUri = await fetch(pokemon.uri);
        }
        pokemonUri = await fetch(pokemonData.url);
        if (!pokemonData) {
            errorMessage = "Could not fetch Pokémon data.";
        }
    });
</script>

{#if errorMessage}
    <h1>ERROR</h1>
{:else if pokemonData}
    <div class="container px-5">
        <div class="container-fluid">
            <h1 class="text-center">Pokedex Enhanced</h1>
            <div class="mb-3">
                <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search for pokemon"
                />
            </div>
            <div class="row g-2">
                {#each pokemonData as pokemon}
                    {@const id = Number(
                        pokemon.url.split("/").filter(Boolean).pop(),
                    )}
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card p-1">
                            <small>
                                {id}
                            </small>
                            <div
                                class="sprite container d-flex align-items-center justify-content-center mt-5"
                            >
                                <img
                                    src={getPokemonGifs(id)}
                                    class="sprites img-fluid rounded-top"
                                    alt={pokemon.name}
                                />
                            </div>

                            <div class="card-body">
                                <h5
                                    class="card-title text-capitalize text-center"
                                >
                                    {pokemon.name}
                                </h5>
                                <h6
                                    class="card-text text-capitalize text-center"
                                >
                                    Text
                                </h6>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="footer">
            <nav class="mt-3" aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="/">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
{:else}
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
{/if}

<style>
    /* div {
        border: 1px solid black;
        padding: 1px;
    } */
</style>
