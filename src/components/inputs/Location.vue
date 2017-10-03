<template>
  <div>
    <v-select multiple label="name" :options="locationOptions" :on-change="locationChanged"></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locationOptions: [],
    }
  },
  methods: {
    // value is an array of selected locations
    locationChanged(value) {
      // let selectedLocationsA = this.locationOptions.find(s => s.name === value);
      // console.log(JSON.stringify(value, undefined, 2));
      this.$emit('locationSelected', value);
    }
  },
  created() {
    this.$http.get('locations').then(response => {
      this.locationOptions = response.body.locations;
      console.log(response);
    }).catch((e) => {
      console.log(e);
    })

    // this.aLocation_options = [{
    //     label: 'LLK',
    //     adjDxContour: [{
    //         adjSatName: 'Apstar7',
    //         value: -1
    //       },
    //       {
    //         adjSatName: 'Express80E',
    //         value: -2
    //       }
    //     ],
    //     lat: 14.08,
    //     long: 100.57,
    //     eirp: 40.5,
    //     gt: 1.09,
    //   },
    //   {
    //     label: 'Satoon',
    //     adjDxContour: [{
    //         adjSatName: 'Apstar7',
    //         value: -3
    //       },
    //       {
    //         adjSatName: 'Express80E',
    //         value: -24
    //       },
    //     ],
    //     lat: 6,
    //     long: 100.1,
    //     eirp: 40.16,
    //     gt: 0.56,
    //   },
    //   {
    //     label: 'Bangkok',
    //     adjDxContour: [{
    //         adjSatName: 'Apstar7',
    //         value: -5
    //       },
    //       {
    //         adjSatName: 'Express80E',
    //         value: -6
    //       },
    //     ],
    //     lat: 13.75,
    //     long: 100.57,
    //     eirp: 40.51,
    //     gt: 1.09,
    //   }
    // ];
  }
}
</script>
