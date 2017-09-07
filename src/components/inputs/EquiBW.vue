<template>
  <select v-model="equivalentBW" class="btn btn-default" @change="equivalentBWChanged($event.target.value)">
    <!-- <option value="">Please Select</option> -->
    <option v-for="equivalentBW in yesNoOptions" :value="equivalentBW.label">
      {{ equivalentBW.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      equivalentBW: 'No',
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
    equivalentBWChanged(value) {
      let selectedEquivalentBW = this.yesNoOptions.find(s => s.label === value);
      this.$emit('equivalentBWSelected', selectedEquivalentBW.label);
    }
  }
}
</script>
