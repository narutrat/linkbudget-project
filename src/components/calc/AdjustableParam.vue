<template>
  <div class="col-sm-2">
    <div class="row" style="margin-top:15px">xxx</div>
    <div class="row" style="margin-top:25px">xxx</div>
    <!-- <div class="row" style="margin-top:8px">____</div> -->
    <div class="row" style="margin-top:8px">{{sfdAtten}}</div>
    <div class="row">{{allowFluxDen}}</div>
    <div class="row">{{hpaMax.toFixed(2)}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth" class="form-control" style="text-align:center; margin-top:5px; margin-bottom:5px">
    </div>
  </div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['adjustableParam'],
  data() {
    return {
      // sfdAtten: '',
      // sfdMaxA: '',
      // allowFluxDen: '',
      // hpaMax: '',
      hpaPowerBoth: 100,
    }
  },
  computed: {
    sfdAtten() {
      // return parseFloat(this.adjustableParam.sfdMaxA) - parseFloat(this.adjustableParam.selectedSatellite.maxAtten) - parseFloat(this.adjustableParam.selectedTp.defaultAtten);
      if (this.adjustableParam.selectedSatellite && this.adjustableParam.selectedTp) {
        return this.adjustableParam.sfdMax - (parseFloat(this.adjustableParam.selectedSatellite.maxAtten) - this.adjustableParam.selectedTp.defaultAtten);
      } else {
        return 0 ;
      }
    },
    allowFluxDen() {
      if (this.adjustableParam.selectedSatellite && this.adjustableParam.selectedTp) {
        return this.sfdAtten - this.adjustableParam.aggIbo;
      } else {
        return 0 ;
      }
    },
    hpaMax() {
      return Math.pow(10, (10 * (Math.log10(this.hpaPowerBoth * this.adjustableParam.numMCPC)) + this.adjustableParam.aggHpaBoo) / 10);
    }
  },
  watch: {
    'adjustableParam'(newVal, oldVal) {

      this.$emit('updateAdjustableParamData', {
        sfdAtten: this.sfdAtten,
        allowFluxDen: this.allowFluxDen,
        hpaPowerBoth: this.hpaPowerBoth,
        hpaMax: this.hpaMax
        
        // % availability
        // rain

      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
