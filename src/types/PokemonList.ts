interface PokemonList {
  results: BasicInfo[];
}

interface BasicInfo {
  name: string;
  url: string;
}

export default PokemonList;
