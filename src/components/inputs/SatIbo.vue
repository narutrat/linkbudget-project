<template>
  <input v-model="satIbo" @input="satIboChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      satIbo: ''
    }
  },
  methods: {
    satIboChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('satIboSelected', this.satIbo);
    }
  }
}
</script>
