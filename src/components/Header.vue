<template>
  <div class="Header-container">
    <nav class="navbar">
      <div class="container">
         <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> {{SiteName}}</router-link>
          <ul class="form-inline nav list-unstyled">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
      </div>
    </nav>
    <div class="container">
      <div class="info-container">
        <div>
          <div class="info-title">What is Voluntary Provident Fund Scheme?</div>
          <div class="post-info">
            <img src="../assets/logo.png"/>
            <div>
              <span>Vivek Singh</span>
              <small>Author</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      SiteName: "Demo App"
    };
  },
  computed: {
    // isHomeRoute() {
    //   return this.$router.history.current.name !== 'home'
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header-container{
  min-height: 550px;
  position: relative;
}
.Header-container:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://zack.es/wp-content/uploads/duotone-8-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
}
.Header-container:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(0deg,#002fa7,rgba(0,47,167,0.98) 8%,rgba(0,47,167,0.76))
}
.navbar{
  padding: 25px 0px;
}
.navbar a{ color: #fff;}
.info-container{
    min-height: calc(550px - 250px);
    display: flex;
    align-items: center;
}
.info-title{
    font-family: Playfair Display;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
}
.post-info{
  display: flex;
  margin-top: 10px;
}
.post-info img{
  max-width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #fff;
  margin-right: 10px;
}
.post-info div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post-info small, .post-info span{
  display: block;
  color: #fff;
}
.post-info small{
  margin-top: 4px;
}
.post-info span{
  font-size: 16px;
  line-height: 14px;
}
nav{
   max-width: 1140px;
  margin: auto;
  position: relative;
}
</style>
