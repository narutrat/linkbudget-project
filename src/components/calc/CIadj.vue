<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{ciUpTotal}}</div>
    <div class="row">2{{ciDnTotal}}</div>
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
      ciUpTotal: '',
      ciDnTotal: ''
    }
  },
}
</script>
