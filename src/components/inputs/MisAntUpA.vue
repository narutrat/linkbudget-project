<template>
  <input v-model="misAntUpA" @input="misAntUpAChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      misAntUpA: 0
    }
  },
  methods: {
    misAntUpAChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('misAntUpASelected', this.misAntUpA);
    }
  }
}
</script>
