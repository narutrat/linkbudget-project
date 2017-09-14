<template>
  <input v-model="atten" @input="attenChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      atten: ''
    }
  },
  methods: {
    attenChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('attenSelected', this.atten);
    }
  }
}
</script>
