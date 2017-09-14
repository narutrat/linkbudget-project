<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{topo1}}</div>
    <div class="row">
      <input v-model="downlinkPdenSel1" class="form-control">
    </div>
    <div class="row">2{{grr1_A}}</div>
    <div class="row">
      <input v-model="polImp1" class="form-control">
    </div>
    <div class="row">
      <input v-model="esAdj1" class="form-control">
    </div>
    <div class="row">6{{ciDn1_A}}</div>
  </div>
  <div class="col-sm-2">
    <div class="row">1{{topo2}}</div>
    <div class="row">
      <input v-model="downlinkPdenSel2" class="form-control">
    </div>
    <div class="row">2{{grr2_A}}</div>
    <div class="row">
      <input v-model="polImp2" class="form-control">
    </div>
    <div class="row">
      <input v-model="esAdj2" class="form-control">
    </div>
    <div class="row">6{{ciDn2_A}}</div>
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
      topo1: '',
      topo2: '',
      downlinkPdenSel1: '',
      downlinkPdenSel2: '',
      grr1_A: '',
      grr2_A: '',
      esAdj1: '',
      esAdj2: '',
      polImp1: '',
      polImp2: '',
      ciDn1_A: '',
      ciDn2_A: '',
    }
  },
}
</script>
