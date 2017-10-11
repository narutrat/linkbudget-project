<template>
<div>
    <div class="col-sm-4">{{ciTotalCal.toFixed(4)}}</div>
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['ciTotal'],
  data() {
    return {
      // boltzman: '',
      // ciUpTotal: '',
    }
  },
  computed: {
    ciTotalCal() {
      if (this.ciTotal.ci1 && this.ciTotal.ci2) {
        return Math.min(-10 * Math.log10(Math.pow(10, -(parseFloat(this.ciTotal.ci1) / 10)) + Math.pow(10, -(parseFloat(this.ciTotal.ci2) / 10))), 30);
      } else {
        return 0;
      }
    },
  },
  watch: {
    'ciTotal'(newVal, oldVal) {
      this.$emit('updateCiTotal', {
        ciTotalCal: this.ciTotalCal,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
