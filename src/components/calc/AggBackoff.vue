<template>
<div style="margin-left:10px; padding:5px; margin-top:5px">
  <div class="col-sm-4" style="text-align:left">
    <div class="row" style="margin-top:4px">Aggregrate input Backoff</div>
    <div class="row" style="margin-top:8px">Aggregrate Output Backoff</div>
    <div class="row" style="margin-top:6px">Percent of Allocated BW/Tp. BW</div>
  </div>

  <div class="col-sm-2">
    <!-- <div class="row">{{aggIbo || '-'}}</div> -->
    <div class="row">
      <input v-model="satIbo" class="form-control" style="text-align:center" @input="update">
    </div>
    <!-- <div class="row">{{aggObo || '-'}}</div> -->
    <div class="row">
      <input v-model="satObo" class="form-control" style="text-align:center" @input="update">
    </div>
    <div class="row">{{percentAllowBw_A.toFixed(4)}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:4px">dB/Tp</div>
    <div class="row" style="margin-top:8px">dB/Tp</div>
    <div class="row" style="margin-top:6px">% (A to B)</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:68px">{{percentAllowBw_B.toFixed(4)}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:68px">% (B to A)</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['aggBackoff'],
  data() {
    return {
      // frqUp_A: '',
      satIbo: '',
      satObo: ''
    }
  },
  computed: {
    percentAllowBw_A() {
      return this.aggBackoff.allowBWA / 1000 * 100 / this.aggBackoff.selectedTp.bandwidth;
    },
    percentAllowBw_B() {
      return this.aggBackoff.allowBWB  / 1000 * 100 / this.aggBackoff.selectedTp.bandwidth;
    },
    // aggIbo() {
    //   return -(this.satIbo);
    // },
    // aggObo() {
    //   return -(this.satObo);
    // }
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
  methods: {
    update() {
      this.$emit('AggBackoffSelected', {
        satIbo: +this.satIbo,
        satObo: +this.satObo,
        percentAllowBw_A: this.percentAllowBw_A,
        percentAllowBw_B: this.percentAllowBw_B
      });
    },
  },
  watch: {
    'aggBackoff'(newVal, oldVal) {
      this.satIbo = -(newVal.satIbo);
      this.satObo = -(newVal.satObo);
      this.$emit('AggBackoffSelected', {
        satIbo: +this.satIbo,
        satObo: +this.satObo,
        percentAllowBw_A: this.percentAllowBw_A,
        percentAllowBw_B: this.percentAllowBw_B
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
