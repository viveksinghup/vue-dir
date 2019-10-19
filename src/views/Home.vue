<template>
  <div class="container-fluid">
    <div class="Project-container">
      <Project @clicked="onClickedProject" v-bind:Projects="Projects" />
    </div>
    <div class="Prev-proj" v-bind:class="{ active: IsProjectOpen }">
      <div class="close" @click="closeProject">hjgfhgf</div>
      <ProjectDetails v-bind:Project ="Project"></ProjectDetails>
    </div>
  </div>
</template>

<script lang="ts">

import axios from "axios";
import ProjectDetails from "@/views/ProjectDetails.vue";
import Project from "@/views/Project.vue";

export default {
  name: "Home",
  components: {
    Project,
    ProjectDetails,
  },


  data(){
    return{
      IsProjectOpen : false,
      Project: [],
      Projects: [],
      errors: []
    };
  },

  methods: {
    onClickedProject (value) {
      axios.get(`https://jsonplaceholder.typicode.com/Posts/${value}`)
        .then(res => {
          this.Project = res.data;
          this.IsProjectOpen = true;
        })
        .catch(e => {
          this.errors.push(e);
        })
    },
    closeProject (){
      this.IsProjectOpen = false;
    }
  },

  created() {
    axios.get(`https://jsonplaceholder.typicode.com/Posts?_limit=6`)
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
.Prev-proj{
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0px;
  background-color: #fff;
  z-index: 1;
}
.Prev-proj.active{
  display: block;
}
</style>
