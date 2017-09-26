<template>
  <input v-model="atmos" @input="atmosChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      atmos: 0.1
    }
  },
  methods: {
    atmosChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('atmosSelected', this.atmos);
    }
  }
}
</script>
