<template>
  <select v-model="linkAva" class="btn btn-default" @change="linkAvaChanged($event.target.value)">
    <option value="">Please Select</option>
    <option v-for="linkAva in defaultOptions" :value="linkAva.label">
      {{ linkAva.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      linkAva: '',
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
    linkAvaChanged(value) {
      let selectedLinkAva = this.defaultOptions.find(s => s.label === value);
      this.$emit('linkAvaSelected', selectedLinkAva.label);
    }
  }
}
</script>
