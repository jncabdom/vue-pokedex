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
      type: Number,
      default: 1,
      validator: v => { return (v >= 1) && (v <= 151); }
    }
  },
  methods: {
    loadData() {
      fetchPokeData(this.pokemonId).then((data) => {
        this.pokeName = data.name;
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
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

img {
  width: 35%;
  image-rendering: pixelated;
}
</style>
