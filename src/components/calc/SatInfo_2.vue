<template>
<div>
    <div class="row">
      <input v-model="gtSel" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="margin-top:5px">{{sfdMax}}</div>
    <div class="row">{{this.satInfo_2.selectedTp.tpBW}}</div>
    <div class="row" style="margin-top:5px">
      <input v-model="eirpDn" class="form-control" style="text-align:center">
    </div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['satInfo_2'],
  data() {
    return {
      // gtSel: '',
      // sfdMax: '',
      satBW: '',
      // eirpDn: '',
    }
  },
  computed: {
    sfdMax() {
      return -(this.satInfo_2.selectedSatellite.sfd+this.gtSel)
    },
    gtSel() {
      if (this.satInfo_2.selectLocation) {
        return this.satInfo_2.selectLocation.gt;
      }else {
        return ;
      }
    },
    eirpDn() {
      if (this.satInfo_2.selectLocation) {
        return this.satInfo_2.selectLocation.eirp;
      }else {
        return ;
      }
    }
  }
}
</script>
