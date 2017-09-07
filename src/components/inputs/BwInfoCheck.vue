<template>
  <select v-model="bwSel" class="btn btn-default" @change="bwSelChanged($event.target.value)">
    <!-- <option value="">Select Bandwidth</option> -->
    <option v-for="bwSel in bwSelOptions" :value="bwSel.label">
      {{ bwSel.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      bwSel: 'Bandwidth',
      bwSelOptions: [{
          label: 'Bandwidth',
          value: 1
        },
        {
          label: 'Information Rate',
          value: 2
        }
      ]
    }
  },
  methods: {
    bwSelChanged(value) {
      let selectedBwSel = this.bwSelOptions.find(s => s.label === value);
      this.$emit('bwSelSelected', selectedBwSel.label);
    }
  }
}
</script>
