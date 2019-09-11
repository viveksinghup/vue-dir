<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style>
.breadcrumb-bar{
      position: absolute;
    top: -130px;
  margin: 0px;
}
.container{
  position: relative;
}
.breadcrumb{
background-color: transparent
}
.breadcrumb li a{
  color: #fff;
}
</style>
