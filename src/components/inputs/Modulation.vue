<template>
  <select class="btn btn-default" @change="modCodeChanged($event.target.value)">
    <option>Select Modulation Code</option>
    <option v-for="modCode in modem.modCode" :value="modCode">
      {{ modCode }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['modem'], // Get the satellite name from parent to create beam options
  data() {
    return {
      modCode: [],
    }
  },
  computed: {
    modOptions() {
      let result = this.modemDatabase.find(x => x.label === this.modem);
      return result ? result.modCode : [];
    }
  },
  methods: {
    modCodeChanged(value) {
      console.log(JSON.stringify(value, undefined, 2));
      this.$emit('modCodeSelected', value);
    }
  }
}
</script>
