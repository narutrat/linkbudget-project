<template>
  <input v-model="otherLoss" @input="otherLossChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      otherLoss: 0
    }
  },
  methods: {
    otherLossChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('otherLossSelected', this.otherLoss);
    }
  }
}
</script>
