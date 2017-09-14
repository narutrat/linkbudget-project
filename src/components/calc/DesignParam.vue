<template>
    <div class="col-sm-2" style="text-align:center">
      <!-- <div class="row">hpaBackoff</div> -->
      <div class="row">3 {{this.bandwidthData.selectedBwSel}}</div>
      <div class="row">
        <input v-model="this.bandwidthData.bandwidthVal" class="form-control" style="text-align:center">
      </div>
      <div class="row">
        <input v-model="guardBandVal" class="form-control" style="text-align:center">
      </div>
      <div class="row">allowBw</div>
      <div class="row">aggHpaBoo</div>
      <div class="row">numMCPC</div>
    </div>


</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['bandwidthData'],
  data() {
    return {

      // bandwidthVal: '',
      guardBandVal: '',


    }
  },
  // methods: {
  //   paraChanged() {
  //     var designPara = [];
  //     var paraData = [];
  //     var vm = this;
  //     paraData.push(vm.bandwidthVal);
  //     paraData.push(vm.guardBandVal);
  //     vm.$emit('designPara', paraData);
  //   }
  // }
}
</script>
