<template>
<div>

  <div class="col-sm-4" style="text-align:left">
    <div class="row" style="margin-top:15px">Sat. Attenuation Setting</div>
    <div class="row" style="margin-top:10px">Attenuator Range</div>
    <div class="row" style="margin-top:15px">ES A antenna Diameter</div>
    <div class="row" style="margin-top:10px">ES B antenna Diameter</div>
  </div>

  <div class="col-sm-2"></div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:5px">
      <input v-model="this.satDesign.selectedTp.default_atten" class="form-control" style="text-align:center" @change="updateSatDesignParam">
    </div>
    <div class="row" style="margin-top:10px">{{this.satDesign.selectedTp.atten_range || 0}}</div>
    <div class="row" style="margin-top:5px">
      <input v-model="this.satDesign.antSizeA" class="form-control" style="text-align:center" @change="updateSatDesignParam">
    </div>
    <div class="row">
      <input v-model="this.satDesign.antSizeB" class="form-control" style="text-align:center" @change="updateSatDesignParam">
    </div>
  </div>

  <div class="col-sm-2">
    <div class="row" style="margin-top:15px">dB</div>
    <div class="row" style="margin-top:10px">dB</div>
    <div class="row" style="margin-top:15px">m.</div>
    <div class="row" style="margin-top:10px">m.</div>
  </div>

  <div class="row" style="margin-bottom:10px"></div>

</div>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['satDesign'],
  data() {
    return {
atten: "",
antSizeA: "",
antSizeB: ""
    }
  },
  methods: {
    updateSatDesignParam() {
      // this.allowBw = parseFloat(this.bandwidth) * (1 + parseFloat(this.guardBandVal) / 100);
      this.$emit('updateSatDesignData', {
        atten: this.atten,
        antSizeA: this.antSizeA,
        antSizeB: this.antSizeB,
      })
    },

  },
  watch: {
    'satDesign'(newVal, oldVal) {
      this.$emit('updateSatDesignData', {
        atten: this.atten,
        antSizeA: this.antSizeA,
        antSizeB: this.antSizeB,
      });
      // this.allowBW= newVal.allowBWVal;
    }
  },
}
</script>
