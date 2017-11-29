<template>
<div>

  <div class="col-sm-3">{{this.adjName.adjSatSel}}</div>
  <div class="col-sm-3">adj2</div>


</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['adjName'],
  // data() {
    // return {
    //   adjSat: [{
    //       adjSatName: 'Apstar7',
    //       adjSlot: 76.5,
    //       topocentricAngle: 2.035000,
    //       uplinkPdens: -55,
    //       downlinkPdens_SCPC: -35.5630250076729,
    //       downlinkPdens_MCPC: -39.5630250076729,
    //       esInTcGt: -3
    //     },
    //     {
    //       adjSatName: 'Express80E',
    //       adjSlot: 80,
    //       topocentricAngle: 1.485000,
    //       uplinkPdens: -55,
    //       downlinkPdens_SCPC: -29.0205999132796,
    //       downlinkPdens_MCPC: -37.4205999132796,
    //       esInTcGt: -10
    //     },
    //     {
    //       adjSatName: 'Telkom3s',
    //       adjSlot: 118,
    //       topocentricAngle: 2.035000,
    //       uplinkPdens: -55,
    //       downlinkPdens_SCPC: -37.5630250076729,
    //       downlinkPdens_MCPC: -41.5630250076729,
    //       esInTcGt: -10
    //     },
    //     {
    //       adjSatName: 'Asiasat4',
    //       adjSlot: 122.1,
    //       topocentricAngle: 2.255000,
    //       uplinkPdens: -55,
    //       downlinkPdens_SCPC: -34.5630250076729,
    //       downlinkPdens_MCPC: -38.5630250076729,
    //       esInTcGt: -4
    //     }
    //   ]
    // }
  // },
  // computed: {
    // adj1() {
    //   if (this.adjName.selectedSatellite && this.adjName.selectedLocationsA) {
    //     return this.adjName.adjSatName;
    //     // return 1;
    //   } else {
    //     return ;
    //   }
    // }
  // }
}
</script>
