<template>
<div>
    <div class="row">
      <input v-model="gt" class="form-control" style="text-align:center" @input="updateSat">
    </div>
    <div class="row" style="margin-top:5px">{{sfdMax}}</div>
    <div class="row">{{this.satInfo_2.selectedTp.bandwidth}}</div>
    <div class="row" style="margin-top:5px">
      <input v-model="eirpdown" class="form-control" style="text-align:center" @input="updateSat">
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
      gt: '',
      // sfdMax: '',
      satBW: '',
      eirpdown: '',
    }
  },
  computed: {
    sfdMax() {
      if (this.satInfo_2.selectedTp.sfd) {
        return this.satInfo_2.selectedTp.sfd-this.gt;
      } else {
        return 0;
      }

    },
    // gtSel() {
    //   if (this.satInfo_2.selectedBeam && this.satInfo_2.selectLocation) {
    //     return this.satInfo_2.gt;
    //   }else {
    //     return 0;
    //   }
    // },
    // eirpDn() {
    //   if (this.satInfo_2.selectedBeam && this.satInfo_2.selectLocation) {
    //     return this.satInfo_2.eirpdown;
    //   }else {
    //     return 0;
    //   }
    // }
  },
  methods: {
    updateSat() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      this.$emit('updateSatInfo2', {
        sfdMax: this.sfdMax,
        gt: this.gt,
        eirpdown: this.eirpdown
      })
    },

  },
  watch: {
    'satInfo_2'(newVal, oldVal) {
      this.gt = newVal.gt;
      this.eirpdown = newVal.eirpdown;
      this.$emit('updateSatInfo2', {
        sfdMax: this.sfdMax,
        gt: this.gt,
        eirpdown: this.eirpdown
      })
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
