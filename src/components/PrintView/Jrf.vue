<template>
<!-- <div id="app" style="margin-right:20px"> -->
<div>

  <!-- ////////////////////////////// Section1: Satellite //////////////////////////////-->
  <!-- /////////////// Satellite /////////////// -->
  <div class="row" style="padding:10px">

    <div style="margin-left:20px; margin-top:5px; font-weight:bold; text-align:left">Summary Link Budget on THAICOM-{{this.jrfPrint.satName}} Beam-{{this.jrfPrint.beam}}</div>

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
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 1px">{{this.jrfPrint.cityA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 0px 1px 0px">{{this.jrfPrint.cityB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 1px">{{this.jrfPrint.eirpdownA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.gtA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.azAngleA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.elAngleA}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.eirpdownB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.gtB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.azAngleB}}</div>
      <div class="col-sm-1" style="border:solid; border-width: 0px 1px 1px 0px">{{this.jrfPrint.elAngleB}}</div>
    </div>

    <div class="row" style="margin:1px; margin-left:20px; text-align:left">
      Case: Free of adjacent satellite / Consider adjacent satellite
    </div>


  </div>
<br />
  <div>
    <div class="row" style="margin:1px; margin-left:20px">
      <div style="background-color:gray; padding:4px; color:white; text-align:left">Summary of link Budget from Location A to Loation B</div>
    </div>
    <table style="margin-left:20px; font-size:12px">
      <!-- <table class="table table-bordered" style="margin-left:20px"> -->
      <thead style="margin:20px; line-height:15px">
        <tr>
          <!-- <div style="overflow-x:auto"> -->
          <th colspan="2">&nbsp</th>
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
          <th v-if="this.jrfPrint.link[0].sumData.selectedEbe === 'Show' "rowspan="2">EBE</th>
          <th rowspan="2">Total Link Availability</th>
          <th rowspan="2">Equivalent BW</th>
          <!-- </div> -->
        </tr>
        <tr>
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
        <tr v-for="(data, index) in jrfPrint.link">
          <td>{{data.sumData.cityA}}</td>
          <td>{{data.sumData.cityB}}</td>
          <td>{{data.sumData.antSizeA}}</td>
          <td>{{data.sumData.antSizeB}}</td>
          <td>{{data.sumData.infoValueA.toFixed(2)}}</td>
          <td>{{data.sumData.fecA.toFixed(2)}}</td>
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
      </tbody>
    </table>
  </div>
  <br />
  <br />
  <div v-if="this.jrfPrint.selectedSimDuplex === 'Duplex'">
    <div class="row" style="margin:1px; margin-left:20px">
      <div style="background-color:gray; padding:4px; color:white; text-align:left">Summary of link Budget from Location B to Loation A</div>
      <!-- {{this.jrfPrint.selectedEbe}} -->
    </div>
    <table style="margin-left:20px; font-size:12px">
      <!-- <table class="table table-bordered" style="margin-left:20px"> -->
      <thead style="margin:20px; line-height:15px">
        <tr>
          <!-- <div style="overflow-x:auto"> -->
          <th colspan="2">&nbsp</th>
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
          <th v-if="this.jrfPrint.link[0].sumData.selectedEbe === 'Show' "rowspan="2">EBE</th>
          <th rowspan="2">Total Link Availability</th>
          <th rowspan="2">Equivalent BW</th>
          <!-- </div> -->
        </tr>
        <tr>
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
        <tr v-for="(data, index) in jrfPrint.link">
          <td>{{data.sumData.cityB}}</td>
          <td>{{data.sumData.cityA}}</td>
          <td>{{data.sumData.antSizeB}}</td>
          <td>{{data.sumData.antSizeA}}</td>
          <td>{{data.sumData.infoValueB.toFixed(2)}}</td>
          <td>{{data.sumData.fecB.toFixed(2)}}</td>
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
      </tbody>
    </table>
  </div>
</div>
</template>
  <style>
    th,
    tr {
      border: 1px solid black;
      vertical-align: middle;
      text-align: center;
      padding: 4px;
    }

    td {
      border: 1px solid black;
      text-align: center;
      padding: 4px;
    }
  </style>
  <script>
  export default {
    props: ['jrfPrint'],
  }
  </script>
