<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{boltzman}}</div>
    <div class="row">2{{noiseBW}}</div>
    <div class="row">3{{cnUpClear}}</div>
    <div class="row">4{{cnUpUpfade}}</div>
    <div class="row">5{{opFluxDenUpfade}}</div>
    <div class="row">6{{eirpUpfade}}</div>
    <div class="row">7{{cnBothfade}}</div>
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
      boltzman: '',
      noiseBW: '',
      cnUpClear: '',
      cnUpUpfade: '',
      opFluxDenUpfade: '',
      eirpUpfade: '',
      cnBothfade: ''
    }
  },
}
</script>
