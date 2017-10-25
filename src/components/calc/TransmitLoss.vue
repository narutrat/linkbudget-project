<template>
  <div>
    <div class="col-sm-2">
      <div class="row">

        <input v-model="iflLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>
      <div class="row">
        <input v-model="misAntUpA" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>
      <div class="row">
        <input v-model="otherLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>

      <div class="row">{{totalLossUp}}</div>
      <!-- {{this.txLoss.iflLoss}} // {{this.txLoss.misAntUpA}} // {{this.txLoss.otherLoss}} -->


      <!-- <tr>

        <input v-model="iflLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>
      <tr>
        <input v-model="misAntUpA" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>
      <tr>
        <input v-model="otherLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>

      <tr>{{totalLossUp}}</tr> -->

    </div>
  </div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['txLoss'],
  data() {
    return {
      iflLoss: '',
      misAntUpA: '',
      otherLoss: '',
      // totalLossUp: ''
    }
  },
  computed: {
    totalLossUp() {
      return parseFloat(this.iflLoss) + parseFloat(this.misAntUpA) + parseFloat(this.otherLoss);
    }
  },
  methods: {
    updateTxLoss() {
      this.$emit('updateTransmitLoss', {
        iflLoss: this.iflLoss,
        misAntUpA: this.misAntUpA,
        otherLoss: this.otherLoss,
        totalLossUp: this.totalLossUp,
      })
    },
  },
  watch: {
    'txLoss'(newVal, oldVal) {
      this.iflLoss = newVal.iflLoss;
      this.misAntUpA = newVal.misAntUpA;
      this.otherLoss = newVal.otherLoss;
      this.$emit('updateTransmitLoss', {
        iflLoss: this.iflLoss,
        misAntUpA: this.misAntUpA,
        otherLoss: this.otherLoss,
        totalLossUp: this.totalLossUp,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },

}
</script>
