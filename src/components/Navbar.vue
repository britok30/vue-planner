<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
    
      <router-link class="nav-brand" to="/">
        <img class="nav-img" src="../assets/navlogo.png" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
       
            <router-link class="nav-link" to="/">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/about">About</a> -->
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped >
.nav-img {
  width: 15%;
}

a {
  border: none;

  &:hover {
    border: none;
  }
}
</style>