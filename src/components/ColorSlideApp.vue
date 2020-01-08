<template>
  <div id="app-container">
    <h1>Color Slide App</h1>
    <ColorDisplay :currentColor="currentColor" />

    <ColorSlide :handleClick="changeColor" />
  </div>
</template>

<script type="text/javascript">
import ColorSlide from "./ColorSlide/ColorSlide.vue";
import ColorDisplay from "./ColorDisplay/ColorDisplay.vue";

export default {
  name: "ColorSlideApp",
  components: {
    ColorSlide,
    ColorDisplay
  },
  data() {
    return {
      currentColor: "black"
    };
  },
  methods: {
    changeColor: function(newColor) {
      this.currentColor = newColor;
    }
  }
};
</script>

<style>
h1 {
  line-height: 1.5;
  font-size: 3em;
  font-family: sans-serif;
}
</style>
