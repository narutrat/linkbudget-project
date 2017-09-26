<template>
  <div>
  <div class="col-sm-2" style="text-align:center; margin-top:10px">
    <div class="row">allowIboClear</div>
    <div class="row">iboCal</div>
    <div class="row">oboCal</div>
    <div class="row">tpGain</div>
  </div>

  <div class="col-sm-2" style="text-align:center; margin-top:10px">
    <div class="row">allowIboClear</div>
    <div class="row">iboUpfade</div>
    <div class="row">oboUpfade</div>
    <div class="row">tpGain</div>
    <!-- <div class="row">{{this.carrierOperation.selectedTp.defaultAtten}}</div> -->
  </div>
  </div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['carrierOperation'],
  data() {
    return {
      selectedTp: '',
      guardBandVal: '',
    }
  },
  computed: {
    allowIboClear() {
      return this.aggIbo - (10 * Math.log10(this.allowBw / (this.satBW * 1000)));
    },
    iboCal() {
      return this.sfdAtten - this.opFluxDen;
    },
    oboCal() {
      return this.eirpdnSat - (this.opFluxDen + this.tpGain);
    },
    tpGain() {
      return parseFloat(this.eirpdnSat) - 4.2 - (parseFloat(this.sfdMax) - 5.2 - (parseFloat(this.maxAttenSel) - parseFloat(this.atten)));
    },
    iboUpfade() {
      return this.iboCal + 2.07174802169227;
    },
    oboUpfade() {
      return this.eirpdnSat - (this.opFluxDenUpfade + this.tpGain);
    },
  },
  watch: {
    'carrierOperation'(newVal, oldVal) {

      this.$emit('CarrierOperationSelected', {
        allowIboClear: this.allowIboClear
        // aggIbo: this.aggIbo,
        // aggObo: this.aggObo,
        // percentAllowBw_A: this.percentAllowBw_A,
        // percentAllowBw_B: this.percentAllowBw_B
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
