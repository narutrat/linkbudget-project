<template>
  <div class="col-sm-2">
    <div class="row" style="margin-top:10px">{{rainUp}}</div>
    <div class="row" style="margin-top:24px">{{rainDown}}</div>
    <!-- <div class="row" style="margin-top:8px">____</div> -->
    <div class="row" style="margin-top:15px">{{sfdAtten}}</div>
    <div class="row">{{allowFluxDen}}</div>
    <div class="row">{{hpaMax.toFixed(2)}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth" class="form-control" style="text-align:center; margin-top:5px; margin-bottom:5px" @input="hpaUpdate">
    </div>
    <!-- <div class="row" style="text-align:center">
      <input v-model="pwrVal" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="text-align:center">
      <button v-on:click="goalseekHPA">Calculate by Power Utilization</button>

    </div>
    <div class="row">
      {{pwrUtil}}
    </div> -->
    <!-- {{this.adjustableParam.hpaPowerBoth}} -->
  </div>
</template>

<script>
import {rainAtten, gasAtten, cloudAtten, scinAtten} from '../../utils/atmospheric.js'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['adjustableParam'],
  data() {
    return {
      // sfdAtten: '',
      // sfdMaxA: '',
      // allowFluxDen: '',
      // hpaMax: '',
      hpaPowerBoth: 0,
      rainUp: '',
      rainDown: '',
      pwrVal: '',
      // pwrUtil: '',
      a: '',
      goalseek: false,
      // upFadePercent: ''
    }
  },
  // created() {
  //
  //     this.$http.get('satellites').then(response => {
  //       this.rain = response.body.rainUp;
  //       console.log(response);
  //     }).catch((e) => {
  //       console.log(e);
  //     })
  // },
  computed: {
    // gasCal() {
    //   return gasAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngleUp);
    // },
    // cloudCal() {
    //   return cloudAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngleUp);
    // },
    // scinCal() {
    //   return scinAtten(+this.adjustableParam.frqUp, this.adjustableParam.elAngleUp, this.adjustableParam.antSizeUp, this.adjustableParam.upFadePercent);
    // },
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
    },
    pwrUtil() {
      return (Math.pow(10, (this.adjustableParam.opFluxDen - (this.adjustableParam.allowFluxDen + (10 * Math.log10(this.adjustableParam.percentAllowBw / 100)))) / 10)) * 100;
    },
  },
  methods: {
    hpaUpdate() {

      this.$emit('updateAdjustableParamData', {
        sfdAtten: this.sfdAtten,
        allowFluxDen: this.allowFluxDen,
        hpaPowerBoth: this.hpaPowerBoth,
        hpaMax: this.hpaMax,
        rainUp: this.rainUp,
        rainDown: this.rainDown,

      });
      // this.allowBW= newVal.allowBWVal;
    },
    goalseekHPA() {
      // this.hpaPowerBoth = 10;
      // this.$emit('updateHPA', {
      //   hpaPowerBoth: this.hpaPowerBoth,
      // this.hpaPowerBoth = parseFloat(this.hpaPowerBoth) + 1;

      // for (var i = 0; i < 1; i++) {
      //   this.hpaPowerBoth = parseFloat(this.hpaPowerBoth) + 1;
      //   console.log('pwrUtil ' + this.pwrUtil);
      // }

        // while (this.pwrUtil <= this.pwrVal - 0.001) {
        //   this.hpaPowerBoth = parseFloat(this.hpaPowerBoth) + 1;
        // while (this.pwrUtil <= this.powerUVal - 0.00001) {
        //   this.hpaPowerBoth = this.hpaPowerBoth + 0.00001;
        // }
        // while (this.pwrUtil <= this.powerUVal - 0.0000001) {
        //   this.hpaPowerBoth = this.hpaPowerBoth + 0.0000001;
        // }
      // this.$emit('updateAdjustableParamData', {
      //   sfdAtten: this.sfdAtten,
      //   allowFluxDen: this.allowFluxDen,
      //   hpaPowerBoth: this.hpaPowerBoth,
      //   hpaMax: this.hpaMax
      //
      // });
      // console.log('pwrUtil2 ' + this.pwrUtil);
      this.goalseek = true;
      console.log('setting goal seek = true')
      this.increasePower();
    // }
    },
    increasePower() {
      this.hpaPowerBoth =  parseFloat(this.hpaPowerBoth) + 1;
      console.log('increasing power by 1, now HPa power both = ' + this.hpaPowerBoth);

    }
  },
  watch: {
    'hpaPowerBoth'(newVal) {
      this.$emit('updateAdjustableParamData', {
        sfdAtten: this.sfdAtten,
        allowFluxDen: this.allowFluxDen,
        hpaPowerBoth: this.hpaPowerBoth,
        hpaMax: this.hpaMax,
        rainUp: this.rainUp,
        rainDown: this.rainDown,
      });
      // if (this.goalseek) {
      //   if(this.pwrUtil <= this.pwrVal - 0.001) {
      //     console.log('Power util = ' + this.pwrUtil + ' and power val = ' + this.pwrVal)
      //     console.log('need to increase more power');
      //     this.increasePower();
      //   } else {
      //     console.log('Power util = ' + this.pwrUtil + ' and power val = ' + this.pwrVal)
      //     console.log('no need to increase more power');
      //     this.goalseek = false
      //   }
      // }
    },
    'adjustableParam'(newVal, oldVal) {
      // this.hpaPowerBoth = newVal.hpaPowerBoth;
      this.pwrVal = newVal.pwrVal;
      // this.pwrUtil = newVal.pwrUtil;
      // this.upFadePercent = newVal.upFadePercent;
      this.$emit('updateAdjustableParamData', {
        sfdAtten: this.sfdAtten,
        allowFluxDen: this.allowFluxDen,
        hpaPowerBoth: this.hpaPowerBoth,
        hpaMax: this.hpaMax,
        rainUp: this.rainUp,
        rainDown: this.rainDown,
      });
      // Calculate the aysnc rain fade (Uplink)
      if (this.adjustableParam.latSelUp && this.adjustableParam.longSelUp && this.adjustableParam.frqUp && this.adjustableParam.upFadePercent) {
        rainAtten({
            lat: this.adjustableParam.latSelUp,
            lon: this.adjustableParam.longSelUp
          }, +this.adjustableParam.frqUp, this.adjustableParam.orbitalSlotSel, this.adjustableParam.upPol, this.adjustableParam.upFadePercent).then(response => {
            this.rainUp = response.toFixed(4)
          }).catch(e => {
            console.log(e);
          })
      } else {
        return 0;
      }

      // Calculate the aysnc rain fade (Downlink)
      if (this.adjustableParam.latSelDn && this.adjustableParam.longSelDn && this.adjustableParam.frqDn && this.adjustableParam.dnFadePercent) {
        rainAtten({
            lat: this.adjustableParam.latSelDn,
            lon: this.adjustableParam.longSelDn
          }, +this.adjustableParam.frqDn, this.adjustableParam.orbitalSlotSel, this.adjustableParam.dnPol, this.adjustableParam.dnFadePercent).then(response => {
            this.rainDown = response.toFixed(4)
          }).catch(e => {
            console.log(e);
          })
      } else {
        return 0;
      }
    },

    goalseekHPA: {
        'adjustableParam'(newVal, oldVal) {
        console.log('pwrUtil3 ' + this.pwrUtil);
      }
    },
  },
}
</script>
