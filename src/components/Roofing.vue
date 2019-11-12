<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li v-for="project in projectData" v-bind:key="project.id">
              <div class="card" v-if="project.Category == 'Roofing'">
                <div class="card-body">
                  <h5 class="card-title">{{project.Name}}</h5>
                  <p class="card-text category">Type: {{project.Category}}</p>
                  <p class="card-text">Description: {{project.Description}}</p>
                  <p class="card-text">Cost: ${{project.Value}}</p>
                  <p class="card-text">Status: {{project.Status}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-md-6">
          <div class="form-container">
            <h2>New Roofing Project</h2>
            <div class="form-group">
              <form action class="addform" v-on:submit.prevent="addProject">
                <label for="name">Name</label>
                <input v-model="projectData.Name" type="text" name="name" />
                <br />
                <label for="type">Type</label>
                <select v-model="projectData.Category" name="type" id="type">
                  <option value="Roofing">Roofing</option>
                </select>
                <br />
                <label for="description">Description</label>
                <input v-model="projectData.Description" type="text" name="description" />
                <br />
                <label for="cost">Cost</label>
                <input v-model="projectData.Value" type="number" name="cost" />
                <br />
                <label for="status">Status</label>
                <select v-model="projectData.Status" name="status" id="status">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </form>
              <button v-on:click="addProject" class="btn btn-dark add">Add Project</button>
            </div>
          </div>
          <div class="form-group">
            <button v-on:click="deleteProject" class="btn btn-danger delete">Delete Project</button>
          </div>
        </div>
      </div>

      <router-link to="/">Go Back</router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Roofing",
  data() {
    return {
      loading: false,
      projectData: {
        Name: "",
        Category: "",
        Description: "",
        Value: ""
      }
    };
  },
  async created() {
    this.loading = true;
    try {
      const res = await axios.get("construction.json");
      this.projectData = res.data[0].projects;
      console.log(this.projectData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      console.log(err);
    }
  },
  methods: {
    addProject: function(e) {
      e.preventDefault();
      this.projectData.push({
        Name: this.projectData.Name,
        Category: this.projectData.Category,
        Description: this.projectData.Description,
        Value: this.projectData.Value,
        Status: this.projectData.Status
      });
      console.log(this.projectData);
    },
    deleteProject: function() {
      this.projectData.pop();
    }
  }
};
</script>

<style lang="scss" scope>
ul {
  margin: auto;

  li {
    list-style: none;
    margin: 1rem 0;

    .card {
      width: 50rem;
      height: 30vh;
      background-color: rgba(24, 24, 24, 0.5);
      border: 1px solid #fff;
      border-radius: 20px;

      h5 {
        color: rgb(201, 162, 79);
        text-align: center;
      }

      p {
        color: #fff;
        text-align: center;
      }

      h5 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
      }

      .category {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
}

a {
  font-size: 2rem;
  display: inline-block;
  margin: 2rem 0;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
  color: #fff;
  border-radius: 8px;

  &:hover {
    border: #ccc 2px solid;
    color: #ccc;
  }
}

.add,
.delete {
  font-size: 2rem;
  display: block;
  margin: auto;
  font-weight: 100;
}

.add {
  margin-top: 4rem;
}

.delete {
  margin-top: 2rem;
}

.form-container {
  width: 500px;
  margin: auto;
  background: linear-gradient(rgba(0, 0, 0, 0.479), rgba(0, 0, 0, 0.521)),
    url("../assets/form2.jpg") no-repeat center center/cover;
  padding: 3rem;
  border: 1px solid #fff;
  border-radius: 20px;

  h2 {
    text-align: center;
    padding: 1rem 0;
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

  label {
    font-size: 1.3rem;
  }
}
</style>



