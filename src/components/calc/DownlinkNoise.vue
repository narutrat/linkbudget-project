<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{boltzman}}</div>
    <div class="row">2{{increaseT}}</div>
    <div class="row">3{{noiseBW}}</div>
    <div class="row">4{{noisePwrClear}}</div>
    <div class="row">5{{noisePwrDnfade}}</div>
    <div class="row">6{{cnDnClear}}</div>
    <div class="row">7{{cnDnfadeClear}}</div>
    <div class="row">8{{noisePwrTotal}}</div>
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
      increaseT: '',
      noiseBW: '',
      noisePwrClear: '',
      noisePwrDnfade: '',
      cnDnClear: '',
      cnDnfadeClear: '',
      noisePwrTotal: ''
    }
  },
}
</script>
