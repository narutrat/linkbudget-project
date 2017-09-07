<template>
  <select v-model="lnaTemp" class="btn btn-default" @change="lnaTempChanged($event.target.value)">
    <!-- <option value="">Please Select</option> -->
    <option v-for="lnaTemp in defaultOptions" :value="lnaTemp.label">
      {{ lnaTemp.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      lnaTemp: 'Default',
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
    lnaTempChanged(value) {
      let selectedLnaTemp = this.defaultOptions.find(s => s.label === value);
      this.$emit('lnaTempSelected', selectedLnaTemp.label);
    }
  }
}
</script>
