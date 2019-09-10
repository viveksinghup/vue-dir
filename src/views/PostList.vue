<template>
    <div class="post-wrapper row">
        <div class="col-md-4" v-for="post of posts" :key="post.id">
            <router-link :to="`/post-details/${post.id}`">
                <div class="post-card">
                    <div class="post-card-body">
                        <img src="../assets/banner.jpg"/>
                        <div class="post-desc">
                            <div class="post-card-title">{{post.title}}</div>
                            <p class="post-card-text"><small class="text-muted">{{post.body}}</small></p>
                        </div>
                    </div>
                </div>
            </router-link>
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
<style scoped>
.post-wrapper{
    display: flex;
    flex-flow: row wrap;
    margin: 0px -20px;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.post-card{
    box-shadow: 0px 0px 10px 0px rgba(39,49,65,0.1);
    margin-bottom: 40px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 4px; 
    transition: 0.45s;
    background-color: #fff;
}
.post-card:hover{
    box-shadow: 0px 0px 30px 0px rgba(39,49,65,0.2);
}
.post-card-body img{
    width: 100%;
    max-height: 188px;
    object-fit: cover;
}
.post-desc{
    padding: 20px 30px;
}
a{
    text-decoration: none;
}
.post-card-title{
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.post-card-text{
    max-height: 40px;
    font-size: 14px;
    overflow: hidden;
    margin: 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
@keyframes slide-top {
  0% {
    transform: translateY(140px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>