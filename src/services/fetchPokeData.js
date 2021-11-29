const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokeData = (id) => {
  return fetch(BASE_URL + id)
    .then((response) => response.json())
    .then((data) => {
      const apiData = {};
      apiData.name = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);

      apiData.sprite = data.sprites.front_default;
      console.log(apiData.sprite);
      return apiData;
    });
};
