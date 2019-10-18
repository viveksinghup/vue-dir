<template>
    <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-bar">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Project Details</li>
            </ol>
        </nav>
        <div class="card-body">
            <h5 class="card-title">{{Project.title}}</h5>
            <p class="card-text">{{Project.body}}</p>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios";

export default {
    name: "ProjectDetails",
    components: {
    },

    data(){
        return{
            id: this.$route.params.id,
            Project: [],
            errors: [],
        };
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/Posts/${this.id}`)
        .then(res => {
        this.Project = res.data;
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