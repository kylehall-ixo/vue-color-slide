<template>
  <div class="display">
    <Color :color="currentColor" />
  </div>
</template>

<script>
import Color from "../Color.vue";

export default {
  name: "color-display",
  props: ["currentColor", "handleClick"],
  components: {
    Color
  }
};
</script>

<style>
.display {
  display: flex;
  justify-content: center;
}
</style>
