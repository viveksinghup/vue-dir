<template>
    <div>
        <div class="card mb-2 mt-2" v-for="post of posts" :key="post.id">
            <div class="card-body">
                <div class="card-text"><router-link :to="`/post-details/${post.id}`">{{post.title}}</router-link></div>
                <p class="card-text"><small class="text-muted">{{post.body}}</small></p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default{
    name: "PostList",
    props: ["posts"]
}
</script>