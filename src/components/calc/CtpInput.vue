<template>
<div>

  <div style="padding:30px; font-size:13px; line-height:20px">
    <div class="row">

      <!-- CTP No. T5-10V-001/2017 -->
      <div class="col-sm-1" style="margin-top:10px">CTP No. </div>
      <div class="col-sm-3" style="margin-bottom:10px">
        <input v-model="ctpNo" class="form-control" @input="ctpUpdate">
        <!-- <calendar></calendar> -->
      </div>

    </div>

    <div class="row" style="padding:4px; border:solid; border-width: 2px; text-align:center; font-size:16px; font-weight:bold; font-style:oblique">
      Customer Transmission Plan (C-Band Digital TV Application)
    </div>

    <div class="row" style="margin-top:20px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Doc No. :</div>
        <input class="col-sm-6" v-model="docNo" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Purpose :</div>
        <input class="col-sm-5" v-model="purpose" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Customer Name :</div>
        <input class="col-sm-6" v-model="customerName" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Contact Name :</div>
        <input class="col-sm-5" v-model="contactName" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Telephone Number :</div>
        <input class="col-sm-6" v-model="telNo" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Fax Number :</div>
        <input class="col-sm-5" v-model="faxNo" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Address :</div>
        <input class="col-sm-6" v-model="customerAddress" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Service Type :</div>
        <input class="col-sm-5" v-model="serviceType" style="text-align:center" @input="ctpUpdate"></input>
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

    <div class="row" style="margin-top:5px">
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
        <input class="col-sm-6" v-model="satAndBeam" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Transponder Number :</div>
        <input class="col-sm-5" v-model="tp" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Uplink Frequency Range (MHz) :</div>
        <input class="col-sm-2" v-model="startFrqUp" style="text-align:center" @input="ctpUpdate"></input>
        <div class="col-sm-2" style="text-align:center">-</div>
        <input class="col-sm-2" v-model="endFrqUp" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Downlink Frequency Range (MHz) :</div>
        <input class="col-sm-2" v-model="startFrqDn" style="text-align:center" @input="ctpUpdate"></input>
        <div class="col-sm-1" style="text-align:center">-</div>
        <input class="col-sm-2" v-model="endFrqDn" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Uplink Polarization :</div>
        <input class="col-sm-6" v-model="upPol" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Downlink Polarization :</div>
        <input class="col-sm-5" v-model="dnPol" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Satellite Attenuator Setting (dB) :</div>
        <input class="col-sm-6" v-model="attenTp" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Allowable EIRPdown at Nonthaburi (dBW) :</div>
        <input class="col-sm-5" v-model="eirpDnNon" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <div class="row" style="margin-top:5px">
      <div class="col-sm-6">
        <div class="col-sm-6" style="padding-left:40px">Aggregate Input Backoff (dB) :</div>
        <input class="col-sm-6" v-model="aggregateIBO" style="text-align:center" @input="ctpUpdate"></input>
      </div>
      <div class="col-sm-6">
        <div class="col-sm-6" style="margin-left:40px">Aggregate Output Backoff (dB) :</div>
        <input class="col-sm-5" v-model="aggregateOBO" style="text-align:center" @input="ctpUpdate"></input>
      </div>
    </div>

    <!-- <div class="row" style="margin-top:20px">
      <div class="col-sm-6"></div>
      <div class="col-sm-5" style="margin-left:50px; font-size:9px">
        Please check the technical information as seen below, the acceptance will be assumed if there is no reply within 7 days.
      </div>
    </div> -->
    <div class="row" style="margin-top:10px; font-size:12px">
      <thead style="line-height:15px">
      <tr>
        <th>

        </th>
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
      <tbody style="line-height:15px; white-space:nowrap">
        <tr v-for="(data, index) in ctpLink" :key="data.id">
          <td>
            <button @click="removeCase(data.id)">X</button>
          </td>
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
    </div>
    <div class="row" style="margin-top:20px">
      <thead style="line-height:20px">
        <tr>
          <!-- <th style="width:8%">Crr ID.</th> -->
          <th style="width:8%">Carrier Type</th>
          <th style="width:20%">Tx Site</th>
          <th style="width:20%">Rx Site</th>
          <th style="width:8%">Tx Antenna Size (m.)</th>
          <th style="width:8%">Rx Antenna Size (m.)</th>
          <th style="width:10%">Information Rate (ksps)</th>
          <th style="width:10%">FEC</th>
          <th style="width:8%">Mod Type</th>
        </tr>
      </thead>
      <tbody style="line-height:20px">
        <tr>
          <!-- <td>
            <div class="form-control" v-model="carrierID" style="text-align:center" @input="ctpUpdate"></div>
          </td> -->
          <td>
            <input class="form-control" v-model="carrierType" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="txSite" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="rxSite" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="txAnt" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="rxAnt" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="infoRate" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="fec" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="mod" style="text-align:center" @input="ctpUpdate"></input>
          </td>
        </tr>
      </tbody>
      <br />
      <thead style="line-height:20px">
        <tr>
          <th style="width:15%">Uplink frequency (MHz.)</th>
          <th style="width:15%">Downlink frequency (MHz.)</th>
          <th style="width:12.5%">Allowcated BW (kHz.)</th>
          <th style="width:10%">HPA max Power (Watts)</th>
          <th style="width:10%">HPA Operate/Crr. (Watts)</th>
          <th style="width:10%">EIRP cl.sky (dBW)</th>
          <th style="width:10%">Eb/No cl.sky (dB)</th>
          <th style="width:17.5%">Calculated EIRPdn cl.sky at Nonthaburi (dBW)</th>
        </tr>
      </thead>
      <tbody style="line-height:15px; white-space:nowrap">
        <tr>

          <td>
            <input class="form-control" v-model="frqUp_A" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="frqDn_A" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="allowBWA" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="hpaMax" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="hpaOperate" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="eirpClear" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="ebNoClear" style="text-align:center" @input="ctpUpdate"></input>
          </td>
          <td>
            <input class="form-control" v-model="eirpClearNon" style="text-align:center" @input="ctpUpdate"></input>
          </td>
        </tr>
      </tbody>
      <div>
        <button @click="saveCtp">Add Case to CTP Table</button>
        <!-- <button @click="delCtp">Delete Case to CTP Table</button> -->
      </div>
      <div class="row" style="margin-top:10px; font-size:10px">
        <div class="col-sm-1">
          Note:
        </div>
        <div class="col-sm-11">
          <div class="row">
            <input class="form-control" v-model="note" style="text-align:center; font-size:10px" @input="ctpUpdate"></input>
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
              <div class="row" style="margin-top:40px">Position :</div>
              <div class="row">Date :</div>
            </div>
            <div class="col-sm-1">

            </div>
            <div class="col-sm-6">
              <div class="row">_____________________________</div>
              <div class="row">
                <input class="form-control" v-model="prepSign" style="text-align:center; font-size:10px" @input="ctpUpdate"></input>
              </div>
              <div class="row">
                <input class="form-control" v-model="prepPosition" style="text-align:center; font-size:10px" @input="ctpUpdate"></input>
              </div>
              <div class="row">
                <input class="form-control" type="date" v-model="prepDate" style="text-align:center"  @change="ctpUpdate"/></div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="col-sm-4" style="text-align:right">
              <div class="row">Approved by :</div>
              <div class="row" style="margin-top:40px">Position :</div>
              <div class="row">Date :</div>
            </div>
            <div class="col-sm-1">

            </div>
            <div class="col-sm-6">
              <div class="row">_____________________________</div>
              <div class="row">
                <input class="form-control" v-model="appSign" style="text-align:center; font-size:10px" @input="ctpUpdate"></input>
              </div>
              <div class="row">
                <input class="form-control" v-model="appPosition" style="text-align:center; font-size:10px" @input="ctpUpdate"></input>
              </div>
              <div class="row">
                <input class="form-control" type="date" v-model="appDate" style="text-align:center"  @change="ctpUpdate"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- <router-link :to="{ name: 'PrintView'}" tag="button" @click.native="saveSession">Print</router-link> -->
    <a class="btn btn-primary" href="/ctp_print" target="_blank">Print New</a>
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
import calendar from 'vuejs-calendar'
  export default {
    props: ['ctpData'],
    data() {
      return {
        ctpLink: [],
        satAndBeam: '',
        tp: '',

        ctpNo: '',
        docNo: '',
        purpose: '',
        customerName: '',
        contactName: '',
        telNo: '',
        faxNo: '',
        customerAddress: '',
        serviceType: '',
        startFrqUp: '',
        endFrqUp: '',
        startFrqDn: '',
        endFrqDn: '',
        upPol: '',
        dnPol: '',
        attenTp: '',
        eirpDnNon: '',
        aggregateIBO: '',
        aggregateOBO: '',
        carrierID: '',
        carrierType: '',
        txSite: '',
        rxSite: '',
        txAnt: '',
        rxAnt: '',
        infoRate: '',
        fec: '',
        mod: '',
        frqUp_A: '',
        frqDn_A: '',
        allowBWA: '',
        allowBWB: '',
        hpaMax: '',
        hpaOperate: '',
        eirpClear: '',
        ebNoClear: '',
        eirpClearNon: '',
        note: '',
        prepSign: '',
        prepPosition: '',
        appSign: 'Sarawut Wongpeng',
        appPosition: 'DM-CN',
        prepDate: '',
        appDate: '',
        count: 1
      }
    },
    components: {
      calendar
    },

    computed: {
      now: function () {
        return Date.now()
      }
    },
    // mounted() {
    //   this.$session.set('saveData', {
    //     x: this.satAndBeam,
    //     y: this.txSite})
    // },
    methods: {
      printJRF() {
        print();
      },
      saveSession() {
        this.$session.set('saveData', {
          allowIboClear: this.allowIboClear,
          satAndBeam: this.satAndBeam,
          tp: this.tp,

          ctpNo: this.ctpNo,
          docNo: this.docNo,
          purpose: this.purpose,
          customerName: this.customerName,
          contactName: this.contactName,
          telNo: this.telNo,
          faxNo: this.faxNo,
          customerAddress: this.customerAddress,
          serviceType: this.serviceType,
          startFrqUp: this.startFrqUp,
          endFrqUp: this.endFrqUp,
          startFrqDn: this.startFrqDn,
          endFrqDn: this.endFrqDn,
          upPol: this.upPol,
          dnPol: this.dnPol,
          attenTp: this.attenTp,
          eirpDnNon: this.eirpDnNon,
          aggregateIBO: this.aggregateIBO,
          aggregateOBO: this.aggregateOBO,

          ctpLink: this.ctpLink,

          note: this.note,
          prepSign: this.prepSign,
          prepPosition: this.prepPosition,
          appSign: this.appSign,
          appPosition: this.appPosition,
          prepDate: this.prepDate,
          appDate: this.appDate})
      },
      removeCase(index) {
        console.log('index = ' + index);
        this.ctpLink = this.ctpLink.filter(function(x) {
          return x.id != index
        });
        this.saveSession();
        // this.ctpLink.splice(index, 1)
      },
      saveCtp() {
          this.ctpLink.push({
            id: this.count++,
            carrierID: this.carrierID,
            carrierType: this.carrierType,
            txSite: this.txSite,
            rxSite: this.rxSite,
            txAnt: this.txAnt,
            rxAnt: this.rxAnt,
            infoRate: this.infoRate,
            fec: this.fec,
            mod: this.mod,

            frqUp_A: this.frqUp_A,
            frqDn_A: this.frqDn_A,
            allowBWA: this.allowBWA,
            allowBWB: this.allowBWB,
            hpaMax: this.hpaMax,
            hpaOperate: this.hpaOperate,
            eirpClear: this.eirpClear,
            ebNoClear: this.ebNoClear,
            eirpClearNon: this.eirpClearNon,
          })
          this.saveSession();
      },
      ctpUpdate() {
        this.$emit('ctpValue', {
          allowIboClear: this.allowIboClear,
          satAndBeam: this.satAndBeam,
          tp: this.tp,

          ctpNo: this.ctpNo,
          docNo: this.docNo,
          purpose: this.purpose,
          customerName: this.customerName,
          contactName: this.contactName,
          telNo: this.telNo,
          faxNo: this.faxNo,
          customerAddress: this.customerAddress,
          serviceType: this.serviceType,
          startFrqUp: this.startFrqUp,
          endFrqUp: this.endFrqUp,
          startFrqDn: this.startFrqDn,
          endFrqDn: this.endFrqDn,
          upPol: this.upPol,
          dnPol: this.dnPol,
          attenTp: this.attenTp,
          eirpDnNon: this.eirpDnNon,
          aggregateIBO: this.aggregateIBO,
          aggregateOBO: this.aggregateOBO,

          ctpLink: this.ctpLink,

          note: this.note,
          prepSign: this.prepSign,
          prepPosition: this.prepPosition,
          appSign: this.appSign,
          appPosition: this.appPosition,
          prepDate: this.prepDate,
          appDate: this.appDate
        });
        this.saveSession();
      },
    },
    watch: {
      'ctpData'(newVal, oldVal) {
        this.satAndBeam = newVal.satAndBeam;
        this.tp = newVal.tp;

        this.allowBWA = newVal.allowBWA;
        this.allowBWB = newVal.allowBWB;

        this.frqUp_A = newVal.frqUp_A;
        this.frqDn_A = newVal.frqDn_A;

        this.startFrqUp = newVal.startFrqUp;
        this.endFrqUp = newVal.endFrqUp;
        this.startFrqDn = newVal.startFrqDn;
        this.endFrqDn = newVal.endFrqDn;

        this.upPol = newVal.upPol;
        this.dnPol = newVal.dnPol;
        this.attenTp = newVal.attenTp;

        this.txSite = newVal.txSite;
        this.rxSite = newVal.rxSite;
        this.txAnt = newVal.txAnt;
        this.rxAnt = newVal.rxAnt;
        this.infoRate = newVal.infoRate;
        this.fec = newVal.fec;

        // this.allowBW= newVal.allowBWVal;
        this.$emit('ctpValue', {
          allowIboClear: this.allowIboClear,
          satAndBeam: this.satAndBeam,
          tp: this.tp,

          ctpNo: this.ctpNo,
          docNo: this.docNo,
          purpose: this.purpose,
          customerName: this.customerName,
          contactName: this.contactName,
          telNo: this.telNo,
          faxNo: this.faxNo,
          customerAddress: this.customerAddress,
          serviceType: this.serviceType,
          startFrqUp: this.startFrqUp,
          endFrqUp: this.endFrqUp,
          startFrqDn: this.startFrqDn,
          endFrqDn: this.endFrqDn,
          upPol: this.upPol,
          dnPol: this.dnPol,
          attenTp: this.attenTp,
          eirpDnNon: this.eirpDnNon,
          aggregateIBO: this.aggregateIBO,
          aggregateOBO: this.aggregateOBO,

          ctpLink: this.ctpLink,

          note: this.note,
          prepSign: this.prepSign,
          prepPosition: this.prepPosition,
          appSign: this.appSign,
          appPosition: this.appPosition,
          prepDate: this.prepDate,
          appDate: this.appDate
        });
        this.saveSession();
      }
    },
  }
  </script>
