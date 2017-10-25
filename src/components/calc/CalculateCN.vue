<template>
<div>
  <div class="col-sm-2" style="text-align:center">
    <div class="row">{{ciUpTotal}}</div>
    <div class="row">{{cnUp.toFixed(4)}}</div>
    <div class="row">{{cnDn.toFixed(4)}}</div>
    <div class="row">{{interMod}}</div>
    <div class="row" style="margin-top:15px">{{ciCoch}}</div>
    <div class="row" style="margin-top:10px">{{ciAdj.toFixed(4)}}</div>
    <div class="row">{{cnTotal.toFixed(4)}}</div>
    <div class="row">{{ebno.toFixed(4)}}</div>
    <div class="row">{{margin.toFixed(4)}}</div>
  </div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['calculateCN'],
  data() {
    return {

    }
  },
  computed: {
    ciUpTotal() {
      return this.calculateCN.ciUpTotal;
    },
    cnUp() {
      if (this.calculateCN.cnUp) {
        return this.calculateCN.cnUp;
      } else {
        return 0;
      }
    },
    cnDn() {
      if (this.calculateCN.cnDn) {
        return this.calculateCN.cnDn;
      } else {
        return 0;
      }
    },
    interMod() {
      return this.calculateCN.interMod;
    },
    ciCoch() {
      return this.calculateCN.ciCoch;
    },
    ciAdj() {
      if (this.calculateCN.ciAdj) {
        return this.calculateCN.ciAdj;
      } else {
        return 0;
      }
    },
    cnTotal() {
      if (this.calculateCN.cnDn) {
        return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal / 10) + 1 / Math.pow(10, this.cnUp / 10) +
          1 / Math.pow(10, this.cnDn / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch / 10) + 1 / Math.pow(10, this.ciAdj / 10)));
      } else {
        return 0;
      }
    },
    ebno() {
      if (this.cnTotal) {
        return this.cnTotal - (10 * Math.log10(this.calculateCN.infoValue * 1000)) + (10 * Math.log10(this.calculateCN.bandwidth * 1000));
      } else {
        return 0;
      }
    },
    margin() {
      if (this.ebno) {
        return parseFloat(this.ebno) - parseFloat(this.calculateCN.ebNoThreshold);
      } else {
        return 0;
      }
    },
  },
  watch: {
    'calculateCN'(newVal, oldVal) {
      this.$emit('updateCalculateCN', {
        cnTotal: this.cnTotal
      });
    }
  },
}
</script>
