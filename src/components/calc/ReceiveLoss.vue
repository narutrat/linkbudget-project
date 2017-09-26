<template>
  <div>
    <div class="col-sm-2">
      <div class="row">
        <input v-model="this.rxLoss.misAntDnB" class="form-control" style="text-align:center">
      </div>
      <div class="row">
        <input v-model="this.rxLoss.otherLoss" class="form-control" style="text-align:center">
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
      // misAntUp: '',
      // otherLossUp: '',
      // totalLossDn: ''
    }
  },
  computed: {
    totalLossDn() {
      return parseFloat(this.rxLoss.misAntDnB) + parseFloat(this.rxLoss.otherLoss);
    }
  },
}
</script>
