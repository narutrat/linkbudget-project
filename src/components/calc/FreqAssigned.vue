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
      <input v-model="frqDn_A" class="form-control" style="text-align:center">
    </div>
  </div>


  <div class="col-sm-2" style="margin-top:5px">
    <div class="row">{{frqUp_B}}</div>
    <div class="row">
      <input v-model="frqDn_B" class="form-control" style="text-align:center">
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

    }
  },
  computed: {
    frqDn_A() {
      return this.freqAssigned.selectedTp.downlink_cf;
    },
    frqDn_B() {
      return this.freqAssigned.selectedTp.downlink_cf;
    },
    frqUp_A() {
      if (this.freqAssigned.selectedBeam === "Standard C") {
        return (parseFloat(this.freqAssigned.selectedTp.downlink_cf) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.freqAssigned.selectedTp.downlink_cf) + 3.025).toFixed(3);
      }
    },
    frqUp_B() {
      if (this.freqAssigned.selectedBeam === "Standard C") {
        return (parseFloat(this.freqAssigned.selectedTp.downlink_cf) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.freqAssigned.selectedTp.downlink_cf) + 3.025).toFixed(3);
      }
    },
  },
  methods: {
    // updateDownFrq() {
    //   // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
    //   this.$emit('updateFrq', {
    //     frqDn_A: this.frqDn_A,
    //     frqDn_B: this.frqDn_B,
    //   })
    // },
  },
  watch: {
    // updateFreq() {
    // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
    'freqAssigned' (newVal, oldVal) {
      // this.frqDn_A = newVal.frqDn_A;
      // this.frqDn_B = newVal.frqDn_B;
      this.$emit('updateFrq', {
        frqUpA: this.frqUp_A,
        frqUpB: this.frqUp_B,
        frqDnA: this.frqDn_A,
        frqDnB: this.frqDn_B,
      })
    },
  }
}
</script>
