<template>
  <select v-model="mode" class="btn btn-default" @change="modeChanged($event.target.value)">
    <!-- <option value="">Select Mode</option> -->
    <option v-for="mode in modeOptions" :value="mode.label">
      {{ mode.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      mode: 'FGM',
      modeOptions: [{
          label: 'ALC',
          value: 1
        },
        {
          label: 'FGM',
          value: 2
        }
      ]
    }
  },
  methods: {
    modeChanged(value) {
      let selectedMode = this.modeOptions.find(s => s.label === value);
      this.$emit('modeSelected', selectedMode.label);
    }
  }
}
</script>
