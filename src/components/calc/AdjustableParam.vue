<template>
  <div class="col-sm-2">
    <div class="row" style="margin-top:10px">{{rainValue}}</div>
    <div class="row" style="margin-top:24px">xxx</div>
    <!-- <div class="row" style="margin-top:8px">____</div> -->
    <div class="row" style="margin-top:15px">{{sfdAtten}}</div>
    <div class="row">{{allowFluxDen}}</div>
    <div class="row">{{hpaMax.toFixed(2)}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth" class="form-control" style="text-align:center; margin-top:5px; margin-bottom:5px" @input="hpaUpdate">
    </div>
  </div>
</template>

<script>
import {rainAtten001, gasAtten, cloudAtten, scinAtten} from '../../utils/atmospheric.js'

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
      rainValue: '',
    }
  },
  // created() {
  //
  //     this.$http.get('satellites').then(response => {
  //       this.rain = response.body.rainValue;
  //       console.log(response);
  //     }).catch((e) => {
  //       console.log(e);
  //     })
  // },
  computed: {
    gasCal() {
      return gasAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngle);
    },
    cloudCal() {
      return cloudAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngle);
    },
    scinCal() {
      return scinAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngle, this.adjustableParam.antSize, this.adjustableParam.upFadePercent);
    },
    sfdAtten() {
      // return parseFloat(this.adjustableParam.sfdMaxA) - parseFloat(this.adjustableParam.selectedSatellite.maxAtten) - parseFloat(this.adjustableParam.selectedTp.defaultAtten);
      if (this.adjustableParam.selectedSatellite && this.adjustableParam.selectedTp) {
        return this.adjustableParam.sfdMax - (parseFloat(this.adjustableParam.selectedTp.atten_range) - this.adjustableParam.atten);
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
  methods: {
    hpaUpdate() {

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
  watch: {
    'adjustableParam'(newVal, oldVal) {
      // this.hpaPowerBoth = newVal.hpaPowerBothVal;
      this.$emit('updateAdjustableParamData', {
        sfdAtten: this.sfdAtten,
        allowFluxDen: this.allowFluxDen,
        hpaPowerBoth: this.hpaPowerBoth,
        hpaMax: this.hpaMax
      });
      // Calculate the aysnc rain fade
      if (this.adjustableParam.latSel && this.adjustableParam.longSel && this.adjustableParam.frqUp && this.adjustableParam.upFadePercent) {
        rainAtten001({
            lat: this.adjustableParam.latSel,
            lon: this.adjustableParam.longSel
          }, +this.adjustableParam.frqUp, this.adjustableParam.orbitalSlotSel, this.adjustableParam.upPol, this.adjustableParam.upFadePercent).then(response => {
            this.rainValue = response.toFixed(4)
          }).catch(e => {
            console.log(e);
          })
      } else {
        return 0;
      }
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
