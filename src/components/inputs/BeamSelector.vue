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
            beamDatabase: [{
              satellite: 'Thaicom 5',
              beams: ["Standard-C", "Extended-C", "Global"]
            },
              {
                satellite: 'Thaicom 6',
                beams: ["C1", "C2"]
              },
              {
                satellite: 'Thaicom 7',
                beams: ["Regional", "Semi"]
              }
            ],
          }
      },
      computed: {
          beamOptions() {
            // When this component's satellite name prop is updated, call the API to get beams from database with the given satellite
            //return <method to call API here>

            // Without API, we use this.beamDatabase instead for now
            // Construct beamOptions from the satelliteName that is given from parent template via props
            let result = this.beamDatabase.find(x => x.satellite === this.satelliteName);

            // If result is NOT undefined, set beamOptions to the result.beams. Otherwise, set it to an empty array
            return result ? result.beams : [];
        }
      },
      methods: {
        beamChanged(value) {
          // Send the current beam name to parent template. For parent template to get a value,
          // it must listen to the event 'beamSelected'
            this.$emit('beamSelected', value);
        }
      }
  }
</script>
