<template>
<div>
  <div class="col-sm-2" style="text-align:left">
    <div class="row">{{eirpDnClear}}</div>
    <div class="row">{{pathLoss}}</div>
    <div class="row">
      <input v-model="atmos" class="form-control" style="text-align:center">
    </div>
    <div class="row">{{pathLossAtmos}}</div>
    <div class="row">{{receivePwrClear}}</div>
    <div class="row">{{eirpDnDenClear}}</div>
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
      eirpDnClear: '',
      pathLoss: '',
      atmos: '',
      pathLossAtmos: '',
      receivePwrClear: '',
      eirpDnDenClear: ''
    }
  },
}
</script>
