<template>
  <div class="row">
    <div class="col-sm-4" style="margin-top:5px; text-align:left">
      <div class="row" style="margin-left:1px">Subsatellite Point (deg)</div>
      <div class="row" style="margin-left:1px">Altitude</div>
      <div class="row" style="margin-left:1px; margin-bottom:5px">Earth Radius</div>
    </div>

    <div class="col-sm-2"></div>

    <div class="col-sm-2">
      <div class="row">{{this.satInfo.selectedSatellite.orbitalSlot || 0}}</div>
      <div class="row">{{altitude}}</div>
      <div class="row">{{earthR}}</div>
    </div>
    <div class="col-sm-2">
      <div class="row">{{orbitPoint.toFixed(4)}}</div>
      <div class="row">km</div>
      <div class="row">km</div>
    </div>
    <div class="col-sm-2">
      <div class="row">rad</div>
    </div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['satInfo'],
  data() {
    return {
      // orbitalSlotSel: '',
      altitude: 35786,
      earthR: 6378,
      // orbitPoint: ''
    }
  },
  computed: {
    orbitPoint() {
      var vm = this;
      if (this.satInfo.selectedSatellite) {
          return this.satInfo.selectedSatellite.orbitalSlot * Math.PI / 180;
      } else {
        return [];
      }

    },
  }
}
</script>
