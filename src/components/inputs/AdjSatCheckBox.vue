<template>
<div>


  <div class="row" v-for="adj in adjSatOptions">
    <input type="checkbox" v-bind:value="adj" v-model="adjSat" @click="adjChanged">{{adj}}</input>
  </div>
  <!-- <div>
  {{adjSatOptions}}
</div> -->
</div>
</template>

<script>
export default {
  props: ['adjSatellites'],
  data() {
    return {
      // adj: [],
      adjSat: [],
      adjSatOptions: ['Apstar76.5E', 'Express80E', 'Telkom118E', 'Asiasat122E'],
      // adjSatOptions: []
    }
  },
  methods: {
    adjChanged() {
      this.$emit('adjSatList', {
        adjSat: this.adjSat,
        adjInfo: this.adjInfo,
      })
    },
  },
  computed: {
    adjInfo() {
      var vm = this;
      let result = [];
      result = this.adjDatabases.find(function(x) {
        // console.log('x. = ' + vm.adjSatellites.selectedSatellite.name);
        return x.satellite === vm.adjSatellites.selectedSatellite.name && x.beam === vm.adjSatellites.selectedBeam;
      });
      if (result) {
        return result;
      }
      return [];
    },

  },
  watch: {
    'adjSatellites' (newVal, oldVal) {
      this.adjInfo = newVal.adjInfo;
      this.$emit('adjSatList', {
        adjSat: this.adjSat,
        adjInfo: this.adjInfo,
      })
    },
    'adjSatellites' (newVal) {
      this.$http.get('adjsat').then(response => {
        this.adjDatabases = response.body.adjsats;
        console.log(response);
      }).catch((e) => {
        console.log(e);
      })
    }
  }

}
</script>
