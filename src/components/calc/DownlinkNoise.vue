<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{boltzman}}</div>
    <div class="row">{{increaseT.toFixed(2)}}</div>
    <div class="row">{{noiseBW}}</div>
    <div class="row">{{noisePwrClear}}</div>
    <div class="row">{{noisePwrDnfade}}</div>
    <div class="row">{{cnDnClear}}</div>
    <div class="row">{{cnDnfadeClear}}</div>
    <div class="row">-->{{noisePwrTotal}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['downlinkNoise'],
  data() {
    return {
      boltzman: -228.6,
      // increaseT: '',
      // noiseBW: '',
      // noisePwrClear: '',
      // noisePwrDnfade: '',
      // cnDnClear: '',
      // cnDnfadeClear: '',
      noisePwrTotal: ''
    }
  },
  computed: {
    increaseT() {
      return 280 * (1 - Math.exp(-0.293214851232992 / 4.34));
    },
    noiseBW() {
      return 10 * Math.log10(this.downlinkNoise.bandwidth * 1000);
    },
    noisePwrClear() {
      return this.boltzman + (10 * Math.log10(this.downlinkNoise.tsys) + this.noiseBW);
    },
    noisePwrDnfade() {
      return this.boltzman + (10 * Math.log10(this.downlinkNoise.tsys + this.increaseT) + this.noiseBW);
    },
    cnDnClear() {
      return this.downlinkNoise.receivePwrClear - this.noisePwrClear;
    },
    cnDnfadeClear() {
      return this.downlinkNoise.receivePwrClear - this.noisePwrDnfade - 0.293214851232992;
    },
    // noisePwrTotal() {
    //   return -this.downlinkNoise.cnTotalClear + this.downlinkNoise.receivePwrClear;
    // },
  },
  watch: {
    'downlinkNoise'(newVal, oldVal) {
      this.$emit('updateDownlinkNoise', {
        increaseT: this.increaseT,
        noisePwrClear: this.noisePwrClear,
        noisePwrDnfade: this.noisePwrDnfade,
        cnDnClear: this.cnDnClear,
        cnDnfadeClear: this.cnDnfadeClear,
        noisePwrTotal: this.noisePwrTotal,
      });
    }
  },
}
</script>
