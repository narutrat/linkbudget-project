<template>
<div class="app" style="padding:10px; margin-right:10px; text-align:left">

  <!-- Satellite Section -->
  <div class="row">
    <h3 style="margin-left:30px; margin-top:5px; font-weight:bold">Satellite</h3>

    <!-- Satellite Label -->
    <div class="col-sm-1 blue-box1">
      <span>Satellite: {{ selectedSatellite.text }} </span>
    </div>

    <!-- Satellite selector -->
    <div class="col-sm-2">

      <!-- Construct a satellite selector, which listens to event 'satelliteSelected' where the satellite selector component sends the satellite object back when the input is changed -->
      <!-- <satellite-selector @satelliteSelected="updateSatellite"></satellite-selector> -->
      <satellite-selector @satelliteSelected="selectedSatellite = $event"></satellite-selector>

    </div>

    <!-- Beam Label -->
    <div class="col-sm-1 blue-box1">
      <span>Beam: {{ selectedBeam }}</span>
    </div>

    <!-- Beam selector -->
    <div class="col-sm-1">

      <!-- Construct a beam selector, which listens to event 'beamSelected' where the beam selector component sends the String beam name back when the input is changed -->
      <!-- Also pass satellite name as a prop -->
      <beam-selector :satelliteName="selectedSatellite.text" @beamSelected="selectedBeam = $event"></beam-selector>
    </div>

    <div class="col-sm-1"></div>

    <!-- Transponder Label -->
    <div class="col-sm-1 blue-box1">
      <span>Transponder: {{ selectedTp }}</span>
    </div>

    <div class="col-sm-1">
      <!-- <transponder-selector :beams="selectedBeam" @tpSelected="updateTp"></transponder-selector> -->
      <transponder-selector :beams="selectedBeam" @tpSelected="selectedTp = $event"></transponder-selector>
    </div>

    <div class="col-sm-1"></div>

    <!-- Frequency -->
    <div class="col-sm-2" style="margin-top:5px">
      <FreqDL :transponders="selectedTp"></FreqDL>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <!-- Location Section -->

  <div class="row">
    <h3 style="margin-left:30px; margin-top:5px; font-weight:bold; text-align:left">Location</h3>

    <div class="col-sm-8"></div>

    <div class="col-sm-1" style="margin-left:-6px">
      <span>Adjacent Satellite </span>
    </div>

    <div class="col-sm-1" v-for="sat in selectedSatellite.adjSat" style="text-align:center">
      {{ sat }}
    </div>
  </div>

  <div class="row">
    <div class="col-sm-1 blue-box1">
      <span>Location A: {{ LocationLabelA }}</span>
    </div>

    <div class="col-sm-3">
      <!-- <Location @locationSelected="locationA"></Location> -->
      <Location @locationSelected="selectedLocationsA = $event"></Location>
    </div>

    <div class="col-sm-2 blue-box1">
      Tx Antenna Size: {{ antSizeA }}
    </div>

    <div class="col-sm-1">
      <AntSize class="form-control" @antSizeSelected="antSizeA = $event"></AntSize>
    </div>

    <div class="col-sm-1 blue-box1">
      Dx Contours
    </div>

    <AdjDxContour :satellite="selectedSatellite" :selectedLocations="selectedLocationsA" @dxContourVal="adjSatDxContourA = $event"></AdjDxContour>
    <!-- <div>
      {{adjSatDxContourA}}
    </div> -->
  </div>

  <div class="row">
    <div class="col-sm-1 blue-box1">
      <span>Location B: {{ LocationLabelB }}</span>
    </div>

    <div class="col-sm-3">
      <Location @locationSelected="selectedLocationsB = $event"></Location>
    </div>

    <div class="col-sm-2 blue-box1">
      Tx Antenna Size: {{ antSizeB }}
    </div>

    <div class="col-sm-1">
      <AntSize class="form-control" @antSizeSelected="antSizeB = $event"></AntSize>
    </div>

    <div class="col-sm-1 blue-box1">
      Dx Contours
    </div>

    <AdjDxContour :satellite="selectedSatellite" :selectedLocations="selectedLocationsB" @dxContourVal="adjSatDxContourB = $event"></AdjDxContour>
  </div>

  <div class="row">
    <div class="col-sm-1 blue-box1">
      <span>Adjacent Satellite: {{ selectedSatellite.adjSat }} </span>
    </div>

    <div class="col-sm-4">
      <div class="row" style="margin-left:5px; text-align:left" v-for="adj in adjSatOptions">
        <input type="checkbox" v-bind:value="adj" v-model="selectedSatellite.adjSat"> {{ adj }} </input>
      </div>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <div class="row">
    <h3 style="margin-left:30px; margin-top:5px; font-weight:bold; text-align:left">Carrier Setting</h3>
  </div>

  <div class="row">
    <div class="col-sm-4">
      <div class="row">
        <div class="col-sm-4 blue-box1">
          <span>Carrier Mode: {{ selectedCarrier }}</span>
        </div>

        <div class="col-sm-4">
          <CarrierMode @carrierSelected="selectedCarrier = $event"></CarrierMode>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 blue-box1">
          Satellite OBO: {{ satObo }}
        </div>

        <div class="col-sm-3">
          <SatObo class="form-control" @satOboSelected="satObo = $event"></SatObo>
          <!-- <input v-model="satObo" class="col-sm-2" style="margin-left:15px"> -->
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 blue-box1">
          Satellite Mode: {{ selectedMode }}
        </div>

        <div class="col-sm-4">
          <SatelliteMode @modeSelected="selectedMode = $event"></SatelliteMode>
        </div>
      </div>
    </div>


    <div class="col-sm-4">
      <div class="row" style="margin-top:40px">
        <div class="col-sm-4 blue-box1">
          Satellite IBO: {{ satIbo }}
        </div>

        <div class="col-sm-3">
          <SatIbo class="form-control" @satIboSelected="satIbo = $event"></SatIbo>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-4 blue-box1">
          Attenuation: {{ atten }}
        </div>

        <div class="col-sm-3">
          <Attenuation class="form-control" @attenSelected="atten = $event"></Attenuation>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-4 blue-box1">
          Deep-in: {{ deepIn }}
        </div>

        <!-- <input v-model="deepIn" class="col-sm-2" style="margin-left:15px"> -->
        <div class="col-sm-3">
          <DeepIn class="form-control" @deepInSelected="deepIn = $event"></DeepIn>
        </div>

      </div>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <div class="row">
    <h3 style="margin-left:30px; margin-top:5px; font-weight:bold; text-align:left">Bandwidth Infomation</h3>

    <div class="col-sm-2 blue-box1">
      <span>Power Utilization/Margin: {{ pwrVal }}</span>
    </div>

    <div class="col-sm-2" style="text-align:left">
      <PowerMarginCheck @powerMarginSelected="selectedPowerMargin = $event"></PowerMarginCheck>
    </div>

    <div class="col-sm-1">
      <PowerMarginValue class="form-control" @pwrValSelected="pwrVal = $event"></PowerMarginValue>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>BW / Info Rate: {{ bandwidthVal }}</span>
    </div>

    <div class="col-sm-2" style="text-align:left">
      <BwInfoCheck @bwSelSelected="selectedBwSel = $event"></BwInfoCheck>
    </div>

    <div class="col-sm-1">
      <BwInfoValue class="form-control" @bandwidthValSelected="bandwidthVal = $event"></BwInfoValue>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <div class="row">
    <h3 style="margin-left:30px; margin-top:5px; font-weight:bold; text-align:left">Data Infomation</h3>

    <div class="col-sm-2 blue-box1">
      <span>Platform: {{ selectedPlatform }}</span>
    </div>

    <div class="col-sm-2">
      <Platform @platformSelected="selectedPlatform = $event"></Platform>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Carrier Path: {{ selectedSimDuplex }}</span>
    </div>

    <div class="col-sm-2">
      <SimplexDuplex @simDuplexSelected="selectedSimDuplex = $event"></SimplexDuplex>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Application: {{ selectedAppDVB }}</span>
    </div>

    <div class="col-sm-2">
      <Application @appDVBSelected="selectedAppDVB = $event"></Application>
    </div>
  </div>

  <div class="row" style="padding-left:10px; padding-bottom:20px"></div>

  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Modem: {{ selectedModem.label }}</span>
    </div>

    <div class="col-sm-2">
      <Modem @modemSelected="selectedModem = $event"></Modem>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Best Mod Code: {{ selectedBestModCode }}</span>
    </div>

    <div class="col-sm-2">
      <BestModCode @bestModCodeSelected="selectedBestModCode = $event"></BestModCode>
    </div>
  </div>

  <!-- Location A -->

  <div class="row">
    <div class="col-sm-5">
      <div class="row" style="margin-left:40px; text-align:left">
        <h4 style="font-weight:bold">Location A</h4>
      </div>

      <div class="row" style="margin-left:15px">
        <div class="col-sm-3 blue-box1">
          <span>Modulation A: {{ selectedModCodeA }}</span>
        </div>

        <div class="col-sm-2">
          <ModulationA :modem="selectedModem" @modCodeSelected="selectedModCodeA= $event"></ModulationA>
        </div>
      </div>

      <!-- <div class="row" style="margin-left:15px">
        <div class="col-sm-3 blue-box1">
          <span>FEC: {{ selectedFecA }}</span>
        </div>

        <div class="col-sm-2">
          <fecA :modem="selectedModem" @fecASelected="selectedFecA = $event"></fecA>
        </div>
      </div> -->
    </div>

    <div v-if="selectedSimDuplex === 'Duplex'" class="col-sm-5">
      <div class="row" style="margin-left:40px; text-align:left">
        <h4 style="font-weight:bold">Location B</h4>
      </div>

      <div class="row" style="margin-left:15px">
        <div class="col-sm-3 blue-box1">
          <span>Modulation B: {{ selectedModCodeB }}</span>
        </div>

        <div class="col-sm-2">
          <ModulationA :modem="selectedModem" @modCodeSelected="selectedModCodeB= $event"></ModulationA>
        </div>
      </div>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <div class="row">
    <h3 class="col-sm-5" style="margin-left:15px; margin-top:5px; font-weight:bold; text-align:left">System Loss</h3>
    <div class="col-sm-1"></div>
    <h3 class="col-sm-5" style="margin-left:-15px; margin-top:5px; font-weight:bold; text-align:left">Antenna Gain & Temperature</h3>
  </div>
  <div class="row">
    <div class="col-sm-12">


      <div class="col-sm-6" style="margin-left:-15px">
        <div class="row">
          <div class="col-sm-4 blue-box1">
            IFL Loss: {{ iflLoss }}
          </div>

          <div class="col-sm-1"></div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Uplink</span>
            <input v-model="iflLoss" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Loss from Antenna Feed to LNA: {{ lossFeedA }}</span>
          </div>

          <div class="col-sm-1"></div>

          <div class="col-sm-4">
            <input v-model="lossFeedA" class="form-control" style="text-align:center" />
          </div>
        </div>

        <div class="row">

          <div class="col-sm-4 blue-box1">
            <span>Mispointing Antenna Loss: {{ misAntUpA }} / {{ misAntDnB }}</span>
          </div>

          <div class="col-sm-1"></div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Uplink</span>
            <input v-model="misAntUpA" class="form-control" style="text-align:center" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-5" style="margin-left:25px"></div>

          <div class="input-group col-sm-4" style="margin-top:-5px; margin-bottom:5px">
            <span class="input-group-addon">Downlink</span>
            <input v-model="misAntDnB" class="form-control" style="text-align:center" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Atmospheric Absorption: {{ atmos }}</span>
          </div>

          <div class="col-sm-1"></div>

          <div class="col-sm-4">
            <input v-model="atmos" class="form-control" style="text-align:center" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Other Loss (XPD & Axial Ratio Loss): {{ otherLossUpA }}</span>
          </div>

          <div class="col-sm-1"></div>

          <div class="col-sm-4">
            <input v-model="otherLossUpA" class="form-control" style="text-align:center" />
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Antenna Gain: {{ selectedAntGain }} </span>
          </div>

          <div class="col-sm-3">
            <AntGain @antGainSelected="selectedAntGain = $event"></AntGain>
          </div>

          <!-- <div class="col-sm-1"></div> -->

          <div class="input-group col-sm-4">
            <span class="input-group-addon">{{ selectedAntGain }}</span>
            <input v-model="antGainVal" class="form-control" style="text-align:center" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Antenna Efficiency: {{ selectedAntEff }}</span>
          </div>

          <div class="col-sm-3">
            <AntEff @antEffSelected="selectedAntEff = $event"></AntEff>
          </div>

          <!-- <div class="col-sm-1"></div> -->

          <div class="input-group col-sm-4">
            <span class="input-group-addon">{{ selectedAntEff }}</span>
            <input v-model="antEffVal" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>Rx Antenna Temperature: {{ selectedRxAntTemp }}</span>
          </div>

          <div class="col-sm-3">
            <RxAntTemp @rxAntTempSelected="selectedRxAntTemp = $event"></RxAntTemp>
          </div>

          <!-- <div class="col-sm-1"></div> -->

          <div class="input-group col-sm-4">
            <span class="input-group-addon">{{ selectedRxAntTemp }}</span>
            <input v-model="rxAntTempVal" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 blue-box1">
            <span>LNA Noise Temperature: {{ selectedLnaTemp }}</span>
          </div>

          <div class="col-sm-3">
            <LnaNoiseTemp @lnaTempSelected="selectedLnaTemp = $event"></LnaNoiseTemp>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">{{ selectedLnaTemp }}</span>
            <input v-model="lnaTempVal" class="form-control" style="text-align:center">
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3 style="margin-left:15px; margin-top:5px; font-weight:bold; text-align:left">Miscellaneous Configuration</h3>

  <!--  -->
  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Link Availability: {{ linkAvaVal }}</span>
    </div>

    <div class="col-sm-1" style="margin-right:20px">
      <LinkAva @linkAvaSelected="selectedLinkAva = $event"></LinkAva>
    </div>

    <div class="input-group col-sm-2">
      <span class="input-group-addon">{{ selectedLinkAva }}</span>
      <input v-model="linkAvaVal" class="form-control" style="text-align:center">
    </div>
  </div>

  <!--  -->
  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>Equivalent BW: {{ selectedEquivalentBW }}</span>
    </div>

    <div class="col-sm-2">
      <EquiBW @equivalentBWSelected="selectedEquivalentBW = $event"></EquiBW>
    </div>
  </div>

  <!--  -->
  <div class="row">
    <div class="col-sm-2 blue-box1">
      <span>EBE: {{ selectedEbe }}</span>
    </div>

    <div class="col-sm-2">
      <EbeCheck @ebeSelected="selectedEbe = $event"></EbeCheck>
    </div>
  </div>

  <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

  <Calculate :paraData="InputPara"></Calculate>
