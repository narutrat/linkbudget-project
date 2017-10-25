<template>
<div>
  <div class="col-sm-2">
    <div class="row">{{topo}}</div>
    <div class="row">
      <input v-model="downlinkPdenSel" class="form-control" style="text-align:center; margin-top:20px" @input="updateDown">
    </div>
    <div class="row" style="margin-top:20px">{{grr.toFixed(4)}}</div>
    <div class="row">
      <input v-model="polImp" class="form-control" style="text-align:center; margin-top:12px" @input="updateDown">
    </div>
    <div class="row">
      <input v-model="esAdj" class="form-control" style="text-align:center; margin-top:14px" @input="updateDown">
    </div>
    <div class="row" style="margin-top:6px">{{ciDn.toFixed(4)}}</div>
  </div>
</div>
</template>

<script>
  // import DesignParam from './calc/DesignParam'

  export default {
    props: ['downlinkInt'],
    data() {
      return {
        topo: '',
        downlinkPdenSel: '',
        polImp: '',
        esAdj: '',

      }
    },
    computed: {
      // topo() {
      //   // return (Math.abs(this.adjSlot1 - this.selectedSatellite.orbital_slot) - 0.15) * 1.1;
      //   // return (Math.abs(76.5 - this.uplinkInt.selectedSatellite.orbital_slot) - 0.15) * 1.1;
      //   return this.downlinkInt.topo;
      // },
      // downlinkPdenSel() {
			// 	// var vm = this;
			// 	// let result = [];
			// 	// result = this.adjSatDatabase.find(function(x) {
			// 	// 	return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
			// 	// });
			// 	// if (result) {
			// 	// 	if (vm.carrierType === true) {
			// 	// 		return result.downlinkPdens_SCPC;
			// 	// 	} else {
			// 	// 		return result.downlinkPdens_MCPC;
			// 	// 	}
			// 	// }
			// 	// return [];
      //   return this.downlinkInt.downlinkPdenSel;
			// },
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
				return parseFloat(this.downlinkInt.eirpDnDenClear) - (parseFloat(this.downlinkPdenSel) + parseFloat(this.esAdj)) + parseFloat(this.grr) + parseFloat(this.polImp);
			},
    },
    methods: {
      updateDown() {
        this.$emit('updateDownlinkInt', {
          topo: +this.topo,
          downlinkPdenSel: +this.downlinkPdenSel,
          grr: +this.grr,
          polImp: +this.polImp,
          esAdj: +this.esAdj,
          ciDn: +this.ciDn,

        });
      },
    },
    watch: {
      'downlinkInt'(newVal, oldVal) {
        this.topo = newVal.topo;
        this.downlinkPdenSel = newVal.downlinkPdenSel;
        this.polImp = newVal.polImp;
        this.esAdj = newVal.esAdj;

        this.$emit('updateDownlinkInt', {
          topo: +this.topo,
          downlinkPdenSel: +this.downlinkPdenSel,
          grr: +this.grr,
          polImp: +this.polImp,
          esAdj: +this.esAdj,
          ciDn: +this.ciDn,

        });
        // this.allowBW= newVal.allowBWVal;
      }
    },
  }
</script>
