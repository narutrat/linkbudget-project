<template>
<div>
  <div class="col-sm-1" v-for="dxContour in dxContours" style="text-align:center">
    {{joinContour(dxContour)}}
  </div>
</div>
</template>

<script>
export default {
  props: ['satellite', 'selectedLocations'],
  data() {
    return {

    }
  },
  methods: {
    joinContour(contour) {
      return contour.map(x => x.value);
    }
  },
  computed: {

    dxContours() {
      // return this.satellite.adjSat;
      var getDxContour = [];
      var vm = this;
      if (this.satellite.adjSat && this.selectedLocations) {
        this.satellite.adjSat.forEach(function(x){
          var dxSat = [];
          vm.selectedLocations.forEach(function(y){
            // console.log(JSON.stringify(y.adjDxContour));
            // console.log(x);
            dxSat.push(y.adjDxContour.find(z => z.adjSatName == x));
          });
          // getDxContour.push(dxSat.join(','));
          getDxContour.push(dxSat);
        });
        vm.$emit('dxContourVal',getDxContour);
        return getDxContour;
      } else {
          return [];
      }


    }
  },
  // methods: {
  //   dxContour(satelliteName) {
  //     // let result = this.adjSatSel.find(x => x.label === this.selectedSatellite.adjSat);
  //     this.$emit('satelliteSelected', satelliteName);
  //   }
  // },
  // // computed: {
  //   beamChanged(value) {
  //     let selectedSatellite = this.satelliteOptions.find(s => s.text === value);
  //     this.$emit('adjSatSelected', value);
  //   }
  // }
}
</script>
