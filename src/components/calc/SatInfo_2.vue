<template>
<div>
    <div class="row">
      <input v-model="gtSel" class="form-control" style="text-align:center">
    </div>
    <div class="row" style="margin-top:5px">{{sfdMax}}</div>
    <div class="row">{{this.satInfo_2.selectedTp.bandwidth}}</div>
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
      if (this.satInfo_2.selectedTp.sfd) {
        return this.satInfo_2.selectedTp.sfd-this.gtSel;
      } else {
        return 0;
      }

    },
    gtSel() {
      if (this.satInfo_2.selectedBeam && this.satInfo_2.selectLocation) {
        return this.satInfo_2.gt;
      }else {
        return 0;
      }
    },
    eirpDn() {
      if (this.satInfo_2.selectedBeam && this.satInfo_2.selectLocation) {
        return this.satInfo_2.eirpdown;
      }else {
        return 0;
      }
    }
  },
  watch: {
    'satInfo_2'(newVal, oldVal) {

      this.$emit('updateSatInfo2', {
        sfdMax: this.sfdMax,
        gtSel: this.gtSel,
        eirpDn: this.eirpDn
      })
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
