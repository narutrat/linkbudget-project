<template>
<!-- <div id="app" style="margin-right:20px"> -->
<div>

  <!-- ////////////////////////////// Section1: Satellite //////////////////////////////-->
  <!-- /////////////// Satellite /////////////// -->
  <div class="row" style="padding:10px">

    <div style="margin-left:20px; margin-top:5px; font-weight:bold">Summary Link Budget on THAICOM-{{this.sumData.selectedSatellite.name}} Beam-{{this.sumData.selectedBeam}}</div>

    <div class="row" style="margin:1px; margin-left:20px; text-align:center">
      <div class="col-sm-2"></div>

      <div class="col-sm-4" style="padding:2px; border:solid; border-width: 1px 1px 0px 1px">Location A</div>
      <div class="col-sm-4" style="padding:2px; border:solid; border-width: 1px 1px 0px 0px">Location B</div>
    </div>
    <div class="row" style="margin:1px; margin-left:20px; margin-top:-1px; text-align:center">
      <div class="col-sm-1" style="border:solid 1px">Location A</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 0px 1px 0px">Location B</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 1px">EIRP (dBW)</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">G/T (dBK-1)</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">Azimuth</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">Elevation</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">EIRP (dBW)</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">G/T (dBK-1)</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">Azimuth</div>
      <div class="col-sm-1" style="border:solid; border-width: 1px 1px 1px 0px">Elevation</div>
    </div>

    <div class="row" style="margin:1px; margin-left:20px; margin-top:-1px; text-align:center">
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 1px">{{this.sumData.cityA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 0px 1px 0px">{{this.sumData.cityB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 1px">{{this.sumData.eirpdownA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.gtA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.azAngleA.toFixed(2)}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.elAngleA.toFixed(2)}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.eirpdownB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.gtB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.azAngleB.toFixed(2)}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.sumData.elAngleB.toFixed(2)}}</div>
    </div>

    <div class="row" style="margin:1px; margin-left:20px">
      Case: Free of adjacent satellite / Consider adjacent satellite
    </div>


  </div>

  <div>
    <div class="row" style="margin:1px; margin-left:20px">
      <div style="background-color:gray; padding:4px; color:white">Summary of link Budget from Location A to Loation B</div>
    </div>
    <table style="margin-left:20px; font-size:10px">
      <!-- <table class="table table-bordered" style="margin-left:20px"> -->
      <thead style="margin:20px; line-height:15px">
        <tr>
          <!-- <div style="overflow-x:auto"> -->
          <th colspan="3">&nbsp</th>
          <th colspan="2">Antenna (m)</th>
          <th rowspan="2">Information Rate (kbps)</th>
          <th rowspan="2">FEC</th>
          <th rowspan="2">Eb/No Threshold</th>
          <th rowspan="2">Allocated BW (KHz)</th>
          <th rowspan="2">Uplink IFL (dB)</th>
          <th rowspan="2">HPA Power (watts)</th>
          <th colspan="5">Clear Sky</th>
          <th width="100px">Rain Both sides Eb/No</th>
          <th rowspan="2">Power utilization % A->B</th>
          <th rowspan="2">Guard band (%)</th>
          <th rowspan="2">BT Product</th>
          <th rowspan="2">Mod Type</th>
          <th v-if="this.sumData.selectedEbe === 'Show' "rowspan="2">EBE</th>
          <th rowspan="2">Total Link Availability</th>
          <th rowspan="2">Equivalent BW</th>
          <!-- </div> -->
        </tr>
        <tr>
          <th>

          </th>
          <th>Tx Location</th>
          <th>Rx Location</th>
          <th>Tx</th>
          <th>Rx</th>
          <th>C/N Total</th>
          <th>Eb/No</th>
          <th>Eb/No margin</th>
          <th>C/N up</th>
          <th>C/N down</th>
          <th>Eb/No</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in link" :key="data.id">
          <td>
            <button @click="removeLink(data.id)">X</button>
          </td>
          <td>{{data.sumData.cityA}}</td>
          <td>{{data.sumData.cityB}}</td>
          <td>{{data.sumData.antSizeA}}</td>
          <td>{{data.sumData.antSizeB}}</td>
          <td>{{data.sumData.infoValueA.toFixed(2)}}</td>
          <td>{{data.sumData.fecA}}</td>
          <td>{{data.sumData.ebNoA.toFixed(2)}}</td>
          <td>{{data.sumData.allowBWA}}</td>
          <td>{{data.sumData.iflLossA}}</td>
          <td>{{data.sumData.hpaPowerBothA}}</td>
          <td>{{data.sumData.cnTotalA.toFixed(2)}}</td>
          <td>{{data.sumData.ebNoA.toFixed(2)}}</td>
          <td>{{data.sumData.marginA.toFixed(2)}}</td>
          <td>{{data.sumData.cnUpA.toFixed(2)}}</td>
          <td>{{data.sumData.cnDnA.toFixed(2)}}</td>
          <td>{{data.sumData.ebNoBothA.toFixed(2)}}</td>
          <td>{{data.sumData.pwrUtilA.toFixed(2)}}</td>
          <td>{{data.sumData.guardBandValA}}</td>
          <td>{{data.sumData.btA}}</td>
          <td>{{data.sumData.modA}}</td>
          <td v-if="data.sumData.selectedEbe === 'Show'">{{data.ebeA.toFixed(2)}}</td>
          <td>{{data.sumData.avrFadePercent.toFixed(2)}}</td>
          <td v-if="data.sumData.selectedEquivalentBW === 'Yes'">{{data.equivalentBW_A.toFixed(2)}}</td>
          <td v-else>-</td>
        </tr>
        <br />
        <tr>
          <td>{{this.sumData.cityA}}</td>
          <td>{{this.sumData.cityB}}</td>
          <td>{{this.sumData.antSizeA}}</td>
          <td>{{this.sumData.antSizeB}}</td>
          <td>{{this.sumData.infoValueA.toFixed(2)}}</td>
          <td>{{this.sumData.fecA}}</td>
          <td>{{this.sumData.ebNoA.toFixed(2)}}</td>
          <td>{{this.sumData.allowBWA}}</td>
          <td>{{this.sumData.iflLossA}}</td>
          <td>{{this.sumData.hpaPowerBothA}}</td>
          <td>{{this.sumData.cnTotalA.toFixed(2)}}</td>
          <td>{{this.sumData.ebNoA.toFixed(2)}}</td>
          <td>{{this.sumData.marginA.toFixed(2)}}</td>
          <td>{{this.sumData.cnUpA.toFixed(2)}}</td>
          <td>{{this.sumData.cnDnA.toFixed(2)}}</td>
          <td>{{this.sumData.ebNoBothA.toFixed(2)}}</td>
          <td>{{this.sumData.pwrUtilA.toFixed(2)}}</td>
          <td>{{this.sumData.guardBandValA}}</td>
          <td>{{this.sumData.btA}}</td>
          <td>{{this.sumData.modA}}</td>
          <td v-if="this.sumData.selectedEbe === 'Show'">{{this.ebeA.toFixed(2)}}</td>
          <td>{{this.sumData.avrFadePercent.toFixed(2)}}</td>
          <td v-if="this.sumData.selectedEquivalentBW === 'Yes'">{{this.equivalentBW_A.toFixed(2)}}</td>
          <td v-else>-</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <div v-if="this.sumData.selectedSimDuplex === 'Duplex'">
    <div class="row" style="margin:1px; margin-left:20px">
      <div style="background-color:gray; padding:4px; color:white">Summary of link Budget from Location B to Loation A</div>
      <!-- {{this.sumData.selectedEbe}} -->
    </div>
    <table style="margin-left:20px; font-size:10px">
      <!-- <table class="table table-bordered" style="margin-left:20px"> -->
      <thead style="margin:20px; line-height:15px">
        <tr>
          <!-- <div style="overflow-x:auto"> -->
          <th colspan="3">&nbsp</th>
          <th colspan="2">Antenna (m)</th>
          <th rowspan="2">Information Rate (kbps)</th>
          <th rowspan="2">FEC</th>
          <th rowspan="2">Eb/No Threshold</th>
          <th rowspan="2">Allocated BW (KHz)</th>
          <th rowspan="2">Uplink IFL (dB)</th>
          <th rowspan="2">HPA Power (watts)</th>
          <th colspan="5">Clear Sky</th>
          <th width="100px">Rain Both sides Eb/No</th>
          <th rowspan="2">Power utilization % A->B</th>
          <th rowspan="2">Guard band (%)</th>
          <th rowspan="2">BT Product</th>
          <th rowspan="2">Mod Type</th>
          <th v-if="this.sumData.selectedEbe === 'Show'" rowspan="2">EBE</th>
          <th rowspan="2">Total Link Availability</th>
          <th rowspan="2">Equivalent BW</th>
          <!-- </div> -->
        </tr>
        <tr>
          <th>

          </th>
          <th>Tx Location</th>
          <th>Rx Location</th>
          <th>Tx</th>
          <th>Rx</th>
          <th>C/N Total</th>
          <th>Eb/No</th>
          <th>Eb/No margin</th>
          <th>C/N up</th>
          <th>C/N down</th>
          <th>Eb/No</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in link" :key="data.id">
          <td>
            <button @click="removeLink(data.id)">X</button>
          </td>
          <td>{{data.sumData.cityB}}</td>
          <td>{{data.sumData.cityA}}</td>
          <td>{{data.sumData.antSizeB}}</td>
          <td>{{data.sumData.antSizeA}}</td>
          <td>{{data.sumData.infoValueB.toFixed(2)}}</td>
          <td>{{data.sumData.fecB}}</td>
          <td>{{data.sumData.ebNoB.toFixed(2)}}</td>
          <td>{{data.sumData.allowBWB}}</td>
          <td>{{data.sumData.iflLossB}}</td>
          <td>{{data.sumData.hpaPowerBothB}}</td>
          <td>{{data.sumData.cnTotalB.toFixed(2)}}</td>
          <td>{{data.sumData.ebNoB.toFixed(2)}}</td>
          <td>{{data.sumData.marginB.toFixed(2)}}</td>
          <td>{{data.sumData.cnUpB.toFixed(2)}}</td>
          <td>{{data.sumData.cnDnB.toFixed(2)}}</td>
          <td>{{data.sumData.ebNoBothB.toFixed(2)}}</td>
          <td>{{data.sumData.pwrUtilB.toFixed(2)}}</td>
          <td>{{data.sumData.guardBandValB}}</td>
          <td>{{data.sumData.btB}}</td>
          <td>{{data.sumData.modB}}</td>
          <td v-if="data.sumData.selectedEbe === 'Show'">{{data.ebeB.toFixed(2)}}</td>
          <td>{{data.sumData.avrFadePercent.toFixed(2)}}</td>
          <td v-if="data.sumData.selectedEquivalentBW === 'Yes'">{{data.equivalentBW_B.toFixed(2)}}</td>
          <td v-else>-</td>
        </tr>
      </br>
        <tr>
          <td>{{this.sumData.cityB}}</td>
          <td>{{this.sumData.cityA}}</td>
          <td>{{this.sumData.antSizeB}}</td>
          <td>{{this.sumData.antSizeA}}</td>
          <td>{{this.sumData.infoValueB.toFixed(2)}}</td>
          <td>{{this.sumData.fecB}}</td>
          <td>{{this.sumData.ebNoB.toFixed(2)}}</td>
          <td>{{this.sumData.allowBWB}}</td>
          <td>{{this.sumData.iflLossB}}</td>
          <td>{{this.sumData.hpaPowerBothB}}</td>
          <td>{{this.sumData.cnTotalB.toFixed(2)}}</td>
          <td>{{this.sumData.ebNoB.toFixed(2)}}</td>
          <td>{{this.sumData.marginB.toFixed(2)}}</td>
          <td>{{this.sumData.cnUpB.toFixed(2)}}</td>
          <td>{{this.sumData.cnDnB.toFixed(2)}}</td>
          <td>{{this.sumData.ebNoBothB.toFixed(2)}}</td>
          <td>{{this.sumData.pwrUtilB.toFixed(2)}}</td>
          <td>{{this.sumData.guardBandValB}}</td>
          <td>{{this.sumData.btB}}</td>
          <td>{{this.sumData.modB}}</td>
          <td v-if="this.sumData.selectedEbe === 'Show'">{{this.ebeB.toFixed(2)}}</td>
          <td>{{this.sumData.avrFadePercent.toFixed(2)}}</td>
          <td v-if="this.sumData.selectedEquivalentBW === 'Yes'">{{this.equivalentBW_B.toFixed(2)}}</td>
          <td v-else>-</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>

    <button @click="saveLink">Add Case to JRF Table</button>
    <!-- <button @click="delLink">Delete Case to JRF Table</button> -->
    <br />
    <a class="btn btn-primary" href="/jrf_print" target="_blank">Print New</a>
  </div>
</div>
</template>
  <style>
    th,
    tr {
      border: 1px solid black;
      vertical-align: middle;
      text-align: center;
      padding: 6px;
    }

    td {
      border: 1px solid black;
      text-align: center;
      padding: 6px;
    }
  </style>
  <script>
  export default {
    props: ['sumData'],
    data() {
      return {
        link: [],
        count: 1
      }
    },
    methods: {
      printJRF() {
        print();
      },
      removeLink(index) {
        this.link = this.link.filter(function(x) {
          return x.id != index
        });
        this.saveSession();
      },
      saveLink() {
          this.link.push({
            id : this.count++,
            sumData: this.sumData,
            ebeA: this.ebeA,
            equivalentBW_A: this.equivalentBW_A,
            ebeB: this.ebeB,
            equivalentBW_B: this.equivalentBW_B,
          })
          this.saveSession();
      },
      saveSession() {
        this.$session.set('jrfData', {
          satName: this.sumData.selectedSatellite.name,
          beam: this.sumData.selectedBeam,
          cityA: this.sumData.cityA,
          cityB: this.sumData.cityB,
          eirpdownA: this.sumData.eirpdownA,
          gtA: this.sumData.gtA,
          azAngleA: +this.sumData.azAngleA.toFixed(2),
          elAngleA: +this.sumData.elAngleA.toFixed(2),
          eirpdownB: this.sumData.eirpdownB,
          gtB: this.sumData.gtB,
          azAngleB: +this.sumData.azAngleB.toFixed(2),
          elAngleB: +this.sumData.elAngleB.toFixed(2),
          selectedSimDuplex: this.sumData.selectedSimDuplex,

          link: this.link,
          // antSizeA: this.sumData.antSizeA,
          // antSizeB: this.sumData.antSizeB,
          //
          // infoValueA: this.sumData.carrierInfoA.infoValue,
          // fecA: this.sumData.carrierInfoA.fec,
          // ebNoThrA: this.sumData.carrierInfoA.ebNo,
          // allowBWA: this.sumData.allowBWA,
          // iflLossA: this.sumData.iflLossA,
          // hpaPowerBothA: this.sumData.hpaPowerBothA,
          // cnTotalA: this.sumData.cnTotalA,
          // ebNoA: this.sumData.ebNoA,
          // marginA: this.sumData.marginA,
          // cnUpA: this.sumData.cnUpA,
          // cnDnA: this.sumData.cnDnA,
          // ebNoBothA: this.sumData.ebNoBothA,
          // pwrUtilA: this.sumData.pwrUtilA,
          // guardBandValA: this.sumData.guardBandValA,
          // btA: this.sumData.carrierInfoA.bt,
          // modA: this.sumData.carrierInfoA.mod,
          ebeA: this.ebeA,
          equivalentBW_A: this.equivalentBW_A,
          //
          // infoValueB: this.sumData.infoValue,
          // fecB: this.sumData.fec,
          // ebNoThrB: this.sumData.ebNo,
          // allowBWB: this.sumData.allowBWB,
          // iflLossB: this.sumData.iflLossB,
          // hpaPowerBothB: this.sumData.hpaPowerBothB,
          // cnTotalB: this.sumData.cnTotalB,
          // ebNoB: this.sumData.ebNoB,
          // marginB: this.sumData.marginB,
          // cnUpB: this.sumData.cnUpB,
          // cnDnB: this.sumData.cnDnB,
          // ebNoBothB: this.sumData.ebNoBothB,
          // pwrUtilB: this.sumData.pwrUtilB,
          // guardBandValB: this.sumData.guardBandValB,
          // btB: this.sumData.bt,
          // modB: this.sumData.mod,
          ebeB: this.ebeB,
          equivalentBW_B: this.equivalentBW_B,
          //
          avrFadePercent: this.sumData.avrFadePercent
        })
      }
    },
    computed: {
      ebeA() {
        return (parseFloat(this.sumData.fecA) * parseFloat(this.sumData.modA)) / parseFloat(this.sumData.btA);
      },
      ebeB() {
        return (parseFloat(this.sumData.fecB) * parseFloat(this.sumData.modB)) / parseFloat(this.sumData.btB);
      },
      equivalentBW_A() {
        return parseFloat(this.sumData.pwrUtilA / 100) * parseFloat(this.sumData.allowBWA);
      },
      equivalentBW_B() {
        return parseFloat(this.sumData.pwrUtilB / 100) * parseFloat(this.sumData.allowBWB);
      },
    },
    watch: {
      'sumData'(newVal, oldVal) {
      this.saveSession();
      }
    }

  }
  </script>
