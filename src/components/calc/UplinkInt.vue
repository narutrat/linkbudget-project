<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{topo}}</div>
    <div class="row">
      <input v-model="ulPden" class="form-control" style="text-align:center" @input="updateUp">
    </div>
    <div class="row">
      <input v-model="esInTcGt" class="form-control" style="text-align:center; margin-top:7px" @input="updateUp">
    </div>
    <div class="row">
      <input v-model="polImp" class="form-control" style="text-align:center; margin-top:7px" @input="updateUp">
    </div>
    <div class="row">
      <input v-model="ulSidelobe" class="form-control" style="text-align:center; margin-top:12px" @input="updateUp">
    </div>
    <div class="row" style="margin-top:8px">{{ciUp.toFixed(4)}}</div>
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
      topo: '',
      // topo2: '',
      ulPden: '',
      // ulPden2: '',
      esInTcGt: '',
      // esInTcGt2: '',
      // polImp: 5,
      polImp: '',
      // ulSidelobe: 0,
      ulSidelobe: '',
      // ciUp1_A: '',
      ciUp2_A: '',
      ciUpTotal_A: ''
    }
  },
  computed: {
    // topo() {
    //   // return (Math.abs(this.adjSlot1 - this.selectedSatellite.orbital_slot) - 0.15) * 1.1;
    //   // return (Math.abs(76.5 - this.uplinkInt.selectedSatellite.orbital_slot) - 0.15) * 1.1;
    //   return this.uplinkInt.topo;
    // },
    // ulPden() {
    //   // var vm = this;
    //   // let result = [];
    //   // result = this.adjSatDatabase.find(function(x) {
    //   //   return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
    //   // });
    //   // if (result) {
    //   //   return result.uplinkPdens;
    //   // }
    //   return this.uplinkInt.ulPden;
    // },
    // esInTcGt() {
    //   // var vm = this;
    //   // let result = [];
    //   // result = this.adjSatDatabase.find(function(x) {
    //   //   return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
    //   // });
    //   // if (result) {
    //   //   return result.esInTcGt;
    //   // }
    //   return this.uplinkInt.esInTcGt;
    // },
    ciUp() {
      return parseFloat(this.uplinkInt.powerDen) + parseFloat(this.uplinkInt.antGainVal) + parseFloat(this.uplinkInt.gtSel) - (parseFloat(this.ulPden) +
      29 - (25 * Math.log10(parseFloat(this.topo))) + parseFloat(this.esInTcGt)) + parseFloat(this.polImp) +parseFloat(this.ulSidelobe);
    },
  },
  methods: {
    updateUp() {
      this.$emit('updateUplinkInt', {
        topo: this.topo,
        ciUp: this.ciUp,
        ulPden: this.ulPden,
        esInTcGt: this.esInTcGt,
        polImp: this.polImp,
        ulSidelobe: this.ulSidelobe,

      });
    },
  },
  watch: {
    'uplinkInt'(newVal, oldVal) {
      this.topo = newVal.topo;
      this.ulPden = newVal.ulPden;
      this.esInTcGt = newVal.esInTcGt;
      this.polImp = newVal.polImp;
      this.ulSidelobe = newVal.ulSidelobe;

      this.$emit('updateUplinkInt', {
        topo: this.topo,
        ciUp: this.ciUp,
        ulPden: this.ulPden,
        esInTcGt: this.esInTcGt,
        polImp: this.polImp,
        ulSidelobe: this.ulSidelobe,

      });
    }
  },
}
</script>
