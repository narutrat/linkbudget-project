<template>
    <div class="col-sm-2" style="text-align:center">
      <div class="row">{{hpaBackoff}}</div>
      <!-- <div class="row">3 {{this.bandwidthData.selectedBwSel}}</div> -->
      <div class="row" style="margin-top:5px">
        <!-- <input v-model="this.bandwidthData.bandwidthVal" class="form-control" style="text-align:center"> -->
        <input class="form-control" style="text-align:center" v-model="bandwidth" @input="updateBandwidth">

      </div>
      <div class="row">
        <input v-model="guardBandVal" class="form-control" style="text-align:center" @input="updateBandwidth">
      </div>
      <div class="row" style="margin-top:5px">{{allowBw}}</div>
      <div class="row">{{aggHpaBoo}}</div>
      <div class="row">{{numMCPC}}</div>
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
      guardBandVal: 0,
      numMCPC: 1,
      aggHpaBoo: 3,
      bandwidth: 0

    }
  },
  computed: {
    allowBw() {
      return parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
    },
    hpaBackoff() {
      return (-10 * Math.log10(this.bandwidthData.hpaPowerBoth / this.bandwidthData.hpaMax)).toFixed(0);
    },
  },
  methods: {
    updateBandwidth() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      this.$emit('updateBW', {
        bandwidth: this.bandwidth,
        allowBW: this.allowBw,
        numMCPC: this.numMCPC,
        aggHpaBoo: this.aggHpaBoo
      })
    },

  },
  watch: {
    'bandwidthData'(newVal, oldVal) {
      this.bandwidth = newVal.bandwidthVal;
      this.$emit('updateBW', {
        bandwidth: this.bandwidth,
        allowBW: this.allowBw,
        numMCPC: this.numMCPC,
        aggHpaBoo: this.aggHpaBoo
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },

}
</script>
