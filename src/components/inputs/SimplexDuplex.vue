<template>
  <select v-model="simDuplex" class="btn btn-default" @change="simDuplexChanged($event.target.value)">
    <!-- <option value="">Select Simplex/Duplex</option> -->
    <option v-for="simDuplex in simDuplexOptions" :value="simDuplex.label">
      {{ simDuplex.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['platform'], // Get the satellite name from parent to create beam options
  data() {
    return {
      simDuplex: 'Duplex',
      simDuplexOptions: [{
          label: 'Simplex',
          value: 1
        },
        {
          label: 'Duplex',
          value: 2
        }
      ]
    }
  },
  watch: {
    'platform'(newVal, oldVal) {
      if (newVal === 'Broadcast') {
        this.simDuplexOptions = [{
            label: 'Simplex',
            value: 1
          }];
          this.simDuplex = 'Simplex'
      } else {
        this.simDuplexOptions = [{
            label: 'Simplex',
            value: 1
          },
          {
            label: 'Duplex',
            value: 2
          }
        ];
          this.simDuplex = 'Duplex'
      }
    this.$emit('simDuplexSelected', this.simDuplex);
    }
  },
  methods: {
    simDuplexChanged(value) {
      let selectedSimDuplex = this.simDuplexOptions.find(s => s.label === value);
      this.$emit('simDuplexSelected', selectedSimDuplex.label);
    }
  }
}
</script>
