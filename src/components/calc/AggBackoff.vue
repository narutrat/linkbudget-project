<template>
<div style="margin-left:10px; padding:5px; margin-top:5px">
  <div class="col-sm-4" style="text-align:left">
    <div class="row">Aggregrate input Backoff</div>
    <div class="row">Aggregrate Output Backoff</div>
    <div class="row">Percent of Allocated BW/Tp. BW</div>
  </div>

  <div class="col-sm-2">
    <div class="row">{{this.aggBackoff.satIbo || '-'}}</div>
    <div class="row">{{this.aggBackoff.satObo || '-'}}</div>
    <div class="row">{{percentAllowBw_A.toFixed(4)}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row">dB/Tp</div>
    <div class="row">dB/Tp</div>
    <div class="row">% (A to B)</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:50px">{{percentAllowBw_B.toFixed(4)}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:50px">% (B to A)</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['aggBackoff'],
  data() {
    return {
      // frqUp_A: '',
    }
  },
  computed: {
    percentAllowBw_A() {
      return this.aggBackoff.allowBWA / 1000 * 100 / this.aggBackoff.selectedTp.bandwidth;
    },
    percentAllowBw_B() {
      return this.aggBackoff.allowBWB  / 1000 * 100 / this.aggBackoff.selectedTp.bandwidth;
    },
    // AggBackoffData() {
    //   var getAggData = [];
    //
    //   getAggData.push(this.aggIbo, this.aggObo, this.percentAllowBw_A, this.percentAllowBw_B);
    //   this.$emit('AggBackoffSelected', getAggData);
    //   // return {
    //     // aggIbo: this.aggIbo,
    //     // aggObo: this.aggObo,
    //     // percentAllowBw_A: this.percentAllowBw_A,
    //     // percentAllowBw_B: this.percentAllowBw_B
    //     // this.$emit('AggBackoffSelected', this.atmos);
    //   // }
    // }
  },
  watch: {
    'aggBackoff'(newVal, oldVal) {

      this.$emit('AggBackoffSelected', {
        aggIbo: this.aggIbo,
        aggObo: this.aggObo,
        percentAllowBw_A: this.percentAllowBw_A,
        percentAllowBw_B: this.percentAllowBw_B
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
