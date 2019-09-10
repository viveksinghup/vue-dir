<template>
  <div class="container">
    <div class="heading-container">
      <nav aria-label="breadcrumb" class="breadcrumb-wrap">
          <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">All Posts by Users</li>
          </ol>
      </nav>
      <button type="submit" class="btn btn-primary btn-lg" @click="ShowForm">Add Post</button>
    </div>
    <div class="form-wrapper" v-if="FormContainer">
      <PostAdd v-on:add-post="addPost" />
    </div>
    <PostList v-bind:posts="posts" />
  </div>
</template>

<script lang="ts">

import axios from "axios";
import Vue from "vue";
import PostList from "@/views/PostList.vue";
import PostAdd from "@/views/PostAdd.vue";

export default {
  name: "Home",
  components: {
    PostList,
    PostAdd,
  },

  data(){
    return{
      FormContainer: false,
      posts: [],
      errors: []
    };
  },

  methods: {
    ShowForm(){
      this.FormContainer = true;
    },
    addPost(newPost){
      const{title, body} = newPost;
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body
      })
      .then(res => (this.posts = [...this.posts, res.data]))
      .catch(e => {
        this.errors.push(e);
      })
    }
  },

  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
    .then(res => {
      this.posts = res.data;
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
</style>
