<template>
<div>
  <div v-if="this.adjDxContour.adjSatSel[0]" class="col-sm-1" style="text-align:center; margin-left:15px">
    <!-- {{adjSatSelection}} -->
      <!-- {{this.adjDxContour.adjSatPeak1}} -->
      {{dxContour1.toFixed(2)}}
  </div>
  <div v-if="this.adjDxContour.adjSatSel[1]" class="col-sm-1" style="text-align:center">
      {{dxContour2.toFixed(2)}}
  </div>
</div>
</template>

<script>
export default {
  props: ['adjDxContour'],
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
    dxContour1() {
      if (this.eirpdown1) {
        return this.adjDxContour.adjSatPeak1 - this.eirpdown1;
      } else {
        return ' ' ;
      }
    },
    dxContour2() {
      if (this.eirpdown2) {
        return this.adjDxContour.adjSatPeak2 - this.eirpdown2;
      } else {
        return ' ' ;
      }
    },
    adjSatSelection1() {
      if (this.adjDxContour.adjSatSel[0] === 'Apstar76.5E') {
        return 'Apstar-7'
      } else if (this.adjDxContour.adjSatSel[0] === 'Express80E') {
        return 'Express-AM4'
      } else if (this.adjDxContour.adjSatSel[0] === 'Telkom118E') {
        return 'Telkom-3'
      } else if (this.adjDxContour.adjSatSel[0] === 'Asiasat122E') {
        return 'Asiasat-4'
      }
    },
    adjSatSelection2() {
      if (this.adjDxContour.adjSatSel[1] === 'Apstar76.5E') {
        return 'Apstar-7'
      } else if (this.adjDxContour.adjSatSel[1] === 'Express80E') {
        return 'Express-AM4'
      } else if (this.adjDxContour.adjSatSel[1] === 'Telkom118E') {
        return 'Telkom-3'
      } else if (this.adjDxContour.adjSatSel[1] === 'Asiasat122E') {
        return 'Asiasat-4'
      }
    },
    eirpdown() {
      if (this.adjDxContour.selectedLocations && this.adjDxContour.selectedBeam) {
        // var result = this.adjDxContour.selectedLocations.find(x => x.city === this.locationSel)
        // return result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink') : [];
        var result = this.adjDxContour.selectedLocations.find(x => x.city === this.adjDxContour.city);
        return result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink').value : [];
      } else {
        return [];
      }
    },
    eirpdown1() {
      if (this.adjDxContour.selectedLocations && this.adjDxContour.selectedBeam) {
        // var result = this.adjDxContour.selectedLocations.find(x => x.city === this.locationSel)
        // return result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink') : [];
        var result = this.adjDxContour.selectedLocations.find(x => x.city === this.adjDxContour.city);
        // var e1 = result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink')
        return result ? result.data.find(x => x.satellite === this.adjSatSelection1 && x.type ==='downlink').value : [];
        // return e1 ? e1.find(x => x.satellite === 'Apstar76.5E').value
      } else {
        return [];
      }
    },
    eirpdown2() {
      if (this.adjDxContour.selectedLocations && this.adjDxContour.selectedBeam && this.adjSatSelection2) {
        // var result = this.adjDxContour.selectedLocations.find(x => x.city === this.locationSel)
        // return result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink') : [];
        var result = this.adjDxContour.selectedLocations.find(x => x.city === this.adjDxContour.city);
        // var e1 = result ? result.data.find(x => x.beam === this.adjDxContour.selectedBeam && x.type ==='downlink')
        return result ? result.data.find(x => x.satellite === this.adjSatSelection2 && x.type ==='downlink').value : [];
        // return e1 ? e1.find(x => x.satellite === 'Apstar76.5E').value
      } else {
        return [];
      }
    },
  },
  watch: {
    'adjDxContour' (newVal) {
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
