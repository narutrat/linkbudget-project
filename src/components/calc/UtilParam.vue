<template>
<div>
  <div class="row">


    <div class="col-sm-4" style="text-align:left; margin-left:10px">
      <div class="row">Power Utilization</div>
      <div class="row">BW Utilization</div>
      <div class="row">Case</div>
    </div>
    <div class="col-sm-2" style="text-align:center; margin-left:-10px">
      <div class="row">{{pwrUtilA.toFixed(2)}}</div>
      <div class="row">{{bwUtilA}}</div>
      <div class="row">{{caseA}}</div>

    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">{{pwrUtilB.toFixed(2)}}</div>
      <div class="row">{{bwUtilB}}</div>
      <div class="row">{{caseB}}</div>

    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">{{pwrUtilTotal.toFixed(2)}}</div>
      <div class="row">{{bwUtilTotal}}</div>
      <div class="row">{{caseTotal}}</div>
    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">% (Max=100)</div>
      <div class="row">% (Max=100)</div>
    </div>
  </div>

  <div class="row">
    <!-- <div class="col-sm-4" style="text-align:center">
      <input v-model="pwrVal" class="form-control" style="text-align:center">
    </div> -->
    <!-- <div class="col-sm-8" style="text-align:center">
      <button v-on:click="goalseekHPA">Calculate by Power Utilization</button>

    </div> -->
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['utilParam'],
  data() {
    return {
      pwrVal: '',
      hpaPowerBoth: ''
    }
  },
  computed: {
    pwrUtilA() {
      return (Math.pow(10, (this.utilParam.opFluxDenA - (this.utilParam.allowFluxDenA + (10 * Math.log10(this.utilParam.percentAllowBwA / 100)))) / 10)) * 100;
    },
    pwrUtilB() {
      return (Math.pow(10, (this.utilParam.opFluxDenB - (this.utilParam.allowFluxDenB + (10 * Math.log10(this.utilParam.percentAllowBwB / 100)))) / 10)) * 100;
    },
    pwrUtilTotal() {
      return ((Math.pow(10, (-this.utilParam.iboCalA / 10))) + (Math.pow(10, (-this.utilParam.iboCalB / 10)))) / ((Math.pow(10, (-this.utilParam.allowIboClearA / 10))) + (Math.pow(10, (-this.utilParam.allowIboClearB / 10)))) * 100;
    },
    bwUtilA() {
      return (this.utilParam.allowBWA * 100) / (this.utilParam.selectedTp.bandwidth * 1000 * this.utilParam.percentAllowBwA / 100);
    },
    bwUtilB() {
      return (this.utilParam.allowBWB * 100) / (this.utilParam.selectedTp.bandwidth * 1000 * this.utilParam.percentAllowBwB / 100);
    },
    bwUtilTotal() {
      return (this.bwUtilA * this.utilParam.allowBWA + this.bwUtilB * this.utilParam.allowBWB) / (this.utilParam.allowBWA + this.utilParam.allowBWB);
    },

    caseA() {
      if (parseInt(100 / this.bwUtilA) > parseInt(100 / this.pwrUtilA)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    },
    caseB() {
      if (parseInt(100 / this.bwUtilB) > parseInt(100 / this.pwrUtilB)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    },
    caseTotal() {
      if (parseInt(100 / this.bwUtilTotal) > parseInt(100 / this.pwrUtilTotal)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    }


  },
  methods: {
    // goalseekHPA() {
    //   // this.hpaPowerBoth = 10;
    //   // this.$emit('updateHPA', {
    //   //   hpaPowerBoth: this.hpaPowerBoth,
    //   this.hpaPowerBoth = 10;
    //   this.$emit('updateHPA', {
    //     hpaPowerBoth: this.hpaPowerBoth,
    //
    //   });
      //   while (this.pwrUtilA <= this.powerUVal - 0.001) {
      //     this.hpaPowerBothA = this.hpaPowerBothA + 0.001;
      //   }
      //   while (this.pwrUtilA <= this.powerUVal - 0.00001) {
      //     this.hpaPowerBothA = this.hpaPowerBothA + 0.00001;
      //   }
      //   while (this.pwrUtilA <= this.powerUVal - 0.0000001) {
      //     this.hpaPowerBothA = this.hpaPowerBothA + 0.0000001;
      //   }
      //   return this.hpaPowerBothA;
      // console.log('Sending: ' + JSON.stringify(this.hpaPowerBothA))
      // this.$emit('updateHPA', this.hpaPowerBothA);
    // },
  },
  watch: {
    'utilParam' (newVal, oldVal) {
      // this.pwrVal = newVal.pwrVal;
      this.$emit('updateHPA', {
        // pwrVal: this.pwrVal,
        pwrUtilA: this.pwrUtilA,
        pwrUtilB: this.pwrUtilB,


      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
