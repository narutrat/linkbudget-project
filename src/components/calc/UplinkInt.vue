<template>
<div>
  <div class="col-sm-2">
    <div class="row">1{{topo1}}</div>
    <div class="row">
      <input v-model="ulPden1" class="form-control">
    </div>
    <div class="row">
      <input v-model="esInTcGt1" class="form-control">
    </div>
    <div class="row">
      <input v-model="polImp1" class="form-control">
    </div>
    <div class="row">
      <input v-model="ulSidelobe1" class="form-control">
    </div>
    <div class="row">6{{ciUp1_A}}</div>
  </div>
  <div class="col-sm-2">
    <div class="row">1{{topo2}}</div>
    <div class="row">
      <input v-model="ulPden2" class="form-control">
    </div>
    <div class="row">
      <input v-model="esInTcGt2" class="form-control">
    </div>
    <div class="row">
      <input v-model="polImp2" class="form-control">
    </div>
    <div class="row">
      <input v-model="ulSidelobe2" class="form-control">
    </div>
    <div class="row">6{{ciUp2_A}}</div>
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
      ulPden1: '',
      ulPden2: '',
      esInTcGt1: '',
      esInTcGt2: '',
      polImp1: '',
      polImp2: '',
      ulSidelobe1: '',
      ulSidelobe2: '',
      ciUp1_A: '',
      ciUp2_A: '',
      ciUpTotal_A: ''
    }
  },
}
</script>
