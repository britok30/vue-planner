<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 project-form">
          <h2 class="main-heading">Project Planner</h2>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="project">Project Type</label>
              <select name="project" id="project" v-model="projectType">
                <option value="select" selected disabled>Select Category</option>
                <option value="Construction">Construction</option>
                <option value="Roofing">Roofing</option>
              </select>
            </div>
            <div class="form-group">
              <input type="submit" value="Submit" class="btn btn-outline-light" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      projectType: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.projectType) {
        this.$toasted.show("Please select a project type", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      }
      if (this.projectType === "Construction") {
        this.$router.push("/construction");
      }

      if (this.projectType === "Roofing") {
        this.$router.push("/roofing");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}

.project-form {
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.281);
  border-radius: 5px;
  height: 30vh;

  .main-heading {
    font-weight: 400;
    text-align: center;
    font-size: 5rem;
    padding-top: 2rem;
    color: #000;
  }

  .btn {
    font-weight: 300;
  }

  label {
    font-size: 1.6rem;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.6rem;
    border: 1px solid #ccc;
  }
}
</style>