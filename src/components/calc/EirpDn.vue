<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{maxEirpNonUtil_A}}</div>
    <div class="row">2{{maxEirpNonUtil_B}}</div>
  </div>

  <div class="col-sm-1">
    <div class="row">dB</div>
    <div class="row">dB</div>
  </div>

  <div class="col-sm-2">
    <div class="row">1{{maxEirpNonBW_A}}</div>
    <div class="row">2{{maxEirpNonBW_B}}</div>
  </div>

  <div class="col-sm-1">
    <div class="row">dB</div>
    <div class="row">dB</div>
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
      maxEirpNonUtil_A: '',
      maxEirpNonUtil_B: '',
      maxEirpNonBW_A: '',
      maxEirpNonBW_B: ''
    }
  },
}
</script>
