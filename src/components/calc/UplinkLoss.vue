<template>
<div>
  <div class="col-sm-2" style="text-align:center">
    <div class="row">{{eirpUpVal.toFixed(4)}}</div>
    <div class="row">{{powerDen.toFixed(4)}}</div>
    <div class="row">
      <input v-model="atmos" class="form-control" style="text-align:center" @input="updateUplink">
    </div>
    <div class="row">{{spreadLoss.toFixed(4)}}</div>
    <div class="row">{{opFluxDen.toFixed(4)}}</div>
    <div class="row" style="margin-bottom:70px">{{gainSqrM.toFixed(4)}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['uplinkLoss'],
  data() {
    return {
      // eirpUpVal: '',
      // powerDen: '',
      atmos: '',
      // spreadLoss: '',
      // opFluxDen: '',
      // gainSqrM: ''
    }
  },
  computed: {
    eirpUpVal() {
      return this.uplinkLoss.antGainVal + (10 * Math.log10(this.uplinkLoss.hpaPowerBoth)) - this.uplinkLoss.totalLossUp;
    },
    powerDen() {
      return this.eirpUpVal - this.uplinkLoss.antGainVal - (10 * Math.log10(this.uplinkLoss.bandwidth * 1000));
    },
    spreadLoss() {
      return parseFloat(this.atmos) + (10 * Math.log10(4 * Math.PI * Math.pow(this.uplinkLoss.slantRange * 1000, 2)));
    },
    opFluxDen() {
      return this.eirpUpVal - this.spreadLoss;
    },
    gainSqrM() {
      return 10 * Math.log10(4 * Math.PI * (Math.pow(((this.uplinkLoss.frqUp * 1000000000) / this.uplinkLoss.celeritas), 2)));
    },
  },
  methods: {
    updateUplink() {
      this.$emit('updateUplinkLoss', {
        eirpUpVal: this.eirpUpVal,
        powerDen: this.powerDen,
        atmos: this.atmos,
        spreadLoss: this.spreadLoss,
        opFluxDen: this.opFluxDen,
        gainSqrM: this.gainSqrM,
      });
    },
  },
  watch: {
    'uplinkLoss'(newVal, oldVal) {
      this.atmos = newVal.atmos;
      this.$emit('updateUplinkLoss', {
        eirpUpVal: this.eirpUpVal,
        powerDen: this.powerDen,
        atmos: this.atmos,
        spreadLoss: this.spreadLoss,
        opFluxDen: this.opFluxDen,
        gainSqrM: this.gainSqrM,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
