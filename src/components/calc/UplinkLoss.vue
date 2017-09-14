<template>
<div>
  <div class="col-sm-2" style="text-align:left">
    <div class="row">{{eirpUpVal}}</div>
    <div class="row">{{powerDen}}</div>
    <div class="row">
      <input v-model="atmos" class="form-control" style="text-align:center">
    </div>
    <div class="row">{{spreadLoss}}</div>
    <div class="row">{{opFluxDen}}</div>
    <div class="row">{{gainSqrM}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  // props: ['bandwidthVal'],
  data() {
    return {
      eirpUpVal: '',
      powerDen: '',
      atmos: '',
      spreadLoss: '',
      opFluxDen: '',
      gainSqrM: ''
    }
  },
}
</script>
