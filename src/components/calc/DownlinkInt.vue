<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{topo}}</div>
    <div class="row">
      <input v-model="downlinkPdenSel" class="form-control">
    </div>
    <div class="row">{{grr.toFixed(4)}}</div>
    <div class="row">
      <input v-model="this.downlinkInt.polImp" class="form-control">
    </div>
    <div class="row">
      <input v-model="this.downlinkInt.esAdj" class="form-control">
    </div>
    <div class="row">{{ciDn.toFixed(4)}}</div>
  </div>
</div>
</template>

<script>
  // import DesignParam from './calc/DesignParam'

  export default {
    props: ['downlinkInt'],
    data() {
      return {

      }
    },
    computed: {
      topo() {
        // return (Math.abs(this.adjSlot1 - this.selectedSatellite.orbital_slot) - 0.15) * 1.1;
        // return (Math.abs(76.5 - this.uplinkInt.selectedSatellite.orbital_slot) - 0.15) * 1.1;
        return this.downlinkInt.topo;
      },
      downlinkPdenSel() {
				// var vm = this;
				// let result = [];
				// result = this.adjSatDatabase.find(function(x) {
				// 	return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
				// });
				// if (result) {
				// 	if (vm.carrierType === true) {
				// 		return result.downlinkPdens_SCPC;
				// 	} else {
				// 		return result.downlinkPdens_MCPC;
				// 	}
				// }
				// return [];
        return this.downlinkInt.downlinkPdenSel;
			},
      grr() {
        var Gmax = 10 * Math.log10((this.downlinkInt.antEffVal / 100) * Math.pow((this.downlinkInt.antSize * this.downlinkInt.frqDnB * Math.PI / 0.3), 2));
				var lamda = 0.3 / this.downlinkInt.frqDnA;
				var theta_r = 95 * lamda / this.downlinkInt.antSize;
				var g1 = 29 - 25 * Math.log10(theta_r);
				var theta_m = lamda / this.downlinkInt.antSize * Math.sqrt((Gmax - g1) / 0.0025);
				var theta_b = Math.pow(10, (34 / 25));

				if (Math.abs(this.topo) < theta_m) {
					var x = Gmax - 0.0025 * Math.pow((this.downlinkInt.antSize / lamda * this.topo), 2);
				} else if (Math.abs(this.topo) < theta_r) {
					var x = g1;
				} else if (Math.abs(this.topo) < theta_b) {
					var x = 29 - 25 * Math.log10(Math.abs(this.topo));
				} else if (Math.abs(this.topo) < 70) {
					var x = -5;
				} else {
					var x = 0;
				}

				return Gmax - x;
      },
      ciDn() {
				return this.downlinkInt.eirpDnDenClear - (this.downlinkPdenSel + this.downlinkInt.esAdj) + this.grr + this.downlinkInt.polImp;
			},
    },
    watch: {
      'downlinkInt'(newVal, oldVal) {
        this.$emit('updateDownlinkInt', {
          ciDn: this.ciDn,
        });
        // this.allowBW= newVal.allowBWVal;
      }
    },
  }
</script>
