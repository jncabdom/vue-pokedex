<template>
  <div class="pokemon">
    <h1>{{ pokeName }}</h1>
    <img :src="sprite" />
  </div>
</template>

<script>
import { fetchPokeData } from "../services/fetchPokeData.js";

export default {
  name: "Pokemon",
  mounted() {
    this.loadData();
  },
  data() {
    return {
      pokeName: "",
      sprite: ""
    };
  },
  props: {
    pokemonId: {
      type: String,
      default: "1",
      validator: v => { return (parseInt(v) >= 1) && (parseInt(v) <= 151); }
    }
  },
  methods: {
    loadData() {
      fetchPokeData(this.pokemonId).then((data) => {
        this.pokeName = "No. " + this.pokemonId + ": " + data.name;
        this.sprite = data.sprite;
      });
    }
  },
  watch: {
    "$route"() {
      this.loadData();
    },
  }
};
</script>

<style scoped>
.pokemon {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 80%;
  image-rendering: pixelated;
}
</style>
