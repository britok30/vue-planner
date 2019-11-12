<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>

    <div>
      <div class="row">
        <ul>
          <Construction />
          <Roofing />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Construction from "../components/Construction";
import Roofing from "../components/Roofing";

export default {
  name: "Projects",
  components: {
    Construction,
    Roofing
  },
  
};
</script>

<style lang="scss" scoped>

</style>



