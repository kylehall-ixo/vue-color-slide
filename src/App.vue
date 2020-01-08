<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <br />

    <div class="nav-container">
      <router-link to="/">Home</router-link>
      <router-link to="color-slide">Color Slide App</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-container a {
  margin-right: 8px;
}
</style>
