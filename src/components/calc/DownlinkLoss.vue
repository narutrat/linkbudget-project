<template>
<div>
  <div class="col-sm-2" style="text-align:center">
    <div class="row">{{eirpDnClear.toFixed(4)}}</div>
    <div class="row">{{pathLoss.toFixed(4)}}</div>
    <!-- <div class="row">
      <input v-model="atmosDownlinkLoss" class="form-control" style="text-align:center">
    </div> -->
    <div class="row">{{atmosDownlinkLoss}}</div>
    <div class="row" style="margin-top:12px">{{pathLossAtmos.toFixed(4)}}</div>
    <div class="row" style="margin-top:12px">{{receivePwrClear.toFixed(4)}}</div>
    <div class="row">{{eirpDnDenClear.toFixed(4)}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['downlinkLoss'],
  data() {
    return {
      // eirpDnClear: 0,
      // pathLoss: '',
      // atmosDownlinkLoss: '',
      // pathLossAtmos: '',
      // receivePwrClear: '',
      // eirpDnDenClear: ''
    }
  },
  computed: {
    eirpDnClear() {
      // return this.downlinkLoss.oboCal_A - this.downlinkLoss.eirpDn;
      return this.downlinkLoss.eirpDn - this.downlinkLoss.obocal;
    },
    pathLoss() {
      return 20 * (Math.log10(4 * Math.PI * this.downlinkLoss.frqDn * 1000000000 * this.downlinkLoss.slantRange * 1000 / this.downlinkLoss.celeritas));
    },
    atmosDownlinkLoss(){
      return this.downlinkLoss.atmos;
    },
    pathLossAtmos() {
      return (20 * (Math.log10(4 * Math.PI * this.downlinkLoss.frqDn * 1000000000 * this.downlinkLoss.slantRange * 1000 / this.downlinkLoss.celeritas))) + parseFloat(this.atmosDownlinkLoss);
    },
    receivePwrClear() {
      return parseFloat(this.eirpDnClear) - parseFloat(this.pathLossAtmos) + parseFloat(this.downlinkLoss.antGainReceive) - parseFloat(this.downlinkLoss.totalLossDn);
    },
    eirpDnDenClear() {
      return this.eirpDnClear - (10 * Math.log10(this.downlinkLoss.bandwidth * 1000));
    },
  },
  watch: {
    'downlinkLoss'(newVal, oldVal) {
      this.$emit('updateDownlinkLoss', {
        eirpDnClear: this.eirpDnClear,
        pathLoss: this.pathLoss,
        atmos: this.atmosDownlinkLoss,
        pathLossAtmos: this.pathLossAtmos,
        receivePwrClear: this.receivePwrClear,
        eirpDnDenClear: this.eirpDnDenClear,
      });
    }
  },
}
</script>
