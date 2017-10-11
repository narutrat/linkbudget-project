<template>
  <select class="btn btn-default" @change="modemChanged($event.target.value)">
    <option value="">Select Modem</option>
    <option v-for="modem in modemOptions" :value="modem.name">
      {{ modem.name }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      // modem: '',
      modemOptions: '',
    }
  },
  methods: {
    modemChanged(value) {
      let selectedModem = this.modemOptions.find(s => value === s.name );
      // this.$emit('modemSelected', value);
      this.$emit('modemSelected', selectedModem);
    }
  },
  created() {
      this.$http.get('modems').then(response => {
        this.modemOptions = response.body.modems;
        console.log(response);
      }).catch((e) => {
        console.log(e);
      })
  }
}
</script>
