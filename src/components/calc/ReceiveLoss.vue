<template>
  <div>
    <div class="col-sm-2" style="text-align:center">
      <div class="row">
        <input v-model="misAntUp" class="form-control">
      </div>
      <div class="row">
        <input v-model="otherLossUp" class="form-control">
      </div>
      <div class="row">{{totalLossUp}}</div>
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
      misAntUp: '',
      otherLossUp: '',
      totalLossUp: ''
    }
  },
  methods: {
    paraChanged() {

    }
  }
}
</script>
