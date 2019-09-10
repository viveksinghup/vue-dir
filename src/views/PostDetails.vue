<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Post Details</li>
            </ol>
        </nav>
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.body}}</p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="comments mt-3">
                    <PostComments />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios";
import Vue from 'vue';
import PostComments from "@/views/PostComments.vue";

export default {
    name: "PostDetails",
    components: {
        PostComments
    },

    data(){
        return{
            id: this.$route.params.id,
            post: [],
            errors: [],
        };
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res => {
        this.post = res.data;
        })
        .catch(e => {
        this.errors.push(e);
        })
    }
}

</script>
<style>
.breadcrumb{
    padding: 20px;
    margin: 30px 0px;
}
</style>