<template>
  <select v-model="modem" class="btn btn-default" @change="modemChanged($event.target.value)">
    <option value="">Select Modem</option>
    <option v-for="modem in modemOptions" :value="modem.label">
      {{ modem.label }}
    </option>
  </select>
</template>

<script>
export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      modem: '',
      modemOptions: [{
          label: 'Modem A',
          value: 1,
          // modCode: ['BPSK 1/2', 'QPSK 1/2', '8PSK 1/2', '16APSK 1/2', 'BPSK 3/4', 'QPSK 3/4', '8PSK 3/4', '16APSK 3/4'],
          modSpec: [{
            modCode: "BPSK 1/2",
            modCodeValue: 1,
            ebNo: 7,
            fec: 0.5,
            bt: 1.05
          },
          {
            modCode: "QPSK 1/2",
            modCodeValue: 2,
            ebNo: 9,
            fec: 0.5,
            bt: 1.05
          },
          {
            modCode: "8PSK 3/4",
            modCodeValue: 3,
            ebNo: 10,
            fec: 0.75,
            bt: 1.2
          }]
          // modCodeValue: [1, 2, 3, 4],
          // ebNo: [1, 2, 3, 4, 8, 9],
          // bt: [1.05, 1.2, 1.35]
        },
        {
          label: 'Modem B',
          value: 2,
          // modCode: ['BPSK 1/2', 'QPSK 1/2', '8PSK 1/2', '16APSK 1/2', 'BPSK 3/4', 'QPSK 3/4', '8PSK 3/4'],
          // modCodeValue: [1, 2, 3],
          // ebNo: [1, 2, 3, 8],
          // bt: [1.05, 1.2]
          modSpec: [{
            modCode: "BPSK 1/2",
            modCodeValue: 1,
            ebNo: 7,
            fec: 0.5,
            bt: 1.05
          },
          {
            modCode: "QPSK 1/2",
            modCodeValue: 2,
            ebNo: 9,
            fec: 0.5,
            bt: 1.05
          }]
        }
      ]
    }
  },
  methods: {
    modemChanged(value) {
      let selectedModem = this.modemOptions.find(s => s.label === value);
      this.$emit('modemSelected', selectedModem);
    }
  }
}
</script>