<!-- <span>{{selected}}</span> -->
</div>
</template>

<script>
//////////////////////////////////////////////////////////////////////////////////////
import SatelliteSelector from './inputs/SatelliteSelector' // Don't need to put .vue here
import BeamSelector from './inputs/BeamSelector'
import TransponderSelector from './inputs/TransponderSelector'
import FreqDL from './inputs/FreqDL'
//////////////////////////////////////////////////////////////////////////////////////
import Location from './inputs/Location'
import AntSize from './inputs/AntSize'
import AntSizeB from './inputs/AntSizeB'
import AdjDxContour from './inputs/AdjDxContour'
//////////////////////////////////////////////////////////////////////////////////////
import CarrierMode from './inputs/CarrierMode'
import SatObo from './inputs/SatObo'
import SatelliteMode from './inputs/SatelliteMode'
import SatIbo from './inputs/SatIbo'
import Attenuation from './inputs/Attenuation'
import DeepIn from './inputs/DeepIn'
//////////////////////////////////////////////////////////////////////////////////////
import PowerMarginCheck from './inputs/PowerMarginCheck'
import PowerMarginValue from './inputs/PowerMarginValue'
import BwInfoCheck from './inputs/BwInfoCheck'
import BwInfoValue from './inputs/BwInfoValue'
//////////////////////////////////////////////////////////////////////////////////////
import Platform from './inputs/Platform'
import SimplexDuplex from './inputs/SimplexDuplex'
import Application from './inputs/Application'
import Modem from './inputs/Modem'
import BestModCode from './inputs/BestModCode'
import ModulationA from './inputs/Modulation'
//////////////////////////////////////////////////////////////////////////////////////
import IflLoss from './inputs/IflLoss'
import LossFeedA from './inputs/LossFeedA'
import MisAntUpA from './inputs/MisAntUpA'
import MisAntDnB from './inputs/MisAntDnB'
import Atmos from './inputs/Atmos'
import OtherLoss from './inputs/OtherLoss'
//////////////////////////////////////////////////////////////////////////////////////
import AntGain from './inputs/AntGain'
import AntEff from './inputs/AntEff'
import RxAntTemp from './inputs/RxAntTemp'
import LnaNoiseTemp from './inputs/LnaNoiseTemp'
//////////////////////////////////////////////////////////////////////////////////////
import LinkAva from './inputs/LinkAva'
import EquiBW from './inputs/EquiBW'
import EbeCheck from './inputs/EbeCheck'

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
import Calculate from './calc/Calculate'
// import DesignParam from './calc/DesignParam'

