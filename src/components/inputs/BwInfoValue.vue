<template>
<div>

    <input v-model="bandwidthVal" class="form-control" style="text-align:center" @input="bandwidthValChanged($event.target.value)">

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  props: ['satelliteName'], // Get the satellite name from parent to create beam options
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
