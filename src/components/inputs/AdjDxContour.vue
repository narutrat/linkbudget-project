<template>
<div>
  <!-- <div class="col-sm-1" v-for="dxContour in dxContours" style="text-align:center">
    {{joinContour(dxContour)}}
  </div> -->
  <div>
    {{eirpdown}} // {{eirpdown1}}
  </div>
</div>
</template>

<script>
export default {
  props: ['adjSatellites'],
  data() {
    return {
      adjDatabases: [],
      }
  },
  // methods: {
  //   joinContour(contour) {
  //     return contour.map(x => x.value);
  //   }
  // },
  computed: {
    //
    // dxContours() {
    //   // return this.satellite.adjSat;
    //   var getDxContour = [];
    //   var vm = this;
    //   if (this.satellite.adjSat && this.selectedLocations) {
    //     this.satellite.adjSat.forEach(function(x){
    //       var dxSat = [];
    //       vm.selectedLocations.forEach(function(y){
    //         // console.log(JSON.stringify(y.adjDxContour));
    //         // console.log(x);
    //         dxSat.push(y.adjDxContour.find(z => z.adjSatName == x));
    //       });
    //       // getDxContour.push(dxSat.join(','));
    //       getDxContour.push(dxSat);
    //     });
    //     vm.$emit('dxContourVal',getDxContour);
    //     return getDxContour;
    //   } else {
    //       return [];
    //   }
    //
    //
    // },
    eirpdown() {
      if (this.adjSatellites.selectedLocations && this.adjSatellites.selectedBeam) {
        // var result = this.adjSatellites.selectedLocations.find(x => x.city === this.locationSel)
        // return result ? result.data.find(x => x.beam === this.adjSatellites.selectedBeam && x.type ==='downlink') : [];
        var result = this.adjSatellites.selectedLocations.find(x => x.city === this.adjSatellites.city);
        return result ? result.data.find(x => x.beam === this.adjSatellites.selectedBeam && x.type ==='downlink').value : [];
      } else {
        return [];
      }
    },
    eirpdown1() {
      if (this.adjSatellites.selectedLocations && this.adjSatellites.selectedBeam) {
        // var result = this.adjSatellites.selectedLocations.find(x => x.city === this.locationSel)
        // return result ? result.data.find(x => x.beam === this.adjSatellites.selectedBeam && x.type ==='downlink') : [];
        var result = this.adjSatellites.selectedLocations.find(x => x.city === this.adjSatellites.city);
        // var e1 = result ? result.data.find(x => x.beam === this.adjSatellites.selectedBeam && x.type ==='downlink')
        return result ? result.data.find(x => x.satellite === 'Apstar-7' && x.type ==='downlink') : [];
        // return e1 ? e1.find(x => x.satellite === 'Apstar76.5E').value
      } else {
        return [];
      }
    },
  },
  watch: {
    'adjSatellites' (newVal) {
      this.$http.get('adjsat').then(response => {
        this.adjDatabases = response.body.adjsats;
        console.log(response);
      }).catch((e) => {
        console.log(e);
      })
    }
  }
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
