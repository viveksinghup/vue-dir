<template>
  <div>
    <form @submit.prevent="addProject">
      <div class="form-group">
        <label>Project Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          v-model="title"
          placeholder="Enter Title"
        />
      </div>
      <div class="form-group">
        <label>Project About</label>
        <textarea
          type="text"
          v-model="body"
          name="body"
          class="form-control"
          placeholder="Enter Project About Texts"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-lg">Submit Project</button>
    </form>
  </div>
</template>
<script>

export default {
  name: "ProjectAdd",

  data(){
    return{
        title: "",
        body: "",
    };
  },

  methods: {
    addProject(){
      const newProject = {
        title: this.title,
        body: this.body,
      };
      // Emiting Value from Forms to home
      this.$emit("add-Project", newProject);
      (this.title = ""), (this.body = "");
    }
  },

};
</script>
<style scoped>
form{
    border: 1px solid #eaeaea;
    background-color: #f8f9fa;
    padding: 30px;
    margin: 30px 0px;
}
</style>