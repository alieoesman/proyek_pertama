<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Madrasah Hebat Bermartabat</p>
    <h3>Kunjungi Rumah Kami </h3>
     <router-link to="/Profil"><button>Masuk</button></router-link>

    <section>
       <b-container class="bv-example-row cols-sm-12">
         <b-row class="text-center">
            <b-col cols="sm-4">
              <router-link to="/">
              <img src="@/assets/2.jpeg" alt="gambar">
              </router-link>
            </b-col>
            <b-col cols="sm-4">
              <router-link to="/">
              <img src="@/assets/3.jpeg" alt="gambar">
              </router-link>
            </b-col>
            <b-col cols="sm-4">
             <router-link to="/">
              <img src="@/assets/4.jpeg" alt="gambar">
              </router-link>
            </b-col>
       </b-row>
       </b-container>
    </section>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 15px;
  font-weight: bolder;
  font-size: 50px;
  text-shadow: 0 0 5px rgb(3, 1, 1), 0 0 5px rgb(8, 4, 4), 0 0 5px rgb(24, 22, 22), 0 0 5px #0d1b09, 0 0 5px rgb(9, 20, 5), 0 0 10px #49FF18, 0 0 10px rgb(3, 10, 1), 0 0 10px #030702;
  color: rgb(247, 247, 252);
  
}
.hello p {
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 5px rgb(8, 3, 3), 0 0 5px rgb(10, 6, 6), 0 0 5px rgb(15, 8, 8), 0 0 5px #49ff18, 0 0 10px #49FF18, 0 0 5px rgb(10, 17, 8), 0 0 5px #49FF18, 0 0 5px #101b0d;
  color: rgb(239, 239, 247);
}
h3 {
  margin: 50px 0 0;
  text-shadow: 0 0 5px rgb(62, 33, 100), 0 0 5px rgb(10, 6, 6), 0 0 5px rgb(15, 8, 8), 0 0 5px #49ff18, 0 0 10px #49FF18, 0 0 10px rgb(45, 3, 85), 0 0 5px rgb(46, 8, 97), 0 0 5px #3a0f74;
  color: rgb(239, 239, 247);
  font-size: 20px;
}
button {
  margin: 18px;
  padding: 4px;
  border-radius: 22px;
  background-color: rgb(6, 99, 91);
  width: 150px;
  height: 40px;
}
.container {
 
  margin: auto;
  display: flex;
  justify-content: center;

}

img {
  margin-top: 45px;
  border: 6px solid rgb(243, 240, 240);
  width: fit-content;
  max-width: 18rem;
  border-radius: 6px;
  transition: 0.5s ease all;
}
img:hover {
  box-shadow: 1px 0px 15px 1px #939693;
  transform: scale(1.1,1.1);
}

</style>
