<template>
<div>
  <div class="col-sm-4" style="text-align:left">
    <div class="row">Location</div>
    <div class="row">Latitude (deg)</div>
    <div class="row">Longitude (deg)</div>
    <div class="row">Antenna Efficiency Tx/Rx</div>
    <div class="row">Xmitted Ant Gain</div>
    <div class="row">Receive Antenna Gain</div>
    <div class="row">Receive Antenna Temperature</div>
    <div class="row">Loss from Ant Feed to LNA</div>
    <div class="row">Receive LNA Noise Temperature</div>
    <div class="row">Receive LNA Gain</div>
    <div class="row">Downconverter Noise Figure</div>
    <div class="row">Receive ES Tsys</div>
    <div class="row">G/T</div>
  </div>

  <div class="col-sm-2">Country: {{country}}</div>

  <div class="col-sm-2">
    <div class="row">
      <select v-model="locationSel" class="btn btn-default" @change="updateLocation">
        <option v-for="locate in locationSelected" v-bind:value="locate">
          {{ locate }}
        </option>
      </select>
    </div>

    <div class="row">
      <input v-model="latSel" class="form-control" style="text-align:center">
      <!-- <input v-model="this.selLocations.selectedLocationsA.lat" class="form-control" style="text-align:center"> -->
    </div>
    <div class="row">
      <input v-model="longSel" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="this.locationSelInfo.antEffVal" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      {{antGainVal.toFixed(2)}}
      <!-- {{this.locationSelInfo.antEffVal}}
      {{this.locationSelInfo.antSizeA}}
      {{this.locationSelInfo.frqUp_A}} -->
    </div>
    <div class="row">
      {{antGainReceive}}
    </div>
    <div class="row">
      <input v-model="this.locationSelInfo.rxAntTempVal" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="this.locationSelInfo.lossFeedA" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="this.locationSelInfo.lnaTempVal" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="rxLnaGain" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="dnNoise" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      {{tsys}}
    </div>
    <div class="row">
      {{gtES}}
    </div>

  </div>

  <div class="col-sm-2">
    <div class="row">ID</div>
    <div class="row">{{latRad.toFixed(4)}}</div>
    <div class="row">{{longRad.toFixed(4)}}</div>
    <div class="row">
      <input v-model="this.locationSelInfo.antEffVal" class="form-control" style="text-align:center">
    </div>
    <div class="row">dBi at</div>
    <div class="row">dBi</div>
    <div class="row">Kelvin</div>
    <div class="row">dB</div>
    <div class="row">Kelvin</div>
    <div class="row">dB</div>
    <div class="row">dB</div>
    <div class="row">Kelvin</div>
    <div class="row">dBi/K</div>
  </div>

  <div class="col-sm-2">
    <div class="row"></div>
    <div class="row">rad</div>
    <div class="row">rad</div>
    <div class="row">%</div>
    <div class="row">{{this.locationSelInfo.frqUp_A}} GHz</div>
    <div class="row">Size: {{this.locationSelInfo.antSizeA}}</div>
    <div class="row">D/C.Gain (dB)</div>

    <div class="row">
      <input v-model="dcGain" class="form-control" style="text-align:center">
    </div>

    <div class="row">IFL Loss (dB)</div>

    <div class="row">
      <input v-model="iflLoss" class="form-control" style="text-align:center">
    </div>

  </div>
{{eirpdown.value}}
{{ gt.value }}
</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['selLocations', 'locationSelInfo'],
  data() {
    return {
      selectedLocations: '',
      locationSel: '',
      // latSel: '',
      // longSel: '',
      antEffVal: '',
      // antGainVal: '',
      antGainValCal: '',
      // antGainReceive: '',
      // rxTempVal: '',
      lossFeed: '',
      lnaTempVal: '',
      rxLnaGain: 60,
      dnNoise: 1,
      // tsys: '',
      // gtES: '',
      // latRad: '',
      // longRad: '',
      upFrq: '',
      antSize: '',
      dcGain: 0,
      iflLoss: 0,
      celeritas: 299792500
    }
  },
  computed: {
    locationSelected() {
      if (this.selLocations) {
        return this.selLocations.map(x => x.city)
      } else {
        return [];
      }
    },
    country() {
      let result = this.selLocations.find(x => x.city === this.locationSel)
      return result ? result.country : [];
    },
    latSel() {
      let result = this.selLocations.find(x => x.city === this.locationSel)
      return result ? result.lat : [];
    },
    latRad() {
      return this.latSel * Math.PI / 180;
    },
    longSel() {
      let result = this.selLocations.find(x => x.city === this.locationSel)
      return result ? result.lon : [];
    },
    longRad() {
      return this.longSel * Math.PI / 180;
    },
    antGainVal() {
      return 10 * Math.log10((this.locationSelInfo.antEffVal / 100) * (Math.pow(Math.PI * this.locationSelInfo.antSizeA / (this.celeritas / (this.locationSelInfo.frqUp_A * 1000000000)), 2)));
    },
    antGainReceive() {
      return 10 * Math.log10(4 * Math.PI * (this.locationSelInfo.antEffVal / 100) * (Math.PI * Math.pow(this.locationSelInfo.antSizeA, 2) / 4) / Math.pow((this.celeritas / (this.locationSelInfo.selectedTp.downFrq * 1000000000)), 2));
    },
    tsys() {
      return parseFloat(this.locationSelInfo.rxAntTempVal) + ((Math.pow(10, (this.locationSelInfo.lossFeedA / 10)) - 1) * 290) + (Math.pow(10, (this.locationSelInfo.lossFeedA / 10)) * this.locationSelInfo.lnaTempVal) +
        ((Math.pow(10, (this.locationSelInfo.lossFeedA / 10))) * ((Math.pow(10, (this.dnNoise / 10)) - 1) * 290) / (Math.pow(10, (this.rxLnaGain / 10)))) +
        (((Math.pow(10, (this.iflLoss / 10))) - 1) * 290) / ((Math.pow(10, (this.rxLnaGain / 10))) * (Math.pow(10, (this.dcGain / 10))));
    },
    gtES() {
      return this.antGainReceive - (10 * Math.log10(this.tsys));
    },
    eirpdown() {
      if (this.selLocations && this.locationSelInfo.selectedBeam) {
        var result = this.selLocations.find(x => x.city === this.locationSel)
        return result ? result.data.find(x => x.beam === this.locationSelInfo.selectedBeam && x.type ==='downlink') : [];
      } else {
        return [];
      }
    },
    gt() {
      if (this.selLocations && this.locationSelInfo.selectedBeam) {
        var result = this.selLocations.find(x => x.city === this.locationSel)
        return result ? result.data.find(x => x.beam === this.locationSelInfo.selectedBeam && x.type ==='uplink') : [];
      } else {
        return [];
      }
    },
  },
  methods: {
    updateLocation() {
      var objLocation = this.selLocations.find(x => x.label === this.locationSel);
      this.$emit('locationObjSel', objLocation);
    }
  },
  watch: {
    'selLocations' (newVal, oldVal) {
      this.locationSel = this.locationSelected[0];
    },
    'locationSelInfo' (newVal, oldVal) {
      console.log('The outgoing value is ' + JSON.stringify( {
        selLocations: this.selLocations,
        locationSelected: this.locationSelected,
        country: this.country,
        latSel: this.latSel,
        latRad: this.latRad,
        longSel: this.longSel,
        longRad: this.longRad,
        antEffVal: this.locationSelInfo.antEffVal, //a
        //b
        antGainVal: this.antGainVal,
        antGainReceive: this.antGainReceive,
        rxAntTempVal: this.locationSelInfo.rxAntTempVal,
        lossFeedA: this.locationSelInfo.lossFeedA,
        lnaTempVal: this.locationSelInfo.lnaTempVal,
        rxLnaGain: this.rxLnaGain,
        dnNoise: this.dnNoise,
        tsys: this.tsys,
        gtES: this.gtES,
        celeritas: this.celeritas,
        eirpdown: this.eirpdown,
        gt: this.gt
      }, undefined,2))

      this.$emit('updateLocationInfo', {
        selLocations: this.selLocations,
        locationSelected: this.locationSelected,
        country: this.country,
        latSel: this.latSel,
        latRad: this.latRad,
        longSel: this.longSel,
        longRad: this.longRad,
        antEffVal: this.locationSelInfo.antEffVal, //a
        //b
        antGainVal: this.antGainVal,
        antGainReceive: this.antGainReceive,
        rxAntTempVal: this.locationSelInfo.rxAntTempVal,
        lossFeedA: this.locationSelInfo.lossFeedA,
        lnaTempVal: this.locationSelInfo.lnaTempVal,
        rxLnaGain: this.rxLnaGain,
        dnNoise: this.dnNoise,
        tsys: this.tsys,
        gtES: this.gtES,
        celeritas: this.celeritas,
        eirpdown: this.eirpdown,
        gt: this.gt
      })
    }
  }
}
</script>
