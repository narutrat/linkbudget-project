<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{boltzman.toFixed(2)}}</div>
    <div class="row">{{noiseBW.toFixed(2)}}</div>
    <div class="row">{{cnUpClear.toFixed(2)}}</div>
    <div class="row">{{cnUpUpfade.toFixed(2)}}</div>
    <div class="row">{{opFluxDenUpfade.toFixed(2)}}</div>
    <div class="row">{{eirpUpfade.toFixed(2)}}</div>
    <div class="row">{{cnBothfade.toFixed(2)}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['uplinkNoise'],
  data() {
    return {
      boltzman: -228.6,
      // noiseBW: '',
      // cnUpClear: '',
      // cnUpUpfade: '',
      // opFluxDenUpfade: '',
      // eirpUpfade: '',
      // noisePwrDnfade: -147.412574
    }
  },
  computed: {
    noiseBW() {
      return 10 * Math.log10(this.uplinkNoise.bandwidth * 1000);
    },
    cnUpClear() {
      return parseFloat(this.uplinkNoise.opFluxDen) - parseFloat(this.uplinkNoise.gainSqrM) + parseFloat(this.uplinkNoise.gtSel) - parseFloat(this.boltzman) - parseFloat(this.noiseBW);
    },
    cnUpUpfade() {
      return this.cnUpClear - 2.07174802169227;
    },
    opFluxDenUpfade() {
      return this.uplinkNoise.eirpUpVal - this.uplinkNoise.spreadLoss - 2.07174802169227;
    },
    eirpUpfade() {
      return parseFloat(this.uplinkNoise.eirpDn) - (parseFloat(this.uplinkNoise.sfdAtten) - (this.opFluxDenUpfade)) + 1;
    },
    cnBothfade() {
      return this.uplinkNoise.receivePwrClear - 2.07174802169227 - 0.293214851232992 - this.uplinkNoise.noisePwrDnfade;
    },
  },
  watch: {
    'uplinkNoise'(newVal, oldVal) {
      this.$emit('updateUplinkNoise', {
        boltzman: this.boltzman,
        noiseBW: this.noiseBW,
        cnUpClear: this.cnUpClear,
        cnUpUpfade: this.cnUpUpfade,
        opFluxDenUpfade: this.opFluxDenUpfade,
        eirpUpfade: this.eirpUpfade,
        cnBothfade: this.cnBothfade,
      });
    }
  },
}
</script>
