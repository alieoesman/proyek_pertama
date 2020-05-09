<template>
    <div>
      <section>
        <div class="area">
          <h4>Jadwal Pelajaran Kelas 1-6</h4>
          <hr>
          <br>
           <div>
                <b-table striped hover bordered borderless :items="items" :fields="fields"></b-table>
            </div>
        </div>
      </section>

      
    </div>
</template>

<script>

export default {
    data() {
        return {
            fields: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
            items: [
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'},
                { isActive: true, Senin: 'IPA', Selasa: 'IPS', Rabu: 'TEMA', Kamis: 'PJOK', Jumat: 'Coding', Sabtu: 'Kesenian'}
             
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