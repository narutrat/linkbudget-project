<template>
  <input v-model="iflLoss" class="form-control" style="text-align:center" @input="iflChanged($event.target.value)">
</template>

<script>

export default {
  props: ['dataIflLoss'], // Get the satellite name from parent to create beam options
  data() {
    return {
      iflLoss: 0
    }
  },
  methods: {
    iflChanged(value) {
      // let deepInVal = this.deepIn;
      this.$emit('iflSelected', this.iflLoss);
    }
  }
}
</script>
