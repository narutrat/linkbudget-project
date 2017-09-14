<template>
<div>

  <div class="col-sm-4" style="text-align:left">
    <div class="row">Sat. Attenuation Setting</div>
    <div class="row">Attenuator Range</div>
    <div class="row">ES A antenna Diameter</div>
    <div class="row">ES B antenna Diameter</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row">
      <input v-model="atten" class="form-control" style="text-align:center">
    </div>
    <div class="row">max atten</div>
    <div class="row">
      <input v-model="antSizeA" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="antSizeB" class="form-control" style="text-align:center">
    </div>
  </div>

  <div class="col-sm-2">
    <div class="row">dB</div>
    <div class="row">dB</div>
    <div class="row">m.</div>
    <div class="row">m.</div>
  </div>

  <div class="row" style="margin-bottom:20px"></div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  // props: ['bandwidthVal'],
  data() {
    return {
atten: "",
antSizeA: "",
antSizeB: ""
    }
  },
}
</script>
