<template>
  <input v-model="deepIn" @input="deepInChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      deepIn: ''
    }
  },
  methods: {
    deepInChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('deepInSelected', this.deepIn);
    }
  }
}
</script>
