<template>
  <div>
    <div class="row">
      <input v-model="modCodeValue" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="infoValue" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="fecValue" class="form-control" style="text-align:center">
    </div>

    <div class="row">{{txRate}}</div>

    <div class="row">
      <input v-model="bt" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="ebNo" class="form-control" style="text-align:center">
    </div>
    <div class="row">{{symbolRate}}</div>
    <div class="row">{{bwCal}}</div>
  </div>
</template>

<script>
export default {
  props: ['bandwidthVal'],
  data() {
    return {
      modCodeValue: '',
      infoValue: '',
      fecValue: '',
      txRate: '',
      bt: '',
      ebNo: '',
      symbolRate: '',
      bwCal: ''

    }
  },
  // methods: {
  //
  // }
}
</script>
