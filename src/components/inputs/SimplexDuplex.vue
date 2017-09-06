<template>
  <select v-model="simDuplex" class="btn btn-default" @change="simDuplexChanged($event.target.value)">
    <option value="">Select Simplex/Duplex</option>
    <option v-for="simDuplex in simDuplexOptions" :value="simDuplex.label">
      {{ simDuplex.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      simDuplex: '',
      simDuplexOptions: [{
          label: 'Simplex',
          value: 1
        },
        {
          label: 'Duplex',
          value: 2
        }
      ]
    }
  },
  methods: {
    simDuplexChanged(value) {
      let selectedSimDuplex = this.simDuplexOptions.find(s => s.label === value);
      this.$emit('simDuplexSelected', selectedSimDuplex.label);
    }
  }
}
</script>
