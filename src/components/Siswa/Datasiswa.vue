<template>
    <div>
      <section>
        <div>
          <h4>Daftar Siswa Kelas 1-6</h4>
          <hr>
          <br>
            <div>
                <b-table striped hover bordered  :items="items" :fields="fields"></b-table>
            </div>
          
        </div>
      </section>

      
    </div>
</template>

<script>

export default {
    data() {
        return {
            fields: ['Nama', 'Tempat_Lahir', 'Umur', 'Istri', 'Kawin', 'Hobi', 'Status'],
            items: [
                { isActive: true, Nama: 'Ali', Tempat_Lahir: 'Grobogan', Umur: '27', Istri: 'Titi Sariah'},
                { isActive: false, Nama: 'Usman', Tempat_Lahir: 'Cilacap', Umur: '30', Istri: 'rifah'},
                { isActive: true, Nama: 'Wira', Tempat_Lahir: 'Banyuwangitimuryang', Umur: '19', Istri: 'belum'},
                { isActive: false, Nama: 'Jaya', Tempat_Lahir: 'Jakarta', Umur: '26', Istri: 'belum'}
            ]
        }
    }
}


</script>

<style scoped>

section {
  padding: 10px;
  text-align: left;
  color: black;


}
</style>