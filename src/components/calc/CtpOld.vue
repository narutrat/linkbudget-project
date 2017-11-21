<template>
<div>

  <div style="padding:30px; font-size:13px; line-height:20px">
    <div class="row">
      CTP No. {{this.ctpPrint.ctpNo}}
    </div>

    <div class="row" style="padding:4px; border:solid; border-width: 2px; text-align:center; font-size:16px; font-weight:bold; font-style:oblique">
      Customer Transmission Plan (C-Band Digital TV Application)
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Doc No. :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.docNo}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Purpose :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.purpose}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Customer Name :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.customerName}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Contact Name :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.contactName}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Telephone Number :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.telNo}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Fax Number :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.faxNo}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Address :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.customerAddress}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Service Type :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.serviceType}}</div>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Service Commencement Date :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">-</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Time :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">NPU</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Service Finish Date :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">-</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Time :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">NPU</div>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Satellite Name :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.satAndBeam}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Transponder Number :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.tp}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Uplink Frequency Range (MHz) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.startFrqUp}} - {{this.ctpPrint.ctpInfo.endFrqUp}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Downlink Frequency Range (MHz) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.startFrqDn}} - {{this.ctpPrint.ctpInfo.endFrqDn}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Uplink Polarization :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.upPol}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Downlink Polarization :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.dnPol}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Satellite Attenuator Setting (dB) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.attenTp}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Allowable EIRPdown at Nonthaburi (dBW) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.eirpDnNon}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Aggregate Input Backoff (dB) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.aggregateIBO}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Aggregate Output Backoff (dB) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.ctpInfo.aggregateOBO}}</div>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6"></div>
      <div class="col-sm-5" style="margin-left:50px; font-size:9px">
        Please check the technical information as seen below, the acceptance will be assumed if there is no reply within 7 days.
      </div>
    </div>

    <div class="row" style="margin-top:10px; font-size:12px">
      <thead style="line-height:15px">
      <tr>
        <th>Crr ID.</th>
        <th>Carrier Type</th>
        <th>Tx Site</th>
        <th>Rx Site</th>
        <th>Tx Antenna Size (m.)</th>
        <th>Rx Antenna Size (m.)</th>
        <th>Information Rate (ksps)</th>
        <th>FEC</th>
        <th>Mod Type</th>
        <th>Uplink frequency (MHz.)</th>
        <th>Downlink frequency (MHz.)</th>
        <th>Mod Type</th>
        <th>Allowcated BW (Watts)</th>
        <th>HPA max Power (Watts)</th>
        <th>EIRP cl.sky (dBW)</th>
        <th>Eb/No cl.sky (dB)</th>
        <th>Calculated EIRPdn cl.sky at Nonthaburi (dBW)</th>
      </tr>
      </thead>
      <tbody style="line-height:15px; white-space:nowrap">
        <tr v-for="data in ctpLink">
          <td>{{data.ctpInfo.carrierID}}</td>
          <td>{{data.ctpInfo.carrierType}}</td>
          <td>{{data.ctpInfo.txSite}}</td>
          <td>{{data.ctpInfo.rxSite}}</td>
          <td>{{data.ctpInfo.txAnt}}</td>
          <td>{{data.ctpInfo.rxAnt}}</td>
          <td>{{data.ctpInfo.infoRate}}</td>
          <td>{{data.ctpInfo.fec}}</td>
          <td>{{data.ctpInfo.mod}}</td>
          <td>{{data.ctpInfo.frqUp_A}}</td>
          <td>{{data.ctpInfo.frqDn_A}}</td>
          <td>{{data.ctpInfo.allowBWA}}</td>
          <td>{{data.ctpInfo.hpaMax}}</td>
          <td>{{data.ctpInfo.hpaOperate}}</td>
          <td>{{data.ctpInfo.eirpClear}}</td>
          <td>{{data.ctpInfo.ebNoClear}}</td>
          <td>{{data.ctpInfo.eirpClearNon}}</td>
        </tr>
      <!-- <tr>
        <td>{{this.ctpPrint.ctpInfo.carrierID}}</td>
        <td>{{this.ctpPrint.ctpInfo.carrierType}}</td>
        <td>{{this.ctpPrint.ctpInfo.txSite}}</td>
        <td>{{this.ctpPrint.ctpInfo.rxSite}}</td>
        <td>{{this.ctpPrint.ctpInfo.txAnt}}</td>
        <td>{{this.ctpPrint.ctpInfo.rxAnt}}</td>
        <td>{{this.ctpPrint.ctpInfo.infoRate}}</td>
        <td>{{this.ctpPrint.ctpInfo.fec}}</td>
        <td>{{this.ctpPrint.ctpInfo.mod}}</td>
        <td>{{this.ctpPrint.ctpInfo.frqUp_A}}</td>
        <td>{{this.ctpPrint.ctpInfo.frqDn_A}}</td>
        <td>{{this.ctpPrint.ctpInfo.allowBWA}}</td>
        <td>{{this.ctpPrint.ctpInfo.hpaMax}}</td>
        <td>{{this.ctpPrint.ctpInfo.hpaOperate}}</td>
        <td>{{this.ctpPrint.ctpInfo.eirpClear}}</td>
        <td>{{this.ctpPrint.ctpInfo.ebNoClear}}</td>
        <td>{{this.ctpPrint.ctpInfo.eirpClearNon}}</td>
      </tr> -->
      </tbody>
      <div>
        <button @click="saveCtp">Add Case to CTP Table</button>
      </div>
      <div class="row" style="margin-top:10px; font-size:10px">
        <div class="col-sm-1">
            Note:
        </div>
        <div class="col-sm-11">
          <div class="row">
            {{this.ctpPrint.ctpInfo.note}}
          </div>
        </div>
      </div>

      <div class="row" style="margin-top:20px; padding:4px; border:double; border-width: 2px; text-align:center; line-height:25px">
        <div class="row">
          Thaicom's staff only
        </div>
        <div class="row">
          <div class="col-sm-6" style="border:solid; border-width: 0px 1px 0px 0px">
            <div class="col-sm-4" style="text-align:right">
              <div class="row">Prepared by :</div>
              <div class="row" style="margin-top:25px">Position :</div>
              <div class="row">Date :</div>
            </div>
            <div class="col-sm-8">
              <div class="row">_____________________________</div>
              <div class="row">({{this.ctpPrint.ctpInfo.prepSign}})</div>
              <div class="row">{{this.ctpPrint.ctpInfo.prepPosition}}</div>
              <div class="row">{{this.ctpPrint.ctpInfo.prepDate}}</div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="col-sm-4" style="text-align:right">
              <div class="row">Approved by :</div>
              <div class="row" style="margin-top:25px">Position :</div>
              <div class="row">Date :</div>
            </div>
            <div class="col-sm-8">
              <div class="row">_____________________________</div>
              <div class="row">({{this.ctpPrint.ctpInfo.appSign}})</div>
              <div class="row">{{this.ctpPrint.ctpInfo.appPosition}}</div>
              <div class="row">{{this.ctpPrint.ctpInfo.appDate}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
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
    props: ['ctpPrint'],
    data() {
      return {
        ctpLink: [],
      }
    },
    methods: {
      printJRF() {
        print();
      },
      saveCtp() {
          this.ctpLink.push(this.ctpPrint)
      },
    },
    computed: {

      equivalentBW_B() {
        return (this.sumData.pwrUtilB / 100) * this.sumData.allowBWB;
      },
    },
  }
  </script>
