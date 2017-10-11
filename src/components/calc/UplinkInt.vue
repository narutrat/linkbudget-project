<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{topo}}</div>
    <div class="row">
      <input v-model="this.uplinkInt.ulPden" class="form-control">
    </div>
    <div class="row">
      <input v-model="this.uplinkInt.esInTcGt" class="form-control">
    </div>
    <div class="row">
      <input v-model="this.uplinkInt.polImp" class="form-control">
    </div>
    <div class="row">
      <input v-model="this.uplinkInt.ulSidelobe" class="form-control">
    </div>
    <div class="row">{{ciUp.toFixed(4)}}</div>
  </div>
  <!-- <div class="col-sm-2">
    <div class="row">1{{topo2}}</div>
    <div class="row">
      <input v-model="ulPden2" class="form-control">
    </div>
    <div class="row">
      <input v-model="esInTcGt2" class="form-control">
    </div>
    <div class="row">
      <input v-model="polImp2" class="form-control">
    </div>
    <div class="row">
      <input v-model="ulSidelobe2" class="form-control">
    </div>
    <div class="row">6{{ciUp2_A}}</div>
  </div> -->
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  props: ['uplinkInt'],
  data() {
    return {
      topo1: '',
      topo2: '',
      ulPden1: '',
      ulPden2: '',
      esInTcGt1: '',
      esInTcGt2: '',
      // polImp: 5,
      polImp2: '',
      // ulSidelobe: 0,
      ulSidelobe2: '',
      // ciUp1_A: '',
      ciUp2_A: '',
      ciUpTotal_A: ''
    }
  },
  computed: {
    topo() {
      // return (Math.abs(this.adjSlot1 - this.selectedSatellite.orbital_slot) - 0.15) * 1.1;
      // return (Math.abs(76.5 - this.uplinkInt.selectedSatellite.orbital_slot) - 0.15) * 1.1;
      return this.uplinkInt.topo;
    },
    ulPden() {
      // var vm = this;
      // let result = [];
      // result = this.adjSatDatabase.find(function(x) {
      //   return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      // });
      // if (result) {
      //   return result.uplinkPdens;
      // }
      return this.uplinkInt.ulPden;
    },
    esInTcGt() {
      // var vm = this;
      // let result = [];
      // result = this.adjSatDatabase.find(function(x) {
      //   return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      // });
      // if (result) {
      //   return result.esInTcGt;
      // }
      return this.uplinkInt.esInTcGt;
    },
    ciUp() {
      return parseFloat(this.uplinkInt.powerDen) + parseFloat(this.uplinkInt.antGainVal) + parseFloat(this.uplinkInt.gtSel) - (parseFloat(this.ulPden) +
      29 - (25 * Math.log10(parseFloat(this.topo))) + parseFloat(this.esInTcGt)) + parseFloat(this.uplinkInt.polImp) +parseFloat(this.uplinkInt.ulSidelobe);
    },
  },
  watch: {
    'uplinkInt'(newVal, oldVal) {
      this.$emit('updateUplinkInt', {
        ciUp: this.ciUp,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
