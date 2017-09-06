<template>
  <select v-model="bestModCode" class="btn btn-default" @change="bestModCodeChanged($event.target.value)">
    <option value="">Select Yes / No</option>
    <option v-for="bestModCode in yesNoOptions" :value="bestModCode.label">
      {{ bestModCode.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      bestModCode: '',
      yesNoOptions: [{
          label: 'Yes',
          value: 1
        },
        {
          label: 'No',
          value: 2
        }
      ]
    }
  },
  methods: {
    bestModCodeChanged(value) {
      let selectedBestModCode = this.yesNoOptions.find(s => s.label === value);
      this.$emit('bestModCodeSelected', selectedBestModCode.label);
    }
  }
}
</script>
