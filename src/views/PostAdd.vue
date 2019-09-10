<template>
  <div>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <label>Post Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          v-model="title"
          placeholder="Enter Title"
        />
      </div>
      <div class="form-group">
        <label>Post About</label>
        <textarea
          type="text"
          v-model="body"
          name="body"
          class="form-control"
          placeholder="Enter Post About Texts"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-lg">Submit Post</button>
    </form>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "PostAdd",

  data(){
    return{
        title: "",
        body: "",
    };
  },

  methods: {
    addPost(){
      const newPost = {
        title: this.title,
        body: this.body,
      };
      // Emiting Value from Forms to home
      this.$emit("add-post", newPost);
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