<template>
  <div class="app">

    <div class="row">
      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Satellite</h3>

      <!-- Satellite Label -->
      <div class="col-sm-1 blue-box1">
        <span>Satellite: {{ selectedSatellite.text }} </span>
      </div>

      <!-- Satellite selector -->
      <div class="col-sm-2">

        <!-- Construct a satellite selector, which listens to event 'satelliteSelected' where the satellite selector component sends the satellite object back when the input is changed -->
        <satellite-selector @satelliteSelected="updateSatellite"></satellite-selector>

      </div>

      <!-- Beam Label -->
      <div class="col-sm-1 blue-box1">
        <span>Beam: {{ selectedBeam }}</span>
      </div>

      <!-- Beam selector -->
      <div class="col-sm-1">

        <!-- Construct a beam selector, which listens to event 'beamSelected' where the beam selector component sends the String beam name back when the input is changed -->
        <!-- Also pass satellite name as a prop -->
        <beam-selector :satelliteName="selectedSatellite.text" @beamSelected="updateBeam"></beam-selector>

      </div>
    </div>

  </div>
</template>

<script>
  import SatelliteSelector from './inputs/SatelliteSelector' // Don't need to put .vue here
  import BeamSelector from './inputs/BeamSelector'

  export default {
      data() {
          return {
              selectedSatellite : {}, // satellite object
              selectedBeam: '', // beam name (String)
          };
      },
      components: { // Allow components to be used as HTML element
        SatelliteSelector,
        BeamSelector,
      },
      methods: {
          // Called from the 'satelliteSelected' event of SatelliteSelector. The 'satellite' argument of this function comes 2nd argument of this.$emit() inside SatelliteSelector.vue
          updateSatellite(satellite) {
              this.selectedSatellite = satellite;
          },
          // Called from the 'beamSelected' event of BeamSelector. The 'beam' argument of this function comes from 2nd arguemnt of this.$emit() inside BeamSelector.vue
          updateBeam(beam) {
              this.selectedBeam = beam;
          }

      }
  }
</script>

<style>
  .blue-box1 {
    margin-left: 15px;
    padding: 4px;
    border: black solid;
    border-radius: 8px;
    background-color: #337AB7;
    color: white;
  }
  .blue-box2 {
    padding: 4px;
    border: black solid;
    border-radius: 8px;
    background-color: #337AB7;
    color: white;
  }
</style>
