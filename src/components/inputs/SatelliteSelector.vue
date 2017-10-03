<template>
  <select class="btn btn-default" @change="satelliteChanged($event.target.value)">
    <option>Select Satellite</option>
    <option v-for="satellite in satelliteOptions" :value="satellite.name">
      {{ satellite.name }}
    </option>
  </select>
</template>

<script>
  export default {
      data() {
          return {
              satelliteOptions: [],
          }
      },
      methods: {
          satelliteChanged(value) {
              // Find the satellite object from satellite options array by using value from dropdown
              let selectedSatellite = this.satelliteOptions.find(s => s.name === value);

              // Send the current satellite object to parent template. For parent template to get a value,
              // it must listen to the event 'satelliteSelected'
              this.$emit('satelliteSelected', selectedSatellite);

          }
      },
      created() {
          // When this component is created, call the API to get satellites from database

          //this.satelliteOptions = <method to call API here>
          // this.satelliteOptions = [{
          //   text: 'Thaicom 5',
          //   value: 5,
          //   orbitalSlot: 78.5,
          //   sfd: 80,
          //   maxAtten: 16,
          //   adjSat: ['Apstar7', 'Express80E']
          // },
          //   {
          //     text: 'Thaicom 6',
          //     value: 6,
          //     orbitalSlot: 78.5,
          //     sfd: 82,
          //     maxAtten: 16,
          //     adjSat: ['Apstar7', 'Express80E']
          //   },
          //   {
          //     text: 'Thaicom 7',
          //     value: 7,
          //     orbitalSlot: 119.92,
          //     sfd: 80,
          //     maxAtten: 16,
          //     adjSat: ['Asiasat4', 'Telkom3s']
          //   },
          //   {
          //     text: 'Thaicom 8',
          //     value: 8,
          //     orbitalSlot: 78.5,
          //     sfd: 81,
          //     maxAtten: 16,
          //     adjSat: ['Apstar7', 'Express80E']
          //   }
          // ];

          this.$http.get('satellites').then(response => {
            this.satelliteOptions = response.body.satellites;
            console.log(response);
          }).catch((e) => {
            console.log(e);
          })
      }
  }
</script>
