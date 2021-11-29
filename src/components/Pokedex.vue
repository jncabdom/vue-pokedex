<template>
  <div class="container">
    <div class="pokedex">
      <img src="/pokedex.png" />
      <Pokemon :pokemonId="$route.params.id" class="pokemon"></Pokemon>
    </div>
    <!--div class="button-holder">
      <button>Previous</button>
      <button>Next</button>
    </div-->
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img {
  margin-left: 2rem;
  height: 75%;
  z-index: 0;
}

.pokemon {
  position: absolute;
  z-index: 10;
}
</style>
