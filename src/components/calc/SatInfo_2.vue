<template>
<div>
    <div class="row">
      <input v-model="gtSel" class="form-control" style="text-align:center">
    </div>
    <div class="row">{{sfdMax}}</div>
    <div class="row">{{satBW}}</div>
    <div class="row">
      <input v-model="eirpdnSat" class="form-control" style="text-align:center">
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
      gtSel: '',
      sfdMax: '',
      satBW: '',
      eirpdnSat: '',
    }
  },
}
</script>
