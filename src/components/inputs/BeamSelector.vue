<template>
  <select class="btn btn-default" @change="beamChanged($event.target.value)">
    <option>Select Beam</option>
    <option v-for="beam in beamOptions" :value="beam">
      {{ beam }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      beamOptions: [],
      // selectedBeam: '',
      // beamDatabase: [{
      //     satellite: 'Thaicom 5',
      //     beams: [{
      //       beamName: "Standard-C",
      //       transponders: ["1V", "2V", "3V"],
      //       maxEirpNon: 40.51,
      //       ulPol: 'H',
      //       dnPol: 'V'
      //     },
      //     {
      //       beamName: "Extended-C",
      //       transponders: ["1E", "2E", "3E"],
      //       maxEirpNon: 40.51,
      //       ulPol: 'H',
      //       dnPol: 'V'
      //     },
      //     {
      //       beamName: "Global",
      //       transponders: ["1G", "2G", "3G"],
      //       maxEirpNon: 36.85,
      //       ulPol: 'V',
      //       dnPol: 'H'
      //     }
      //   ]},
      //
      //   {
      //     satellite: 'Thaicom 6',
      //     beams: [{
      //       beamName: "C1",
      //       transponders: ["1H", "2H", "3H"],
      //       maxEirpNon: 41,
      //       ulPol: 'V',
      //       dnPol: 'H'
      //     },
      //     {
      //       beamName: "C2",
      //       transponders: ["1H", "2H", "3H"],
      //       maxEirpNon: 34.66,
      //       ulPol: 'V',
      //       dnPol: 'H'
      //     }
      //   ]},
      //   {
      //     satellite: 'Thaicom 7',
      //     beams: [{
      //       beamName: "Regional",
      //       transponders: ["1V", "2V", "3V"],
      //       maxEirpNon: 40,
      //       ulPol: 'H',
      //       dnPol: 'V'
      //     },
      //     {
      //       beamName: "Semi",
      //       transponders: ["1V", "2V", "3V"],
      //       maxEirpNon: 40,
      //       ulPol: 'H',
      //       dnPol: 'V'
      //     }
      //   ]}
      // ],
    }
  },
  computed: {

  },
  methods: {
    beamChanged(value) {
      // Send the current beam name to parent template. For parent template to get a value,
      // it must listen to the event 'beamSelected'
      // let dataBeam = this.beamOptions.find(x => value === x.beamName)
      this.$emit('beamSelected', value);
    }
  },
  watch: {
    'satelliteName' (newVal) {
      this.$http.post('beams', {'satellite':newVal}).then(response => {
        this.beamOptions = response.body.beams;
        console.log(response);
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>
