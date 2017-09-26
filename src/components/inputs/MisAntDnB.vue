<template>
  <input v-model="misAntDnB" @input="misAntDnBChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      misAntDnB: 0
    }
  },
  methods: {
    misAntDnBChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('misAntDnBSelected', this.misAntDnB);
    }
  }
}
</script>
