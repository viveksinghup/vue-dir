<template>
  <div class="container-fluid">
    <div class="Project-container">
      <Project v-bind:Projects="Projects" />
    </div>
    <div class="heading-container">
      <button type="submit" class="btn btn-primary btn-lg" @click="ShowForm">Add Project</button>
    </div>
    <div class="form-wrapper" v-if="FormContainer">
      <ProjectAdd v-on:add-Project="addProject" />
    </div>
  </div>
</template>

<script lang="ts">

import axios from "axios";
import Project from "@/views/Project.vue";
import ProjectAdd from "@/views/ProjectAdd.vue";

export default {
  name: "AllProject",
  components: {
    Project,
    ProjectAdd,
  },

  data(){
    return{
      FormContainer: false,
      Projects: [],
      errors: []
    };
  },

  methods: {
    ShowForm(){
      this.FormContainer = true;
    },
    addProject(newProject){
      const{title, body} = newProject;
      axios.Project("https://jsonplaceholder.typicode.com/Posts", {
        title,
        body
      })
      .then(res => (this.Projects = [...this.Projects, res.data]))
      .catch(e => {
        this.errors.push(e);
      })
    }
  },

  created() {
    axios.get(`https://jsonplaceholder.typicode.com/Posts?_limit=20`)
    .then(res => {
      this.Projects = res.data;
    })
    .catch(e => {
      this.errors.push(e);
    })
  }

};
</script>
<style scoped>
.heading-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
}
.breadcrumb{
  margin: 0px;
}
.breadcrumb-wrap{
  flex: 1;
  margin-right: 30px;
}
button{
  height: 64px;
}
.Project-container{
    margin: auto;
    margin-top: -140px;
    z-index: 1;
    max-width: 1300px;
}
</style>
