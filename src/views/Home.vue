<template>
  <div class="home">
    <div class="jumbotron">
    <img alt="Vue logo" src="../assets/ma200.png">
    <HelloWorld msg="MI Mafatihul HUda Bantarsari"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img {
  margin-top: 2px;
}
.jumbotron {
  margin-top: -20px;
  height: 650px;
  background-image: url('../assets/grad.jpg');
  background-size: cover;
}
</style>
