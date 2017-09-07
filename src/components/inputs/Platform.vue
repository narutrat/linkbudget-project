<template>
  <select v-model="platform" class="btn btn-default" @change="platformChanged($event.target.value)">
    <!-- <option value="">Select Platform</option> -->
    <option v-for="platform in platformOptions" :value="platform.label">
      {{ platform.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      platform: 'Broadcast',
      platformOptions: [{
          label: 'Broadcast',
          value: 1
        },
        {
          label: 'VSAT',
          value: 2
        }
      ]
    }
  },
  methods: {
    platformChanged(value) {
      let selectedPlatform = this.platformOptions.find(s => s.label === value);
      this.$emit('platformSelected', selectedPlatform.label);
    }
  }
}
</script>
