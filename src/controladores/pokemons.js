const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokemons = async (req, res) => {
    try {
        const { pagina } = req.query;

        const listaPokemons = await listarPokemons(pagina ?? 1);

        return res.json(listaPokemons);
    }
    catch (error) {
        console.error('erro ao listar pokemons');
        res.status(500).json({ mensagem: 'erro ao listar pokemons' });
    }
};

const pokemon = async (req, res) => {
    try {
        const { idOuNome } = req.params;

        const pokemonEncontrado = await detalharPokemon(idOuNome);

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

        return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
    } catch (error) {
        console.error('Erro ao detalhar pokemon');
        res.status(500).json({ mensagem: 'erro ao detalhar pokemon' });
    }
};

module.exports = {
    pokemons,
    pokemon
};
