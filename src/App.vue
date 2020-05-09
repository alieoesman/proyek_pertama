<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/Profil">Profil</router-link> |
      <router-link to="/Kesiswaan">Kesiswaan</router-link> |
      <router-link to="/Informasi">Informasi</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e72dd;
  width: 100%;
}

#nav {
  padding: 10px;
  margin-bottom: 25px;
  background-color: rgba(2, 31, 8, 0.904);
  width: 100%;
 
}

#nav .router-link-exact-active {
  color: #11e98b;
  text-decoration: none;
 
}

</style>
