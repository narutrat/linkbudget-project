<template>
  <input v-model="bandwidthVal" @input="bandwidthValChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      bandwidthVal: ''
    }
  },
  methods: {
    bandwidthValChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('bandwidthValSelected', this.bandwidthVal);
    }
  }
}
</script>
