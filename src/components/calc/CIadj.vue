<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{ciTotalA.toFixed(4)}}</div>
    <div class="row">{{ciTotalB.toFixed(4)}}</div>
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
    ciTotalA() {
      if (this.ciAdj.ciTotalA) {
        return this.ciAdj.ciTotalA;
      } else {
        return 0;
      }
    },
    ciTotalB() {
      if (this.ciAdj.ciTotalB) {
        return this.ciAdj.ciTotalB;
      } else {
        return 0;
      }
    },
  },
  watch: {
    'ciAdj'(newVal, oldVal) {
      this.$emit('updateCiAdj', {
        ciTotalA: this.ciAdj.ciTotalA,
        ciTotalB: this.ciAdj.ciTotalB,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
