<template>
  <div class="container">
        <b-row class="mt-4 pt-2">
          <b-col cols="12" class="p-4 bg-dark">
            <strong> Madrasah Hebat Bermartabat </strong>
          </b-col>          
        </b-row>
      <br>
      <div>
        <b-card class="kiri">
            <b-col cols="sm-2">
              <div class="button">
              <router-link to="/Profil/Sejarah"><button>Sejarah</button></router-link>
              <router-link to="/Profil/Profilmad"><button>Profil Madrasah</button></router-link>
              <router-link to="/Profil/Struktur"><button>Struktur MI Mafda</button></router-link>
              <router-link to="/Profil/Komite"><button>Komite</button></router-link>
              <router-link to="/Profil/Guru"><button>Dewan Guru</button></router-link>
              </div>
          </b-col>
        </b-card>
      </div>

      <div class="kanan">
      <router-view name="isiprofil"/>
      </div>
      <hr>
       <footer class="bg-dark text-white">
         <div class="container1 py-2">
           <div class="row">
             <div class="col-lg-3 col-sm-6 pb-2">
               <h4>About Information</h4>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit.</p>
             </div>
             <div class="col-lg-3">
             <h5>usefull link</h5>
             <ul class="list-unstyled">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Service</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
             </div>
             <div class="col-lg-3 col-sm-6 pb-2">
               <h4>Kontak</h4>
               <p>
                 <addres>bjcbhfvdjfbvjdf</addres>
                 <strong>Phone :87456t4856849</strong>
                 <strong>email</strong>
               </p>
             </div> 
             <div class="col-lg-3 col-sm-6 pb-2">
               <h4>Newsletters</h4>
               <p>
                 enter you email address below
               </p>
               <form action="#"></form>
               <div class="input-grup">
                 <input type="email" name="" id="" class="form-control">
                 <div class="input-grup-append">
                   <button class="btn btn-secondary">subscribe</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="container-fluid text-center bg-secondary py-2 mb-2">
           & Copy; 2020 All rihgt are reserved
         </div>
       </footer>
  </div>
</template>

<script>

</script>

<style scoped>

.container {
  background: rgb(234, 236, 231);
  z-index: 0;
}
p {
  margin: auto;
  color: antiquewhite;
  font-size: 12px;
 
}
.kiri {
  float: left;
  background:rgb(224, 224, 224);
  margin-right: 4px;
  height: 400px;
  
}
.button {
  width: 200px;
  float: left
}
button {
  width: 200px;
  background: rgba(0, 5, 5, 0.623);
  padding: 4px;
  margin: 4px;
  color: azure;
  font-weight: bold;
}

.kanan {
  min-height: 400px;
  background: rgb(226, 226, 225);
  width: 75%;
  display: flex;
}
.container1 {
  margin: 6px;
  padding: 4px;
}

</style>