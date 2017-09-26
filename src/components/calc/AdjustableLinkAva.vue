<template>
<div>
  <div class="col-sm-4" style="text-align:left">
    <div class="row" style="margin-top:15px">Upfade A/B availability (%)</div>
    <div class="row" style="margin-top:25px">Downfade A/B availability (%)</div>
    <div class="row" style="margin-top:10px">SFD at desired attenuation</div>
    <div class="row">Allowable Flux Density</div>
    <div class="row">HPA Max Power Required</div>
    <div class="row" style="margin-top:12px">HPA Operating Power Both Fade</div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:5px">
      <input v-model="upFadePercent" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="margin-top:15px">
      <input v-model="dnFadePercent" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="margin-top:10px">{{avrFadePercent}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['adjustableLinkAva'],
  data() {
    return {

    }
  },
  computed: {
    upFadePercent() {
      return this.adjustableLinkAva.linkAvaVal;
    },
    dnFadePercent() {
      return this.adjustableLinkAva.linkAvaVal;
    },
    avrFadePercent() {
      return (parseFloat(this.upFadePercent) + parseFloat(this.dnFadePercent)) / 2;
    }
  }
}
</script>
