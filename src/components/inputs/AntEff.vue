<template>
  <select v-model="antEff" class="btn btn-default" @change="antEffChanged($event.target.value)">
    <!-- <option value="">Select Mode</option> -->
    <option v-for="antEff in defaultOptions" :value="antEff.label">
      {{ antEff.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      antEff: 'Default',
      defaultOptions: [{
          label: 'Default',
          value: 60
        },
        {
          label: 'Manual',
          value: ''
        }
      ]
    }
  },
  methods: {
    antEffChanged(value) {
      let selectedAntEff = this.defaultOptions.find(s => s.label === value);
      this.$emit('antEffSelected', selectedAntEff.label);
    }
  }
}
</script>