//////////////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {
      //////////////////////////////////////////////////////////////////////////////////////
      selectedSatellite: {}, // satellite object
      selectedBeam: '', // beam name (String)
      selectedTp: '',
      selectedFreq: '',
      //////////////////////////////////////////////////////////////////////////////////////
      // selectedAdj: [],
      selectedLocationsA: [],
      selectedLocationsB: [],
      antSizeA: "",
      antSizeB: "",
      dxContour: "",
      adjSatDxContourA: [],
      //////////////////////////////////////////////////////////////////////////////////////
      selectedCarrier: "Multiple Carrier",
      selectedMode: "FGM",
      satObo: "",
      satIbo: "",
      atten: "",
      deepIn: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedPowerMargin: "Power Utilization",
      pwrVal: "",
      selectedBwSel: "Bandwidth",
      bandwidthVal: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedPlatform: "Broadcast",
      selectedSimDuplex: "Duplex",
      selectedAppDVB: "DVB-S1",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedModem: "",
      selectedBestModCode: "No",
      selectedModCodeA: "",
      selectedModCodeB: "",
      // selectedFecA: "",
      //////////////////////////////////////////////////////////////////////////////////////
      iflLoss: "",
      lossFeedA: "",
      misAntUpA: "",
      misAntDnB: "",
      atmos: "",
      otherLossUpA: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedAntGain: "Calculation",
      selectedAntEff: "Default",
      selectedRxAntTemp: "Default",
      selectedLnaTemp: "Default",
      antGainVal: "",
      antEffVal: "",
      rxAntTempVal: "",
      lnaTempVal: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedLinkAva: "Default",
      linkAvaVal: 99.99,
      selectedEquivalentBW: "No",
      selectedEbe: "Hide",
      //////////////////////////////////////////////////////////////////////////////////////
      adjSat: [],
      adjSatOptions: ['Apstar7', 'Express80E', 'ABS2', 'Telkom3s', 'Asiasat4', 'Potok'],
    };
  },
  components: { // Allow components to be used as HTML element
    //////////////////////////////////////////////////////////////////////////////////////
    SatelliteSelector,
    BeamSelector,
    TransponderSelector,
    FreqDL,
    //////////////////////////////////////////////////////////////////////////////////////
    Location,
    AntSize,
    AdjDxContour,
    //////////////////////////////////////////////////////////////////////////////////////
    CarrierMode,
    SatObo,
    SatIbo,
    SatelliteMode,
    Attenuation,
    DeepIn,
    //////////////////////////////////////////////////////////////////////////////////////
    PowerMarginCheck,
    PowerMarginValue,
    BwInfoCheck,
    BwInfoValue,
    //////////////////////////////////////////////////////////////////////////////////////
    Platform,
    SimplexDuplex,
    Application,
    Modem,
    BestModCode,
    ModulationA,
    //////////////////////////////////////////////////////////////////////////////////////
    AntGain,
    AntEff,
    RxAntTemp,
    LnaNoiseTemp,
    //////////////////////////////////////////////////////////////////////////////////////
    LinkAva,
    EquiBW,
    EbeCheck,
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    Calculate,
    // DesignParam
  },
  computed: {
    LocationLabelA() {
      return this.selectedLocationsA.map(function(obj) {
        return obj.label;
      }).join(',');

    },
    LocationLabelB() {
      return this.selectedLocationsB.map(function(obj) {
        return obj.label;
      }).join(',');

    },
    DxContourA() {
      return this.selectedLocationsA.map(function(obj) {
        return obj.dxConTourApstar7;
      }).join(',');


    },
    // ModValue() {
    //   var vm = this;
    //   let result = [];
    //   result = this.selectedModCodeA.find(function(x) {
    //     return x.modCode === vm.modCode;
    //   });
    //   if (result) {
    //     //return result.fec;
    //     return result.modCodeValue;
    //   }
    // },
    ModLabel() {
      return this.selectedModCodeA.map(function(obj) {
        return obj.value;
      }).join(',');


    },
    InputPara() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        selectedTp: this.selectedTp,
        selectedFreq: this.selectedFreq,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedLocationsA: this.selectedLocationsA,
        selectedLocationsB: this.selectedLocationsB,
        antSizeA: this.antSizeA,
        antSizeB: this.antSizeB,
        dxContour: this.dxContour,
        adjSatDxContourA: this.adjSatDxContourA,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedCarrier: this.selectedCarrier,
        selectedMode: this.selectedMode,
        satObo: this.satObo,
        satIbo: this.satIbo,
        atten: this.atten,
        deepIn: this.deepIn,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedPowerMargin: this.selectedPowerMargin,
        pwrVal: this.pwrVal,
        selectedBwSel: this.selectedBwSel,
        bandwidthVal: this.bandwidthVal,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedPlatform: this.selectedPlatform,
        selectedSimDuplex: this.selectedSimDuplex,
        selectedAppDVB: this.selectedAppDVB,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedModem: this.selectedModem,
        selectedBestModCode: this.selectedBestModCode,
        selectedModCodeA: this.selectedModCodeA,
        selectedModCodeB: this.selectedModCodeB,
        //////////////////////////////////////////////////////////////////////////////////////
        iflLoss: this.iflLoss,
        lossFeedA: this.lossFeedA,
        misAntUpA: this.misAntUpA,
        misAntDnB: this.misAntDnB,
        atmos: this.atmos,
        otherLossUpA: this.otherLossUpA,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedAntGain: this.selectedAntGain,
        selectedAntEff: this.selectedAntEff,
        selectedRxAntTemp: this.selectedRxAntTemp,
        selectedLnaTemp: this.selectedLnaTemp,
        antGainVal: this.antGainVal,
        antEffVal: this.antEffVal,
        rxAntTempVal: this.rxAntTempVal,
        lnaTempVal: this.lnaTempVal,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedLinkAva: this.selectedLinkAva,
        linkAvaVal: this.linkAvaVal,
        selectedEquivalentBW: this.selectedEquivalentBW,
        selectedEbe: this.selectedEbe,
        //////////////////////////////////////////////////////////////////////////////////////

      }
    }
  },
  methods: {
    // Called from the 'satelliteSelected' event of SatelliteSelector. The 'satellite' argument of this function comes 2nd argument of this.$emit() inside SatelliteSelector.vue
    // updateSatellite(satellite) {
    //   this.selectedSatellite = satellite;
    // },
    // // Called from the 'beamSelected' event of BeamSelector. The 'beam' argument of this function comes from 2nd arguemnt of this.$emit() inside BeamSelector.vue
    // updateBeam(beam) {
    //   this.selectedBeam = beam;
    // },
    //
    // updateTp(transponder) {
    //   this.selectedTp = transponder;
    // },

    // updateAdj(satellite) {
    //   this.adjSat = sat;
    // },

    // locationA(locations) {
    //   this.selectedLocationsA = locations;
    // },
    // locationB(locations) {
    //   this.selectedLocationsB = locations;
    // },


  }
}
</script>

<style>
.blue-box1 {
  margin-left: 25px;
  margin-bottom: 5px;
  text-align: center;
  padding: 4px;
  border: black solid;
  border-radius: 8px;
  background-color: #337AB7;
  color: white;
}

.blue-box2 {
  padding: 4px;
  border: black solid;
  border-radius: 8px;
  background-color: #337AB7;
  color: white;
}
</style>
