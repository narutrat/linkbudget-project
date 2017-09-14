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

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row">
      <select v-model="LocationA" class="btn btn-default">
      <option v-for="LocationA in selectedLocations_A">
        {{ LocationA }}
      </option>
    </select>
    </div>
    <div class="row">
      <input v-model="latSel_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="longSel_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="antEffVal_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      {{antGainValCal_A}}
    </div>
    <div class="row">
      {{antGainReceive_A}}
    </div>
    <div class="row">
      <input v-model="rxTempVal_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="lossFeed_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="lnaTempVal_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="rxLnaGain_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="dnNoise_A" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      {{tsys_A}}
    </div>
    <div class="row">
      {{gtES_A}}
    </div>

  </div>

  <div class="col-sm-2">
    <div class="row">ID</div>
    <div class="row">{{latRad_A}}</div>
    <div class="row">{{longRad_A}}</div>
    <div class="row">
      <input v-model="antEffVal_A" class="form-control" style="text-align:center">
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
    <div class="row">{{upFrq}} GHz</div>
    <div class="row">Size: {{antSizeA}}</div>
    <div class="row">D/C.Gain (dB)</div>

    <div class="row">
      <input v-model="dcGain" class="form-control" style="text-align:center">
    </div>

    <div class="row">IFL Loss (dB)</div>

    <div class="row">
      <input v-model="iflLoss" class="form-control" style="text-align:center">
    </div>

  </div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['bandwidthVal'],
  data() {
    return {
      selectedLocations_A: '',
      LocationA: '',
      latSel_A: '',
      longSel_A: '',
      antEffVal_A: '',
      antGainValCal_A: '',
      antGainReceive_A: '',
      rxTempVal_A: '',
      lossFeed_A: '',
      lnaTempVal_A: '',
      rxLnaGain_A: '',
      dnNoise_A: '',
      tsys_A: '',
      gtES_A: '',
      latRad_A: '',
      longRad_A: '',
      upFrq: '',
      antSizeA: '',
      dcGain: '',
      iflLoss: ''
    }
  },
}
</script>
