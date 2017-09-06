<template>
  <select v-model="ebe" class="btn btn-default" @change="ebeChanged($event.target.value)">
    <option value="">Please Select</option>
    <option v-for="ebe in ShowOptions" :value="ebe.label">
      {{ ebe.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      ebe: '',
      ShowOptions: [{
          label: 'Show',
          value: 1
        },
        {
          label: 'Hide',
          value: 2
        }
      ]
    }
  },
  methods: {
    ebeChanged(value) {
      let selectedEbe = this.ShowOptions.find(s => s.label === value);
      this.$emit('ebeSelected', selectedEbe.label);
    }
  }
}
</script>
