<template>
    <div class="Project-wrapper row">
        <div class="col-md-4" v-for="Project of Projects" :key="Project.id">
            <router-link :to="`/Project-details/${Project.id}`">
                <div class="Project-card">
                    <div class="Project-card-body">
                        <img src="../assets/banner.jpg"/>
                        <div class="Project-desc">
                            <div class="Project-card-title">{{Project.title}}</div>
                            <p class="Project-card-text"><small class="text-muted">{{Project.body}}</small></p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>

export default{
    name: "Project",
    props: ["Projects"]
}
</script>
<style scoped>
.Project-wrapper{
    display: flex;
    flex-flow: row wrap;
    margin: 0px -20px;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.Project-card{
    box-shadow: 0px 0px 10px 0px rgba(39,49,65,0.1);
    margin-bottom: 40px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 10px;
    transition: 0.45s;
    background-color: #fff;
}
.Project-card:hover{
    box-shadow: 0px 0px 30px 0px rgba(39,49,65,0.2);
}
.Project-card-body img{
    width: 100%;
    max-height: 188px;
    object-fit: cover;
}
.Project-desc{
    padding: 30px;
}
a{
    text-decoration: none;
}
.Project-card-title{
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Playfair Display;
}
.Project-card-text{
    font-size: 19px;
    overflow: hidden;
    font-family: Muli !important;
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