<template>
  <select class="btn btn-default" @change="fecAChanged($event.target.value)">
    <option>Select FEC</option>
    <option v-for="fecA in modAOptions" :value="fecA">
      {{ fecA }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['modem'], // Get the satellite name from parent to create beam options
  data() {
    return {
      fecA: "",
      modemDatabase: [{
          label: 'Modem A',
          modCode: ['BPSK', 'QPSK', '8PSK', '16APSK'],
          modCodeValue: [1, 2, 3, 4],
          fec: ['1/2', '2/3', '3/4', '7/8'],
          fecValue: ['0.5', '0.67', '0.75', '0.875'],
          ebNo: [1, 2, 3, 4, 8, 9],
          bt: [1.05, 1.2, 1.35]
        },
        {
          label: 'Modem B',
          modCode: ['BPSK', 'QPSK', '8PSK'],
          modCodeValue: [1, 2, 3],
          fec: ['1/2', '2/3', '3/4'],
          fecValue: ['0.5', '0.67', '0.75'],
          ebNo: [1, 2, 3, 8],
          bt: [1.05, 1.2]
        }
      ]
    }
  },
  computed: {
    modAOptions() {
      let result = this.modemDatabase.find(x => x.label === this.modem);
      return result ? result.fec : [];
    }
  },
  methods: {
    fecAChanged(value) {
      this.$emit('fecASelected', value);
    }
  }
}
</script>
