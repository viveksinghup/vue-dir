<template>
  <div class="Header-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
         <router-link class="navbar-brand" to="/"><img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""> {{SiteName}}</router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      SiteName: "Demo App"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header-container{
  height: 70px;
}
</style>
