<template>
  <ul>
    <li v-for="color in colors" v-bind:key="color">
      <Color :handleClick="handleClick" v-bind:color="color" />
    </li>
  </ul>
</template>

<script>
import Color from "../Color.vue";
import { colorMap } from "../../constants/colorMap";

export default {
  name: "color-slide",
  props: ["handleClick"],
  components: {
    Color
  },
  data() {
    return {
      colors: [...Object.values(colorMap)]
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
}
</style>
