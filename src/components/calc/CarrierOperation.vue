<template>
  <div>
  <div class="col-sm-2" style="text-align:center; margin-top:10px">
    <div class="row">{{allowIboClear.toFixed(2)}}</div>
    <div class="row">{{iboCal.toFixed(2)}}</div>
    <div class="row">{{oboCal.toFixed(2)}}</div>
    <div class="row">{{tpGain.toFixed(2)}}</div>
  </div>

  <div class="col-sm-2" style="text-align:center; margin-top:10px">
    <div class="row">{{allowIboClear.toFixed(2)}}</div>
    <div class="row">{{iboUpfade.toFixed(2)}}</div>
    <div class="row">{{oboUpfade.toFixed(2)}}</div>
    <div class="row">{{tpGain.toFixed(2)}}</div>
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
      return this.carrierOperation.aggIbo - (10 * Math.log10(this.carrierOperation.allowBW / (this.carrierOperation.selectedTp.tpBW * 1000)));
    },
    iboCal() {
      return this.carrierOperation.sfdAtten - this.carrierOperation.opFluxDen;
    },
    oboCal() {
      return this.carrierOperation.eirpDn - (this.carrierOperation.opFluxDen + this.tpGain);
    },
    tpGain() {
      return parseFloat(this.carrierOperation.eirpDn) - 4.2 - (parseFloat(this.carrierOperation.sfdMax) - 5.2 - (parseFloat(this.carrierOperation.selectedSatellite.maxAtten) - parseFloat(this.carrierOperation.selectedTp.defaultAtten)));
    },
    iboUpfade() {
      return this.iboCal + 2.07174802169227;
    },
    oboUpfade() {
      return this.carrierOperation.eirpDn - (this.carrierOperation.opFluxDenUpfade + this.tpGain);
    },
  },
  watch: {
    'carrierOperation'(newVal, oldVal) {

      this.$emit('updateCarrierOperationData', {
        allowIboClear: this.allowIboClear,
        iboCal: this.iboCal,
        oboCal: this.oboCal,
        tpGain: this.tpGain,
        iboUpfade: this.iboUpfade,
        oboUpfade: this.oboUpfade
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
