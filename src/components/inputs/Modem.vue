<template>
  <select v-model="modem" class="btn btn-default" @change="modemChanged($event.target.value)">
    <option value="">Select Modem</option>
    <option v-for="modem in modemOptions" :value="modem.label">
      {{ modem.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      modem: '',
      modemOptions: [{
          label: 'Modem A',
          value: 1
        },
        {
          label: 'Modem B',
          value: 2
        }
      ]
    }
  },
  methods: {
    modemChanged(value) {
      let selectedModem = this.modemOptions.find(s => s.label === value);
      this.$emit('modemSelected', selectedModem.label);
    }
  }
}
</script>
