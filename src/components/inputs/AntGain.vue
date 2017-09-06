<template>
  <select v-model="antGain" class="btn btn-default" @change="antGainChanged($event.target.value)">
    <option v-for="antGain in CalOptions" :value="antGain.label">
      {{ antGain.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      antGain: '',
      CalOptions: [{
          label: 'Calculation',
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
    antGainChanged(value) {
      let selectedAntGain = this.CalOptions.find(s => s.label === value);
      this.$emit('antGainSelected', selectedAntGain.label);
    }
  }
}
</script>
