<template>
<div>
  <div class="col-sm-4" style="text-align:left">
    <div class="row">Longitude Difference</div>
    <div class="row">Central Angle</div>
    <div class="row">Slant Range</div>
    <div class="row">Azimuth Angle</div>
    <div class="row">Elevation Angle</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row">{{longDiff.toFixed(4)}}</div>
    <div class="row">{{centralAngle.toFixed(4)}}</div>
    <!-- <div class="row">{{this.azElRange.locationInfo.latRad}}</div> -->
    <div class="row">{{slantRange.toFixed(4)}}</div>
    <div class="row">{{azAngle.toFixed(4)}}</div>
    <div class="row">{{elAngle.toFixed(4)}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row">rad</div>
    <div class="row">rad</div>
    <div class="row">km</div>
    <div class="row">deg</div>
    <div class="row">deg</div>
  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['azElRange'],
  data() {
    return {
      // longDiff: '',
      // centralAngle: '',
      // slantRange: '',
      // azAngle: '',
      // elAngle: '',
    }
  },
  computed: {
    orbitPoint() {
      var vm = this;
      if (this.azElRange.selectedSatellite) {
        return this.azElRange.selectedSatellite.orbitalSlot * Math.PI / 180;
      } else {
        return [];
      }

    },
    longDiff() {
      return (this.azElRange.locationInfo.longRad) - (this.orbitPoint);
      // if (this.azElRange.selectedLocationsA && this.azElRange.selectedSatellite) {
      //   return (this.azElRange.locationInfo.longRad) - (this.orbitPoint);
      // } else {
      //   return 0;
      // }

    },
    centralAngle() {
      return Math.acos(Math.cos(this.azElRange.locationInfo.latRad) * Math.cos(this.longDiff));
    },
    slantRange() {
      return Math.sqrt(Math.pow(this.azElRange.altitude, 2) + (2 * this.azElRange.earthR * (this.azElRange.altitude + this.azElRange.earthR) * (1 - Math.cos(this.azElRange.locationInfo.latRad) * Math.cos(this.longDiff))));
    },
    azAngle() {
      var c = (this.azElRange.selectedSatellite.orbitalSlot - this.azElRange.locationInfo.longSel) * Math.PI / 180;
      var a = Math.abs(Math.atan(Math.tan((Math.abs(c))) / Math.sin(this.azElRange.locationInfo.latRad)) * 180 / Math.PI);

      if (this.azElRange.locationInfo.latSel >= 0) {
        if (this.azElRange.locationInfo.longSel - this.azElRange.selectedSatellite.orbitalSlot >= 0) {
          return 180 + a;
        } else {
          return 180 - a
        }
      } else {
        if (this.azElRange.locationInfo.longSel - this.azElRange.selectedSatellite.orbitalSlot >= 0) {
          return 360 + a;
        } else {
          return a
        }
      }
    },
    elAngle() {
      var c = (this.azElRange.selectedSatellite.orbitalSlot - this.azElRange.locationInfo.longSel) * Math.PI / 180;
      return (180 / Math.PI) * Math.atan((Math.cos(c) * Math.cos(this.azElRange.locationInfo.latRad) - 0.15126) / Math.sqrt(Math.pow(Math.sin(c), 2) + Math.pow(Math.cos(c), 2) * Math.pow(Math.sin(this.azElRange.locationInfo.latRad), 2)));
    },
  },
  watch: {
    'azElRange' (newVal, oldVal) {
      this.$emit('updateAzElRange', {
        longDiff: this.longDiff,
        centralAngle: this.centralAngle,
        slantRange: this.slantRange,
        azAngle: this.azAngle,
        elAngle: this.elAngle,
      })
    }
  }

}
</script>
