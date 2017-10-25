<template>
  <input v-model="iflLoss" class="form-control" style="text-align:center" @input="iflChanged">
</template>

<script>

export default {
  props: ['dataIflLoss'], // Get the satellite name from parent to create beam options
  data() {
    return {
      // iflLoss: ''
    }
  },
  computed: {
    iflLoss() {
      return this.dataIflLoss.iflLoss;
    }
  },
  methods: {
    iflChanged() {
      // let deepInVal = this.deepIn;
      this.$emit('iflSelected', this.iflLoss);
    }
  },
  watch: {
    'dataIflLoss'(newVal, oldVal) {
      // this.iflLoss = newVal.iflLossVal;
      this.$emit('iflSelected', {
        iflLoss: this.iflLoss,
      });
    }
  },
}
</script>
