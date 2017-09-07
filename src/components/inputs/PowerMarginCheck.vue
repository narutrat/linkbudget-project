<template>
  <select v-model="powerMargin" class="btn btn-default" @change="powerMarginChanged($event.target.value)">
    <!-- <option value="">Select Power Utilization / Margin</option> -->
    <option v-for="powerMargin in powerOptions" :value="powerMargin.label">
      {{ powerMargin.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      powerMargin: 'Power Utilization',
      powerOptions: [{
          label: 'Power Utilization',
          value: 1
        },
        {
          label: 'Margin',
          value: 2
        }
      ]
    }
  },
  methods: {
    powerMarginChanged(value) {
      let selectedPowerMargin = this.powerOptions.find(s => s.label === value);
      this.$emit('powerMarginSelected', selectedPowerMargin.label);
    }
  }
}
</script>
