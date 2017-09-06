<template>
  <select class="btn btn-default" @change="tpChanged($event.target.value)">
    <option value="">Select Transponder</option>
    <option v-for="transponder in tpOptions" :value="transponder">
      {{ transponder }}
    </option>
  </select>
</template>

<script>
  export default {
    props: ['beams'],
    data() {
      return {
        tpDatabase: [{
            beams: 'Standard-C',
            transponders: ["1V", "2V", "3V"],
            maxEirpNon: 40.51,
            ulPol: 'H',
            dnPol: 'V'
          },
          {
            beams: 'Extended-C',
            transponders: ["1E", "2E", "3E"],
            maxEirpNon: 40.51,
            ulPol: 'H',
            dnPol: 'V'
          },
          {
            beams: 'Global',
            transponders: ["1G", "2G", "3G"],
            maxEirpNon: 36.85,
            ulPol: 'V',
            dnPol: 'H'
          },
          {
            beams: 'C1',
            transponders: ["1H", "2H", "3H"],
            maxEirpNon: 41,
            ulPol: 'V',
            dnPol: 'H'
          },
          {
            beams: 'C2',
            transponders: ["1H", "2H", "3H"],
            maxEirpNon: 34.66,
            ulPol: 'V',
            dnPol: 'H'
          },
          {
            beams: 'Regional',
            transponders: ["1V", "2V", "3V"],
            maxEirpNon: 40,
            ulPol: 'H',
            dnPol: 'V'
          },
          {
            beams: 'Semi',
            transponders: ["1V", "2V", "3V"],
            maxEirpNon: 40,
            ulPol: 'H',
            dnPol: 'V'
          }
        ]

      }
    },
    computed: {
      tpOptions() {
        let result = this.tpDatabase.find(x => x.beams === this.beams);
        return result ? result.transponders : [];
      }
    },
    methods: {
      tpChanged(value) {
        this.$emit('tpSelected', value);
      }
    }
  }
</script>
