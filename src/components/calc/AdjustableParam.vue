<template>
  <div class="col-sm-2">
    <div class="row" style="margin-top:15px">xxx</div>
    <div class="row" style="margin-top:25px">xxx</div>
    <div class="row" style="margin-top:8px">____{{sfdAtten}}</div>
    <div class="row">____{{allowFluxDen}}</div>
    <div class="row">____{{hpaMax}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth" class="form-control" style="text-align:center; margin-top:5px; margin-bottom:5px">
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
      sfdAtten: '',
      allowFluxDen: '',
      hpaMax: '',
      hpaPowerBoth: '',
    }
  },
}
</script>
