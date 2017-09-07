<template>
  <select v-model="rxAntTemp" class="btn btn-default" @change="rxAntTempChanged($event.target.value)">
    <!-- <option value="">Please Select</option> -->
    <option v-for="rxAntTemp in defaultOptions" :value="rxAntTemp.label">
      {{ rxAntTemp.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      rxAntTemp: 'Default',
      defaultOptions: [{
          label: 'Default',
          value: 1
        },
        {
          label: 'Manual',
          value: 2
        }
      ]
    }
  },
  methods: {
    rxAntTempChanged(value) {
      let selectedRxAntTemp = this.defaultOptions.find(s => s.label === value);
      this.$emit('rxAntTempSelected', selectedRxAntTemp.label);
    }
  }
}
</script>
