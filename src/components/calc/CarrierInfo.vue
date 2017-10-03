<template>
  <div>
    <div class="row" style="margin-top:5px">
      <input v-model="this.carrierInfo.selectedModCode.modCodeValue" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="infoValue" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="this.carrierInfo.selectedModCode.fec" class="form-control" style="text-align:center">
    </div>

    <div class="row" style="margin-top:10px">{{txRate.toFixed(2)}}</div>

    <div class="row" style="margin-top:5px">
      <input v-model="this.carrierInfo.selectedModCode.bt" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="this.carrierInfo.selectedModCode.ebNo" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="margin-top:10px">{{symbolRate.toFixed(2)}}</div>
    <div class="row" style="margin-top:5px">{{this.carrierInfo.bandwidthVal}}</div>
  </div>
</template>

<script>
export default {
  props: ['carrierInfo'],
  data() {
    return {
      modCodeValue: '',
      // infoValue: '',
      fecValue: '',
      // txRate: '',
      bt: '',
      ebNo: '',
      // symbolRate: '',
      bwCal: ''

    }
  },
  computed: {
    txRate() {
      return this.infoValue / this.carrierInfo.selectedModCode.fec;
    },
    infoValue() {
      if (this.carrierInfo.selectedBwSel === 'Information Rate') {
        var infoCal = this.carrierInfo.bandwidthVal;
        return infoCal;
      } else {
        infoCal = (this.carrierInfo.bandwidthVal * this.carrierInfo.selectedModCode.fec) / this.carrierInfo.selectedModCode.bt * this.carrierInfo.selectedModCode.modCodeValue;
        return infoCal;
      }
    },
    symbolRate() {
      return this.carrierInfo.bandwidthVal/ this.carrierInfo.selectedModCode.bt;
    }
  },
  watch: {
    'carrierInfo'(newVal, oldVal) {
      this.$emit('updateCarrierInfo', {
        modCodeValue: this.carrierInfo.selectedModCode.modCodeValue,
        infoValue: this.infoValue,
        fec: this.carrierInfo.selectedModCode.fec,
        txRate: this.carrierInfo.selectedModCode.bt,
        bt: this.txRate,
        ebNo: this.carrierInfo.selectedModCode.ebNo,
        symbolRate: this.symbolRate,
        bandwidthVal: this.bandwidthVal,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },

}
</script>
