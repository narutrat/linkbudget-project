<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{boltzman.toFixed(4)}}</div>
    <div class="row">{{increaseT.toFixed(4)}}</div>
    <div class="row">{{noiseBW.toFixed(4)}}</div>
    <div class="row">{{noisePwrClear.toFixed(4)}}</div>
    <div class="row">{{noisePwrDnfade.toFixed(4)}}</div>
    <div class="row">{{cnDnClear.toFixed(4)}}</div>
    <div class="row">{{cnDnfadeClear.toFixed(4)}}</div>
    <div class="row">{{noisePwrTotal.toFixed(4)}}</div>
    <!-- <div class="row">{{this.downlinkNoise.receivePwrClear}}</div> -->
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
      // noisePwrTotal: ''
    }
  },
  computed: {
    increaseT() {
      return 280 * (1 - Math.exp(-this.downlinkNoise.rain / 4.34));
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
      return this.downlinkNoise.receivePwrClear - this.noisePwrDnfade - this.downlinkNoise.rain;
    },
    noisePwrTotal() {
      if (this.downlinkNoise.cnTotal && this.downlinkNoise.receivePwrClear) {
        return -this.downlinkNoise.cnTotal + this.downlinkNoise.receivePwrClear;
      } else {
        return 0;
      }

    },
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
