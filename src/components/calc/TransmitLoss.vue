<template>
  <div>
    <div class="col-sm-2">
      <!-- <div class="row">

        <input v-model="this.txLoss.iflLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>
      <div class="row">
        <input v-model="this.txLoss.misAntUpA" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>
      <div class="row">
        <input v-model="this.txLoss.otherLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </div>

      <div class="row">{{totalLossUp}}</div> -->
      <!-- {{this.txLoss.iflLoss}} // {{this.txLoss.misAntUpA}} // {{this.txLoss.otherLoss}} -->


      <tr>

        <input v-model="this.txLoss.iflLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>
      <tr>
        <input v-model="this.txLoss.misAntUpA" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>
      <tr>
        <input v-model="this.txLoss.otherLoss" class="form-control" style="text-align:center" @input="updateTxLoss">
      </tr>

      <tr>{{totalLossUp}}</tr>

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
      // iflLoss: '',
      // misAntUp: '',
      // otherLossUp: 0,
      // totalLossUp: ''
    }
  },
  computed: {
    totalLossUp() {
      return parseFloat(this.txLoss.iflLoss) + parseFloat(this.txLoss.misAntUpA) + parseFloat(this.txLoss.otherLoss);
    }
  },
  methods: {
    updateTxLoss() {
      this.$emit('updateTransmitLoss', {
        totalLossUp: this.totalLossUp,
      })
    },
  },
  watch: {
    'txLoss'(newVal, oldVal) {
      this.$emit('updateTransmitLoss', {
        totalLossUp: this.totalLossUp,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },

}
</script>
