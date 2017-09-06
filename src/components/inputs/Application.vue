<template>
  <select v-model="appDVB" class="btn btn-default" @change="appDVBChanged($event.target.value)">
    <option value="">Select Application</option>
    <option v-for="appDVB in appDVBOptions" :value="appDVB.label">
      {{ appDVB.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      appDVB: '',
      appDVBOptions: [{
          label: 'DVB-S1',
          value: 1
        },
        {
          label: 'DVB-S2',
          value: 2
        }
      ]
    }
  },
  methods: {
    appDVBChanged(value) {
      let selectedAppDVB = this.appDVBOptions.find(s => s.label === value);
      this.$emit('appDVBSelected', selectedAppDVB.label);
    }
  }
}
</script>
