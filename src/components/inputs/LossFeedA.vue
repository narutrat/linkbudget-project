<template>
  <input v-model="lossFeedA" @input="lossFeedAChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      lossFeedA: 0.3
    }
  },
  methods: {
    lossFeedAChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('lossFeedASelected', this.lossFeedA);
    }
  }
}
</script>
