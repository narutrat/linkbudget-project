<template>
<div>
  <div class="col-sm-4" style="text-align:left">
    <div class="row">Longitude Difference</div>
    <div class="row">Central Angle</div>
    <div class="row">Slant Range</div>
    <div class="row">Azimuth Angle</div>
    <div class="row">Elevation Angle</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row">{{longDiff}}</div>
    <div class="row">{{centralAngle}}</div>
    <div class="row">{{slantRange}}</div>
    <div class="row">{{azAngle}}</div>
    <div class="row">{{elAngle}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row">rad</div>
    <div class="row">rad</div>
    <div class="row">km</div>
    <div class="row">deg</div>
    <div class="row">deg</div>
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
      longDiff: '',
      centralAngle: '',
      slantRange: '',
      azAngle: '',
      elAngle: '',
    }
  },
}
</script>
