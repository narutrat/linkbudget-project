<template>
  <div class="row">
    <div class="col-sm-4" style="margin-left:10px; text-align:left">
      <div class="row">Subsatellite Point (deg)</div>
      <div class="row">Altitude</div>
      <div class="row">Earth Radius</div>
    </div>

    <div class="col-sm-4">
      <div class="row">{{orbitalSlotSel}}</div>
      <div class="row">{{altitude}}</div>
      <div class="row">{{earthR}}</div>
    </div>
    <div class="col-sm-4">
      <div class="row">{{orbitPoint}}</div>
      <div class="row">km</div>
      <div class="row">km</div>
    </div>
    <div class="col-sm-4">
      <div class="row">rad</div>
    </div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  // props: ['bandwidthVal'],
  data() {
    return {
      orbitalSlotSel: '',
      altitude: '',
      earthR: '',
      orbitPoint: ''
    }
  },
  methods: {
    paraChanged() {

    }
  }
}
</script>
