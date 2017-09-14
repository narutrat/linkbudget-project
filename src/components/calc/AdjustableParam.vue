<template>
<div>
  <div class="col-sm-4">
    <div class="row">Upfade A/B with availability (%)</div>
    <div class="row">Downfade A/B with availability (%)</div>
    <div class="row">SFD at desired attenuation</div>
    <div class="row">Allowable Flux Density</div>
    <div class="row">HPA Max Power Required</div>
    <div class="row">HPA Operating Power Both Fade</div>
  </div>

  <div class="col-sm-2">
    <div class="row">
      <input v-model="upFadePercent" class="form-control" style="text-align:center">
    </div>
    <div class="row">
      <input v-model="dnFadePercent" class="form-control" style="text-align:center">
    </div>
    <div class="row">{{avrFadePercent}}</div>
  </div>

  <div class="col-sm-2">
    <div class="row">xxx</div>
    <div class="row">xxx</div>
    <div class="row">{{sfdAtten_A}}</div>
    <div class="row">{{allowFluxDen_A}}</div>
    <div class="row">{{hpaMax_A}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth_A" class="form-control" style="text-align:center">
    </div>
  </div>

  <div class="col-sm-2">
    <div class="row">xxx</div>
    <div class="row">xxx</div>
    <div class="row">{{sfdAtten_B}}</div>
    <div class="row">{{allowFluxDen_B}}</div>
    <div class="row">{{hpaMax_B}}</div>
    <div class="row">
      <input v-model="hpaPowerBoth_B" class="form-control" style="text-align:center">
    </div>
  </div>

  <div class="col-sm-2">
    <div class="row">dB (ITU-R 618-6, 99)</div>
    <div class="row">dB (ITU-R 618-6, 99)</div>
    <div class="row">dBW/m^2</div>
    <div class="row">dBW/m^2</div>
    <div class="row">Watts</div>
    <div class="row">Watts</div>
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
      upFadePercent: '',
      dnFadePercent: '',
      avrFadePercent: '',
      sfdAtten_A: '',
      sfdAtten_B: '',
      allowFluxDen_A: '',
      allowFluxDen_B: '',
      hpaMax_A: '',
      hpaMax_B: '',
      hpaPowerBoth_A: '',
      hpaPowerBoth_B: ''


    }
  },
  methods: {
    paraChanged() {
      var designPara = [];
      var paraData = [];
      var vm = this;
      paraData.push(vm.bandwidthVal);
      paraData.push(vm.guardBandVal);
      vm.$emit('designPara', paraData);
    }
  }
}
</script>
