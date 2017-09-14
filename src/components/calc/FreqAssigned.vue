<template>
<div>

  <div class="col-sm-4">
    <div class="row">Uplink Frequency (GHz)</div>
    <div class="row">Downlink Frequency (GHz)</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row">frqUp_A</div>
    <div class="row">
      <input v-model="frqDn_A" class="form-control" style="text-align:center">
    </div>
  </div>


  <div class="col-sm-2">
    <div class="row">frqUp_B</div>
    <div class="row">
      <input v-model="frqDn_B" class="form-control" style="text-align:center">
    </div>
  </div>

  <div class="col-sm-2">
    <div class="row">{{upPol}}</div>
    <div class="row">{{dnPol}}</div>
  </div>
  <!-- <div class="col-sm-2">
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </div> -->

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['bandwidthVal'],
  data() {
    return {
      frqUp_A: '',
      frqUp_B: '',
      frqDn_A: '',
      frqDn_B: '',
      upPol: '',
      dnPol: ''


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
