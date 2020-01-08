<template>
  <div @click="handleClick(color)" :style="{ 'background-color': color }" class="box"></div>
</template>

<script>
export default {
  name: "color-comp",
  props: ["color", "handleClick"]
};
</script>

<style>
.box {
  width: 150px;
  height: 250px;
}
</style>
