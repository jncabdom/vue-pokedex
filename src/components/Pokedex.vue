<template>
  <div class="container">
    <div class="pokedex">
      <div class="pokedex-outside">
        <div class="pokedex-inside">
          <Pokemon :pokemonId="$route.params.id" class="pokemon"></Pokemon>
        </div>
        <div class="button-holder">
          <router-link :to="previousPoke" tag="button">Previous</router-link>
          <router-link :to="nextPoke" tag="button">Next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";

export default {
  name: "Pokedex",
  computed: {
    previousPoke() {
      return this.$route.params.id > this.minPoke
        ? (parseInt(this.$route.params.id) - 1).toString()
        : (this.minPoke).toString();
    },
    nextPoke() {
      return this.$route.params.id < this.maxPoke
        ? (parseInt(this.$route.params.id) + 1).toString()
        : (this.maxPoke).toString();
    }
  },
  data() {
    return {
      minPoke: 1,
      maxPoke: 151,
    };
  },
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
.pokedex-outside {
  width: 50%;
  height: 50%;
  border-radius: 15px;
  border: 4px solid black;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 5em;
}

.pokedex-inside {
  border-radius: 15px;
  border: 10px solid grey;
  border-bottom: 20px solid grey;
  background-color: #fafafa;
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2%;
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

.button-holder {
  margin-top: 2%;
  border: 0;
}

button {
  --light-color: #d1d5db;
  --shadow-color: #6b7280;
  --dark-color: #1f2937;
  --shadow-opacity: rgb(0 0 0 / 30%);

  margin: 0px 10px;
  min-width: 7em;
  color: black;
  padding: 10px;
  font-size: 16px;
  background: var(--light-color);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 7px 0 var(--shadow-color), 0 8px 3px var(--shadow-opacity);
  transition: all 0.25s;
  cursor: pointer;
}

button:active {
  color: #888;
  background: var(--dark-color);
  transform: translateY(5px);
  box-shadow: 0 2px 0 var(--shadow-color), 0 3px 3px var(--shadow-opacity);
}
.pokemon {
  width: 100%;
}
</style>
