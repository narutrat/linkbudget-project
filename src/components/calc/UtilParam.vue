<template>
  <div>
    <div class="col-sm-2" style="text-align:center">
      <div class="row">pwrUtil_A</div>
      <div class="row">bwUtil_A</div>
      <div class="row">case_A</div>
    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">pwrUtil_B</div>
      <div class="row">bwUtil_B</div>
      <div class="row">case_B</div>
    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">pwrUtil_Total</div>
      <div class="row">bwUtil_Total</div>
      <div class="row">case_Total</div>
    </div>

    <div class="col-sm-2" style="text-align:center">
      <div class="row">% (Max=100)</div>
      <div class="row">% (Max=100)</div>
    </div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['bandwidthVal'],
  data() {
    return {

    }
  },
  methods: {
    paraChanged() {

    }
  }
}
</script>
