<template>
  <select v-model="carrier" class="btn btn-default" @change="carrierChanged($event.target.value)">
    <!-- <option value="">Select Carrier</option> -->
    <option v-for="carrier in carrierOptions" :value="carrier.label">
      {{ carrier.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      carrier: 'Multiple Carrier',
      carrierOptions: [{
          label: 'Single Carrier',
          value: 'single'
        },
        {
          label: 'Two Carrier',
          value: 'two'
        },
        {
          label: 'Multiple Carrier',
          value: 'multi'
        }
      ]
    }
  },
  methods: {
    carrierChanged(value) {
      let selectedCarrier = this.carrierOptions.find(s => s.label === value);
      this.$emit('carrierSelected', selectedCarrier.value);
    }
  }
}
</script>
