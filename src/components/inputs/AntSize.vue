
<template>
  <input v-model="antSize" @input="antSizeChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      antSize: ''
    }
  },
  methods: {
    antSizeChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('antSizeSelected', this.antSize);
    }
  }
}
</script>
