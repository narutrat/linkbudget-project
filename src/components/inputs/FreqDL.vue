<template>
  <!-- <span :value="freqdownlink">
    Center Frequency: {{ freqdownlink }} GHz
  </span> -->
</template>

<script>
  export default{
    props: ['transponders'],
    computed: {
      freqdownlink() {
        let result = this.tpConfigDatabase.find(x => x.transponders === this.transponders);
        return result ? result.downFrq : '';
      }
    },
    methods: {
      freqdownlink(value) {
        this.$emit('tpFreq', value);
      }
    }
  }
</script>
