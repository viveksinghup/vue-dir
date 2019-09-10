<template>
    <div>
        <div class="card mb-12 mb-2" v-for="comment in comments" :key="comment.id" >
            <div class="row no-gutters">
                <div class="col-md-1 img">
                    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" class="card-img">
                </div>
                <div class="col-md-11">
                    <div class="card-body">
                        <h5 class="card-title">{{comment.name}}</h5>
                        <div class="card-text"><small class="text-muted">{{comment.body}}</small></div>
                        <small>Email Id: {{comment.email}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from "axios";

export default{
    name: "PostComments",

    data(){
        return{
            id: this.$route.params.id,
            comments: [],
            errors: [],
        };
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments?_limit=30`)
        .then(res => {
        this.comments = res.data;
        })
        .catch(e => {
        this.errors.push(e);
        })
    }
}
</script>
<style scoped>
.img{
    display: flex;
    align-items : center;
    padding-left: 20px;
}
</style>