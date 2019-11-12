<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
// $font-stack: "Lato" sans-serif;
$primary-background: #181818;
$white-text: #fff;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato" sans-serif !important;
  font-weight: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.349), rgba(0, 0, 0, 0.342)),
    url("./assets/hero.jpg") no-repeat center center/cover fixed;
  height: 100%;
  color: $white-text;
  overflow-x: hidden;

  .projects {
    position: absolute;
    top: 50%;
    left: 26%;
  }

  .footer {
    font-size: 1.3rem;
  }
}
</style>
