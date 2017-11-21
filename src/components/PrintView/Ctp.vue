<template>
<div>

  <div style="padding:30px; font-size:13px; line-height:20px">
    <div class="row" style="text-align:left">
      CTP No. {{this.ctpPrint.ctpNo}}
    </div>

    <div class="row" style="padding:4px; border:solid; border-width: 2px; text-align:center; font-size:16px; font-weight:bold; font-style:oblique">
      Customer Transmission Plan (C-Band Digital TV Application)
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Doc No. :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.docNo}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Purpose :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.purpose}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Customer Name :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.customerName}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Contact Name :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.contactName}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Telephone Number :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.telNo}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Fax Number :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.faxNo}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Address :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.customerAddress}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Service Type :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.serviceType}}</div>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Service Commencement Date :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">-</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Time :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">NPU</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Service Finish Date :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">-</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Time :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">NPU</div>
      </div>
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Satellite Name :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.satAndBeam}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Transponder Number :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.tp}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Uplink Frequency Range (MHz) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.startFrqUp}} - {{this.ctpPrint.endFrqUp}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Downlink Frequency Range (MHz) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.startFrqDn}} - {{this.ctpPrint.endFrqDn}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Uplink Polarization :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.upPol}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Downlink Polarization :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.dnPol}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Satellite Attenuator Setting (dB) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.attenTp}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Allowable EIRPdown at Nonthaburi (dBW) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.eirpDnNon}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px; text-align:left">Aggregate Input Backoff (dB) :</div>
        <div class="col-sm-6" style="text-align:center; text-decoration:underline">{{this.ctpPrint.aggregateIBO}}</div>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px; text-align:left">Aggregate Output Backoff (dB) :</div>
        <div class="col-sm-5" style="text-align:center; text-decoration:underline">{{this.ctpPrint.aggregateOBO}}</div>
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
        <th>Allowcated BW (Watts)</th>
        <th>HPA max Power (Watts)</th>
        <th>HPA Operate/Crr. (Watts)</th>
        <th>EIRP cl.sky (dBW)</th>
        <th>Eb/No cl.sky (dB)</th>
        <th>Calculated EIRPdn cl.sky at Nonthaburi (dBW)</th>
      </tr>
      </thead>
      <!-- {{this.ctpPrint.ctpLink}} -->
      <tbody style="line-height:15px; white-space:nowrap">
        <tr v-for="(data, index) in ctpPrint.ctpLink">
          <td>{{index+1}}</td>
          <td>{{data.carrierType}}</td>
          <td>{{data.txSite}}</td>
          <td>{{data.rxSite}}</td>
          <td>{{data.txAnt}}</td>
          <td>{{data.rxAnt}}</td>
          <td>{{data.infoRate}}</td>
          <td>{{data.fec}}</td>
          <td>{{data.mod}}</td>
          <td>{{data.frqUp_A}}</td>
          <td>{{data.frqDn_A}}</td>
          <td>{{data.allowBWA}}</td>
          <td>{{data.hpaMax}}</td>
          <td>{{data.hpaOperate}}</td>
          <td>{{data.eirpClear}}</td>
          <td>{{data.ebNoClear}}</td>
          <td>{{data.eirpClearNon}}</td>
        </tr>
      <!-- <tr>
        <td>{{this.ctpPrint.carrierID}}</td>
        <td>{{this.ctpPrint.carrierType}}</td>
        <td>{{this.ctpPrint.txSite}}</td>
        <td>{{this.ctpPrint.rxSite}}</td>
        <td>{{this.ctpPrint.txAnt}}</td>
        <td>{{this.ctpPrint.rxAnt}}</td>
        <td>{{this.ctpPrint.infoRate}}</td>
        <td>{{this.ctpPrint.fec}}</td>
        <td>{{this.ctpPrint.mod}}</td>
        <td>{{this.ctpPrint.frqUp_A}}</td>
        <td>{{this.ctpPrint.frqDn_A}}</td>
        <td>{{this.ctpPrint.allowBWA}}</td>
        <td>{{this.ctpPrint.hpaMax}}</td>
        <td>{{this.ctpPrint.hpaOperate}}</td>
        <td>{{this.ctpPrint.eirpClear}}</td>
        <td>{{this.ctpPrint.ebNoClear}}</td>
        <td>{{this.ctpPrint.eirpClearNon}}</td>
      </tr> -->
      </tbody>
      <div class="row" style="margin-top:10px; font-size:10px">
        <div class="col-sm-1">
            Note:
        </div>
        <div class="col-sm-11">
          <div class="row" style="text-align:left">
            {{this.ctpPrint.note}}
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
              <div class="row">({{this.ctpPrint.prepSign}})</div>
              <div class="row">{{this.ctpPrint.prepPosition}}</div>
              <div class="row">{{this.ctpPrint.prepDate}}</div>
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
              <div class="row">({{this.ctpPrint.appSign}})</div>
              <div class="row">{{this.ctpPrint.appPosition}}</div>
              <div class="row">{{this.ctpPrint.appDate}}</div>
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
  }
  </script>
