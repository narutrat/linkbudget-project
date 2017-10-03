<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{maxEirpNonUtil_A.toFixed(2)}}</div>
    <div class="row">2{{maxEirpNonUtil_B.toFixed(2)}}</div>
  </div>

  <div class="col-sm-1">
    <div class="row">dB</div>
    <div class="row">dB</div>
  </div>

  <div class="col-sm-2">
    <div class="row">1{{maxEirpNonBW_A.toFixed(2)}}</div>
    <div class="row">2{{maxEirpNonBW_B.toFixed(2)}}</div>
  </div>

  <div class="col-sm-1">
    <div class="row">dB</div>
    <div class="row">dB</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['eirpDown'],
  data() {
    return {
      // maxEirpNonUtil_A: '',
      // maxEirpNonUtil_B: '',
      // maxEirpNonBW_A: '',
      // maxEirpNonBW_B: ''
    }
  },
  computed: {
    maxEirpNonUtil_A() {
      return (this.eirpDown.eirpDn - this.eirpDown.oboCal);
    },
    maxEirpNonUtil_B() {
      return (this.eirpDown.eirpDn - this.eirpDown.oboCal);
    },
    maxEirpNonBW_A() {
      return (this.eirpDown.eirpDn - (this.eirpDown.aggObo + (10 * Math.log10(36000 / this.eirpDown.allowBW))));
    },
    maxEirpNonBW_B() {
      return (this.eirpDown.eirpDn - (this.eirpDown.aggObo + (10 * Math.log10(36000 / this.eirpDown.allowBW))));
    },
  },
}
</script>
