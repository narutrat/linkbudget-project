<template>
  <input v-model="pwrVal" @input="pwrValChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      pwrVal: ''
    }
  },
  methods: {
    pwrValChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('pwrValSelected', this.pwrVal);
    }
  }
}
</script>
