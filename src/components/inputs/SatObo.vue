<template>
  <input v-model="satObo" @input="satOboChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satObo'], // Get the satellite name from parent to create beam options
  data() {
    return {
      satObo: ''
    }
  },
  methods: {
    satOboChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('satOboSelected', this.satObo);
    }
  }
}
</script>
