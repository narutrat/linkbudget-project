<template>
  <div>
    <v-select multiple :options="aLocation_options" :on-change="locationChanged"></v-select>
  </div>
  <!-- <select class="btn btn-default" @change="locationChanged($event.target.value)">
    <option>Select Location</option>
    <option v-for="locations in aLocation_options" :value="locations">
      {{ locations }}
    </option>
  </select> -->
</template>

<script>

  export default {
    data() {
      return {
          aLocation_options: [],
      }
    },
    methods: {
      // value is an array of selected locations
      locationChanged(value) {
        // let selectedLocationsA = this.aLocation_options.find(s => s.label === value);
        console.log(JSON.stringify(value, undefined, 2));
        this.$emit('locationSelected', value);
      }
    },
    created() {
        this.aLocation_options = [{
            label: 'LLK',
            dxConTourApstar7: -1,
            dxConTourExpress80E: -2,
            dxConTourABS2: -4,
            dxConTourTelkom3s: -5,
            dxConTourAsiasat4: -6,
            dxConTourCosmos: -7,
            dxConTourPotok: -8,
            lat: 14.08,
            long: 100.57,
            eirp: 40.5,
            gt: 1.09,
            id: 'a'
          },
          {
            label: 'Satoon',
            dxConTourApstar7: -10,
            dxConTourExpress80E: -20,
            dxConTourABS2: -40,
            dxConTourTelkom3s: -50,
            dxConTourAsiasat4: -60,
            dxConTourCosmos: -70,
            dxConTourPotok: -80,
            lat: 6,
            long: 100.1,
            eirp: 40.16,
            gt: 0.56,
            id: 'b'
          },
          {
            label: 'Bangkok',
            dxConTourApstar7: -11,
            dxConTourExpress80E: -12,
            dxConTourABS2: -14,
            dxConTourTelkom3s: -15,
            dxConTourAsiasat4: -16,
            dxConTourCosmos: -17,
            dxConTourPotok: -18,
            lat: 13.75,
            long: 100.57,
            eirp: 40.51,
            gt: 1.09,
            id: 'c'
          }
        ];
    }
  }
</script>
