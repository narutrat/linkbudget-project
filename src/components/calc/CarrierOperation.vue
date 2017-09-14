<template>
  <div>
  <div class="col-sm-4" style="text-align:left">
    <div class="row">Allowable IBO / Carrier (dB)</div>
    <div class="row">IBO / Carrier (dB)</div>
    <div class="row">OBO / Carrier (dB)</div>
    <div class="row">Transponder Gain (dBm^2)</div>
  </div>

  <div class="col-sm-2" style="text-align:center">
    <div class="row">allowIboClear_A</div>
    <div class="row">iboCal_A</div>
    <div class="row">oboCal_A</div>
    <div class="row">tpGain_A</div>
  </div>

  <div class="col-sm-2" style="text-align:center">
    <div class="row">allowIboClear_A</div>
    <div class="row">iboUpfade_A</div>
    <div class="row">oboUpfade_A</div>
    <div class="row">tpGain_A</div>
  </div>

  <div class="col-sm-2" style="text-align:center">
    <div class="row">allowIboClear_B</div>
    <div class="row">iboCal_B</div>
    <div class="row">oboCal_B</div>
    <div class="row">tpGain_B</div>
  </div>

  <div class="col-sm-2" style="text-align:center">
    <div class="row">allowIboClear_B</div>
    <div class="row">iboUpfade_B</div>
    <div class="row">oboUpfade_B</div>
    <div class="row">tpGain_B</div>
  </div>
  </div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['bandwidthVal'],
  data() {
    return {

      // bandwidthVal: '',
      guardBandVal: '',


    }
  },
  methods: {
    paraChanged() {
      var designPara = [];
      var paraData = [];
      var vm = this;
      paraData.push(vm.bandwidthVal);
      paraData.push(vm.guardBandVal);
      vm.$emit('designPara', paraData);
    }
  }
}
</script>
