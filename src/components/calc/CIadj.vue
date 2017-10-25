<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{ciTotalUp.toFixed(4)}}</div>
    <div class="row">{{ciTotalDn.toFixed(4)}}</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['ciAdj'],
  data() {
    return {
      // boltzman: '',
      // ciUpTotal: '',
    }
  },
  computed: {
    ciTotalUp() {
      if (this.ciAdj.ciTotalUp) {
        return this.ciAdj.ciTotalUp;
      } else {
        return 0;
      }
    },
    ciTotalDn() {
      if (this.ciAdj.ciTotalDn) {
        return this.ciAdj.ciTotalDn;
      } else {
        return 0;
      }
    },
  },
  watch: {
    'ciAdj'(newVal, oldVal) {
      this.$emit('updateCiAdj', {
        ciTotalUp: this.ciAdj.ciTotalUp,
        ciTotalDn: this.ciAdj.ciTotalDn,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
