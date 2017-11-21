<template>
  <div>
    <div class="row" style="margin-top:4px">
      <input v-model="mod" class="form-control" style="text-align:center" @input="updateCarrier">
    </div>
    <div class="row">
      <input v-model="infoValue" class="form-control" style="text-align:center" @input="updateCarrier">
    </div>
    <div class="row">
      <input v-model="fec" class="form-control" style="text-align:center" @input="updateCarrier">
    </div>

    <div class="row" style="margin-top:10px">{{txRate.toFixed(2)}}</div>

    <div class="row" style="margin-top:5px">
      <input v-model="bt" class="form-control" style="text-align:center" @input="updateCarrier">
    </div>
    <div class="row">
      <input v-model="ebNo" class="form-control" style="text-align:center" @input="updateCarrier">
    </div>
    <div class="row" style="margin-top:8px">{{symbolRate.toFixed(2)}}</div>
    <div class="row" style="margin-top:5px">{{this.carrierInfo.bandwidth}}</div>
  </div>
</template>

<script>
export default {
  props: ['carrierInfo'],
  data() {
    return {
      mod: '',
      // infoValue: '',
      fec: '',
      bt: '',
    }
  },
  computed: {
    txRate() {
      return this.infoValue / this.fec;
    },
    infoValue() {
      if (this.carrierInfo.bandwidth) {
      if (this.carrierInfo.selectedBwSel === 'Information Rate') {
        var infoCal = this.carrierInfo.bandwidth;
        return infoCal;
      } else {
        var infoCal = (this.carrierInfo.bandwidth * this.fec) / this.bt * this.mod;
        return infoCal;
      }
    } else {
      return 0;
    }
    },
    symbolRate() {
      return this.carrierInfo.bandwidth/ this.bt;
    },
    ebNo() {
      return (this.carrierInfo.selectedModCode.es_no) - (10 * Math.log10(this.fec)*this.mod);
    }
  },
  methods: {
    updateCarrier() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      this.$emit('updateCarrierInfo', {
        mod: this.mod,
        infoValue: this.infoValue,
        fec: this.fec,
        txRate: this.txRate,
        bt: this.bt,
        ebNo: this.ebNo,
        symbolRate: this.symbolRate,
      })
    },

  },
  watch: {
    'carrierInfo'(newVal, oldVal) {
      this.mod = newVal.mod;
      this.fec = newVal.fec;
      this.bt = newVal.bt;
      // this.infoValue = newVal.infoValue;
      this.$emit('updateCarrierInfo', {
        mod: this.mod,
        infoValue: this.infoValue,
        fec: this.fec,
        txRate: this.txRate,
        bt: this.bt,
        ebNo: this.ebNo,
        symbolRate: this.symbolRate,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },

}
</script>
