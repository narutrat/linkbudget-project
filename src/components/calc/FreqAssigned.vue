<template>
<div>

  <div class="col-sm-4" style="text-align:left; margin-top:5px">
    <div class="row" style="margin-left:2px">Uplink Frequency (GHz)</div>
    <div class="row" style="margin-left:2px; margin-top:8px">Downlink Frequency (GHz)</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{frqUp_A}}</div>
    <div class="row">
      <input v-model="this.freqAssigned.selectedTp.downFrq" class="form-control" style="text-align:center">
    </div>
  </div>


  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{frqUp_B}}</div>
    <div class="row">
      <input v-model="this.freqAssigned.selectedTp.downFrq" class="form-control" style="text-align:center">
    </div>
  </div>

  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{this.freqAssigned.ulPol}}</div>
    <div class="row" style="margin-top:5px">{{this.freqAssigned.dnPol}}</div>
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
  props: ['freqAssigned'],
  data() {
    return {
      // frqUp_A: '',
      // frqUp_B: '',

    }
  },
  computed: {
    frqUp_A() {

      if (this.freqAssigned.selectedBeam === "Standard-C") {
        return (parseFloat(this.freqAssigned.selectedTp.downFrq) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.freqAssigned.selectedTp.downFrq) + 3.025).toFixed(3);
      }
    },
    frqUp_B() {

      if (this.freqAssigned.selectedBeam === "Standard-C") {
        return (parseFloat(this.freqAssigned.selectedTp.downFrq) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.freqAssigned.selectedTp.downFrq) + 3.025).toFixed(3);
      }
    },
  },
  watch: {
    // updateFreq() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      'freqAssigned'(newVal, oldVal) {
      this.$emit('updateFrq', {
        frqUpA: this.frqUp_A,
        frqUpB: this.frqUp_B,
      })
    },
  }
  // watch: {
  //   'freqAssigned'(newVal, oldVal) {
  //     this.freqAssigned.selectedTp.downFrq = newVal.freqAssigned.selectedTp.downFrq;
  //   }
  // }
}
</script>
