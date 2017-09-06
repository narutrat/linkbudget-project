<template>
  <div class="row">
    <input type="checkbox" v-model="adjSat"> {{ adjSat }} </input>
  </div>
</template>

<script>
  export default {
    // props:['satellite'],
    data(){
      return {
        adjSat:'Apstar7',
        adjSatOptions: ['Apstar7', 'Express80E', 'ABS2', 'Telkom3s', 'Asiasat4', 'Potok'],
      }
    }
  }
</script>
