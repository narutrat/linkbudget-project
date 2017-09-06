<template>
  <ul>
    <li v-for="sat in adjSat" :value="sat">
      <!-- <div class="col-sm-1" :value="adjSat"> -->
      {{ sat }}
    </li>
  </ul>

</template>

<script>
export default {
  props: ['satelliteName'],
  data() {
    return {
      // adjSat: ['Apstar7', 'Express80E'],
      adjSat: [],
      adjSatSel: [{
          label: 'Thaicom 5',
          adjSat: ['Apstar7', 'Express80E']
        },
        {
          label: 'Thaicom 6',
          adjSat: ['Apstar7', 'Express80E']
        },
        {
          label: 'Thaicom 7',
          adjSat: ['Asiasat4', 'Telkom3s']
        },
        {
          label: 'Thaicom 8',
          adjSat: ['Apstar7', 'Express80E']
        }
      ],
    }
  },
  computed: {
    sat() {
      let result = this.adjSatSel.find(x => x.label === this.satelliteName);
      return result ? result.adjSat : [];
    }
  },
  // computed: {
  //   beamChanged(value) {
  //     let selectedSatellite = this.satelliteOptions.find(s => s.text === value);
  //     this.$emit('adjSatSelected', value);
  //   }
  // }
}
</script>
