<template>
  <div id="app">
    <!-- <img src="./assets/logo-bulb.jpg"> -->
    <span class="title">учет лампочек в квартире</span>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  padding: 20px 15px;
}
img{
  width: 10%;
}
.title{
  text-transform: uppercase;
  font-size: 24px;
}
</style>
