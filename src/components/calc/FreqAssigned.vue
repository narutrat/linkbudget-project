<template>
<div>

  <div class="col-sm-4" style="text-align:left; margin-top:5px">
    <div class="row" style="margin-left:2px">Uplink Frequency (GHz)</div>
    <div class="row" style="margin-left:2px; margin-top:8px">Downlink Frequency (GHz)</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{frqUpA}}</div>
    <div class="row">
      <input v-model="frqDnA" class="form-control" style="text-align:center" @input="updateDownFrq">
    </div>
  </div>


  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{frqUpB}}</div>
    <div class="row">
      <input v-model="frqDnB" class="form-control" style="text-align:center" @input="updateDownFrq">
    </div>
  </div>

  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{this.freqAssigned.selectedTp.uplink_pol}}</div>
    <div class="row" style="margin-top:5px">{{this.freqAssigned.selectedTp.downlink_pol}}</div>
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
      frqDnA: "",
      frqDnB: ""
    }
  },
  computed: {
    // frqDn_A() {
    //   return this.freqAssigned.selectedTp.downlink_cf;
    // },
    // frqDn_B() {
    //   return this.freqAssigned.selectedTp.downlink_cf;
    // },
    frqUpA() {
      return this.freqAssigned.selectedTp.uplink_cf;
    },
    frqUpB() {
      return this.freqAssigned.selectedTp.uplink_cf;
    },
  },
  methods: {
    updateDownFrq() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      this.$emit('updateFrq', {
        frqDnA: this.frqDnA,
        frqDnB: this.frqDnB,
        frqUpA: this.frqUpA,
        frqUpB: this.frqUpB,
      })
    },
  },
  watch: {
    // updateFreq() {
    // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
    'freqAssigned' (newVal, oldVal) {
      this.frqDnA = newVal.frqDnA;
      this.frqDnB = newVal.frqDnB;
      this.$emit('updateFrq', {
        frqUpA: this.frqUpA,
        frqUpB: this.frqUpB,
        frqDnA: this.frqDnA,
        frqDnB: this.frqDnB,
      })
    },
  }
}
</script>
