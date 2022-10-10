<template>
  <div>
    <HomeHeader></HomeHeader>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue';
export default {
    components: { HomeHeader }
}
</script>


<style lang="scss">

body{
  background: url(https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg) center center fixed;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -ms-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  margin: 0;
  
}
</style>
