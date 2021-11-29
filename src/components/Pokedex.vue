<template>
  <div class="pokedex">
    <img src="/pokedex.png" />
    <Pokemon :pokemonId="$route.params.id" class="pokemon"></Pokemon>
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";

export default {
  name: "Pokedex",
  components: {
    Pokemon
  }
};
</script>

<style scoped>
.pokedex {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 40%;
  position: absolute;
  z-index: 0;
}

.pokemon {
  position: absolute;
  z-index: 10;
}
</style>
