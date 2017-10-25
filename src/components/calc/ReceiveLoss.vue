<template>
  <div>
    <div class="col-sm-2">
      <div class="row">
        <input v-model="misAntDnB" class="form-control" style="text-align:center" @input="updateReceive">
      </div>
      <div class="row">
        <input v-model="otherLoss" class="form-control" style="text-align:center" @input="updateReceive">
      </div>
      <div class="row">{{totalLossDn}}</div>
    </div>
  </div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['rxLoss'],
  data() {
    return {
      misAntDnB: '',
      otherLoss: '',
      // totalLossDn: ''
    }
  },
  computed: {
    totalLossDn() {
      return parseFloat(this.misAntDnB) + parseFloat(this.otherLoss);
    }
  },
  methods: {
    updateReceive() {
      this.$emit('updateReceiveLoss', {
        misAntDnB: this.misAntDnB,
        otherLoss: this.otherLoss,
        totalLossDn: this.totalLossDn,
      })
    },
  },
  watch: {
    'rxLoss'(newVal, oldVal) {
      this.misAntDnB = newVal.misAntDnB;
      this.otherLoss = newVal.otherLoss;
      this.$emit('updateReceiveLoss', {
        misAntDnB: this.misAntDnB,
        otherLoss: this.otherLoss,
        totalLossDn: this.totalLossDn,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
