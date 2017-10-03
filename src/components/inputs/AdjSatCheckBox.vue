<template>
  <!-- <div class="row">
    <input type="checkbox" v-model="adjSat"> {{ adjSat }} </input>
  </div> -->
  <div>
    {{adjSatOptions}}
  </div>
</template>

<script>
  export default {
    // props:['satellite'],
    data(){
      return {
        // adjSat:'Apstar7',
        // adjSatOptions: ['Apstar7', 'Express80E', 'ABS2', 'Telkom3s', 'Asiasat4', 'Potok'],
        adjSatOptions: []
      }
    },
    create() {
      this.$http.get('data').then(response => {
        this.adjSatOptions = response.body.adjacent_satellites.apstar7;
        console.log(response);
      }).catch((e) => {
        console.log(e);
      })
    }
  }
</script>
