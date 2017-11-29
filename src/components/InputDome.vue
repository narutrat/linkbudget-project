<template>
<div class="app" style="margin-top:-40px; margin-left:10px; margin-right:10px; text-align:left">
<h1>Link Calculation</h1>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#Page1">Input Page</a></li>
    <li><a data-toggle="tab" href="#Page2">Calculate Page</a></li>
    <li><a data-toggle="tab" href="#Page3">JRF Page</a></li>
    <li><a data-toggle="tab" href="#Page4">CTP Page</a></li>
    <!-- <li><a data-toggle="tab" href="#Page5">CTP Print View</a></li> -->
  </ul>

  <div class="tab-content">
    <div id="Page1" class="tab-pane fade in active">

      <!-- Satellite Section -->
      <!-- <div id="home" class="tab-pane fade in active"> -->
      <div class="row">
        <h3 style="margin-left:30px; margin-top:5px; font-weight:bold">Satellite</h3>

        <!-- Satellite Label -->
        <div class="col-sm-1 blue-box1">
          <span>Satellite: {{ selectedSatellite.name }} </span>
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
          <!-- <beam-selector :satelliteName="selectedSatellite.text" @beamSelected="selectedBeam = $event"></beam-selector> -->
          <beam-selector :satelliteName="selectedSatellite.name" @beamSelected="updateBeam"></beam-selector>
        </div>

        <div class="col-sm-1"></div>

        <!-- Transponder Label -->
        <div class="col-sm-1 blue-box1">
          <span>Transponder: {{ selectedTp.name }}</span>
        </div>

        <div>
          <transponder-selector :beams="selectedBeam" @tpSelected="updateTp"></transponder-selector>
          <!-- <transponder-selector :beams="selectedBeam" @tpSelected="selectedTp = $event"></transponder-selector> -->
        </div>

        <!-- <div class="col-sm-1"></div> -->
        <div class="col-sm-2">
          Center Frequency: {{ selectedTp.downlink_cf }} GHz
        </div>
        <!-- Frequency -->
        <!-- <div class="col-sm-2" style="margin-top:5px">
      <FreqDL :transponders="selectedTp"></FreqDL>
    </div> -->
      </div>

      <!-- {{selectedTp}} -->

      <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

      <!-- Location Section -->

      <div class="row">
        <h3 style="margin-left:30px; margin-top:5px; font-weight:bold; text-align:left">Location</h3>

        <div class="col-sm-7"></div>

        <div class="col-sm-1" style="margin-left:90px">
          <span>Adjacent Satellite </span>
        </div>

        <div class="col-sm-1" v-for="sat in adjSat" style="text-align:center">
          {{ sat }}
        </div>
      </div>

      <div class="row">
        <div class="col-sm-1 blue-box1">
          <!-- <span>Location A</span> -->
          <span>Location A: {{ LocationLabelA }}</span>
        </div>
<!-- {{this.selectedLocationsA.name}} -->
        <div class="col-sm-3">
          <!-- <Location @locationSelected="locationA"></Location> -->
          <Location @locationSelected="selectedLocationsA = $event"></Location>
        </div>

        <div class="col-sm-2 blue-box1">
          Tx Antenna Size: {{ antSizeA }}
        </div>

        <div class="col-sm-1">
          <AntSize class="form-control" @antSizeSelected="updateAntSizeA"></AntSize>
        </div>

        <div class="col-sm-1 blue-box1">
          Dx Contours
        </div>

        <AdjDxContour :adjDxContour="adjDxContourDataA" @dxContourVal="adjSatDxContourA = $event"></AdjDxContour>
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
          <AntSize class="form-control" @antSizeSelected="updateAntSizeB"></AntSize>
        </div>

        <div class="col-sm-1 blue-box1">
          Dx Contours
        </div>

        <AdjDxContour :adjDxContour="adjDxContourDataB" @dxContourVal="adjSatDxContourB = $event"></AdjDxContour>
      </div>

      <div class="row">
        <div class="col-sm-1 blue-box1">
          <span>Adjacent Satellite: {{ selectedSatellite.adjSat }} </span>
        </div>

        <div class="col-sm-4">
          <div class="row" style="margin-left:5px; text-align:left">
            <!-- <input type="checkbox" v-bind:value="adj" v-model="selectedSatellite.adjSat"> {{ adj }} </input> -->
            <AdjSatCheckBox @adjSatList="updateAdjSat" :adjSatellites="adjSatellitesData"></AdjSatCheckBox>
          </div>
        </div>

        <div class="col-sm-2"></div>

        <div class="col-sm-2" style="text-align:center; margin-left:-5px; line-height:35px">
          <div v-for="sat in adjSat">
            {{ sat }} Peak :
          </div>
        </div>
        <div class="col-sm-1">
          <div class="row">
            <input v-if="this.adjSat[0]" class="form-control" v-model="adjSatPeak1" style="text-align:center"/>
          </div>
          <div class="row">
            <input v-if="this.adjSat[1]" class="form-control"v-model="adjSatPeak2" style="text-align:center"/>
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

            <div class="col-sm-3" style="margin-top:6px">
              {{satObo}}
              <!-- <SatObo class="form-control" @satOboSelected="satObo = $event"></SatObo> -->
              <!-- <input v-model="satObo" class="form-control col-sm-2" style="margin-left:15px"> -->
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

            <div class="col-sm-3" style="margin-top:6px">
              {{satIbo}}
              <!-- <input v-model="satIbo" class="form-control col-sm-2" style="margin-left:15px"> -->
              <!-- <SatIbo class="form-control" @satIboSelected="satIbo = $event"></SatIbo> -->
            </div>

          </div>

          <div class="row">
            <div class="col-sm-4 blue-box1">
              Attenuation: {{ atten }}
            </div>

            <div class="col-sm-3" style="margin-top:6px">
              {{atten}}
              <!-- <input v-model="atten" class="form-control col-sm-2" style="margin-left:15px"> -->

              <!-- <Attenuation class="form-control" @attenSelected="atten = $event"></Attenuation> -->
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
          <span>Power Utilization/Margin: {{ pwrValA }} // {{ pwrValB }}</span>
        </div>

        <div class="col-sm-2" style="text-align:left">
          <PowerMarginCheck @powerMarginSelected="selectedPowerMargin = $event"></PowerMarginCheck>
        </div>

        <!-- <div class="col-sm-1">
      <PowerMarginValue class="form-control" @pwrValSelected="pwrVal = $event"></PowerMarginValue>
    </div> -->

        <div class="col-sm-3">
          <div v-if="selectedPowerMargin === 'Power Utilization' ">
            <div class="input-group">
              <span class="input-group-addon">Power Utilization</span>
              <PowerMarginValue class="form-control" @pwrValSelected="pwrValA = $event"></PowerMarginValue>
              <span class="input-group-addon">%</span>
            </div>
          </div>
          <div v-else>
            <div class="input-group">
              <span class="input-group-addon">Margin</span>
              <PowerMarginValue class="form-control" @pwrValSelected="marginA = $event"></PowerMarginValue>
              <span class="input-group-addon">dB</span>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div v-if="selectedPowerMargin === 'Power Utilization' ">
            <div class="input-group">
              <span class="input-group-addon">Power Utilization</span>
              <PowerMarginValue class="form-control" @pwrValSelected="pwrValB = $event"></PowerMarginValue>
              <span class="input-group-addon">%</span>
            </div>
          </div>
          <div v-else>
            <div class="input-group">
              <span class="input-group-addon">Margin</span>
              <PowerMarginValue class="form-control" @pwrValSelected="marginB = $event"></PowerMarginValue>
              <span class="input-group-addon">dB</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2 blue-box1">
          <span>BW / Info Rate: {{ bandwidthValA }}//{{ bandwidthValB }}</span>
        </div>

        <div class="col-sm-2" style="text-align:left">
          <BwInfoCheck @bwSelSelected="selectedBwSel = $event"></BwInfoCheck>
        </div>

        <div class="col-sm-3">
          <div v-if="selectedBwSel === 'Bandwidth' ">
            <div class="input-group">
              <span class="input-group-addon">Bandwidth</span>
              <BwInfoValue @bandwidthValSelected="bandwidthValA = $event"></BwInfoValue>
              <span class="input-group-addon">kHz</span>
            </div>
          </div>
          <div v-else>
            <div class="input-group">
              <span class="input-group-addon">Information Rate</span>
              <BwInfoValue @bandwidthValSelected="infoValA = $event"></BwInfoValue>
              <span class="input-group-addon">kbps</span>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div v-if="selectedBwSel === 'Bandwidth' ">
            <div class="input-group">
              <span class="input-group-addon">Bandwidth</span>
              <BwInfoValue @bandwidthValSelected="bandwidthValB = $event"></BwInfoValue>
              <span class="input-group-addon">kHz</span>
            </div>
          </div>
          <div v-else>
            <div class="input-group">
              <span class="input-group-addon">Information Rate</span>
              <BwInfoValue @bandwidthValSelected="infoValB = $event"></BwInfoValue>
              <span class="input-group-addon">kbps</span>
            </div>
          </div>
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
          <SimplexDuplex :platform="selectedPlatform" @simDuplexSelected="selectedSimDuplex = $event"></SimplexDuplex>
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
          <span>Modem: {{ selectedModem.name }}</span>
          <!-- //  {{ selectedModem}} -->
          <!-- {{this.selectedModem.applications.roll_off_factor}} -->
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
              <span>Modulation A: {{ selectedModCodeA.name }}</span>
            </div>

            <div class="col-sm-2">

            </div>
            <Modulation :mcgs="mcgA" @modCodeSelected="selectedModCodeA= $event"></Modulation>

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
              <span>Modulation B: {{ selectedModCodeB.name }}</span>
            </div>

            <div class="col-sm-2">
              <Modulation :mcgs="mcgB" @modCodeSelected="selectedModCodeB= $event"></Modulation>
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
              <!-- <iflLoss @iflSelected="iflLoss = $event"></iflLoss> -->

              <div class="col-sm-1"></div>

              <div class="input-group col-sm-4">
                <span class="input-group-addon">Uplink</span>
                <!-- <iflLoss @iflSelected="iflLoss = $event" :dataIflLoss="iflVal"></iflLoss> -->
                <input v-model="iflLoss" style="text-align:center" class="form-control col-sm-2">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 blue-box1">
                <span>Loss from Antenna Feed to LNA: {{ lossFeedA }}</span>
              </div>

              <div class="col-sm-1"></div>

              <div class="col-sm-4">
                <LossFeedA class="form-control" style="text-align:center" @lossFeedASelected="lossFeedA = $event"></LossFeedA>
              </div>
            </div>

            <div class="row">

              <div class="col-sm-4 blue-box1">
                <span>Mispointing Antenna Loss: {{ misAntUpA }} / {{ misAntDnB }}</span>
              </div>

              <div class="col-sm-1"></div>

              <div class="input-group col-sm-4">
                <span class="input-group-addon">Uplink</span>
                <MisAntUpA class="form-control" style="text-align:center" @misAntUpASelected="misAntUpA = $event"></MisAntUpA>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5" style="margin-left:25px"></div>

              <div class="input-group col-sm-4" style="margin-top:-5px; margin-bottom:5px">
                <span class="input-group-addon">Downlink</span>
                <MisAntDnB class="form-control" style="text-align:center" @misAntDnBSelected="misAntDnB = $event"></MisAntDnB>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 blue-box1">
                <span>Atmospheric Absorption: {{ atmos }}</span>
              </div>

              <div class="col-sm-1"></div>

              <div class="col-sm-4">
                <!-- <input v-model="atmos" class="form-control" style="text-align:center" /> -->
                <Atmos class="form-control" style="text-align:center" @atmosSelected="atmos = $event"></Atmos>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 blue-box1">
                <span>Other Loss (XPD & Axial Ratio Loss): {{ otherLoss }}</span>
              </div>

              <div class="col-sm-1"></div>

              <div class="col-sm-4">
                <OtherLoss class="form-control" style="text-align:center" @otherLossSelected="otherLoss = $event"></OtherLoss>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-4 blue-box1">
                <span>Antenna Gain: {{ antGainVal }} </span>
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
                <span>Antenna Efficiency: {{ antEffVal }}</span>
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
    </div>

    <!-- <tab name="Second tab"> -->
    <div id="Page2" class="tab-pane fade">
      <Calculate style="line-height:25px; margin-top:2px" @calFreq="updateFreq" @calLinkAva="updateLinkAva" @calUtilParam="updateUtilParam" @calCNA_Both="updateCNA_Both" @calCNB_Both="updateCNB_Both" @calCNA="updateCNA" @calCNB="updateCNB" @calAdjustableParamA="updateAdjustableParamA" @calAdjustableParamB="updateAdjustableParamB" @calTransmitLossA ="updateTranmitLossA" @calTransmitLossB ="updateTranmitLossB" @calDesignParamA="updateDesignParamA" @calDesignParamB="updateDesignParamB" @calCarrierA="updateCarrierA" @calCarrierB="updateCarrierB" @calAnt="updateAnt" @calLocationA="updateLocationA" @calLocationB="updateLocationB" @calDataA="updateDataA" @calDataB="updateDataB" :paraData="InputPara"></Calculate>
    </div>

    <div id="Page3" class="tab-pane fade">
      <SummaryOutput style="line-height:25px; margin-top:2px" :sumData="SumPara"></SummaryOutput>
    </div>

    <div id="Page4" class="tab-pane fade">
      <CtpInput style="line-height:25px; margin-top:2px" @ctpValue="updateCtp" :ctpData="CtpPara"></CtpInput>
    </div>

    <!-- <div id="Page5" class="tab-pane fade">
      <Ctp style="line-height:25px; margin-top:2px" :ctpPrint="PrintPara"></Ctp>
    </div> -->
    <!-- <span>{{this.bandwidthValA}}//</span>
  <span>{{this.modemApp.roll_off_factor}}//</span>
  <span>{{this.selectedModCodeA.fec}}//</span>
  <span>{{this.selectedModCodeA.mod}}</span> -->
<!-- {{this.adjSat}} -->
  </div>
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
import AdjDxContour from './inputs/AdjDxContour'
import AdjSatCheckBox from './inputs/AdjSatCheckBox'
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
import Modulation from './inputs/Modulation'
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
import SummaryOutput from './calc/SummaryOutput'
import CtpInput from './calc/CtpInput'
// import Ctp from './calc/Ctp'
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
      objBeam: '',
      maxEirpNon: '',
      locationSelA: '',
      locationSelB: '',
      //////////////////////////////////////////////////////////////////////////////////////
      // selectedAdj: [],
      selectedLocationsA: [],
      selectedLocationsB: [],
      antSizeA: "",
      antSizeB: "",
      dxContour: "",
      adjSatDxContourA: [],
      adjSatDxContourB: [],
      adjSatCheckBox: [],
      //////////////////////////////////////////////////////////////////////////////////////
      selectedCarrier: "multi",
      selectedMode: "FGM",
      // satObo: "",
      // satIbo: "",
      // atten: 12,
      deepIn: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedPowerMargin: "Power Utilization",
      pwrValA: "",
      pwrValB: "",
      marginA: "",
      marginB: "",
      selectedBwSel: "Bandwidth",
      bandwidthValA: "",
      bandwidthValB: "",
      infoValA: "",
      infoValB: "",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedPlatform: "VSAT",
      selectedSimDuplex: 'Duplex',
      selectedAppDVB: "DVB-S1",
      //////////////////////////////////////////////////////////////////////////////////////
      selectedModem: "",
      selectedBestModCode: "No",
      selectedModCodeA: "",
      selectedModCodeB: "",
      // selectedFecA: "",
      //////////////////////////////////////////////////////////////////////////////////////
      iflLoss: 2,
      lossFeedA: 0.3,
      misAntUpA: 0.2,
      misAntDnB: 0.2,
      atmos: 0.1,
      otherLoss: 0,
      hpaPowerBoth: '',
      //////////////////////////////////////////////////////////////////////////////////////
      celeritas: 299792500,
      selectedAntGain: "Calculation",
      selectedAntEff: "Default",
      selectedRxAntTemp: "Default",
      selectedLnaTemp: "Default",
      // antGainVal: "",
      // antEffVal: 60,
      rxAntTempVal: 35,
      lnaTempVal: 45,
      //////////////////////////////////////////////////////////////////////////////////////
      selectedLinkAva: "Default",
      linkAvaVal: 99.99,
      selectedEquivalentBW: "No",
      selectedEbe: "Hide",
      //////////////////////////////////////////////////////////////////////////////////////
      adjSat: [],
      adjSatOptions: ['Apstar76.5E', 'Express80E', 'ABS2', 'Telkom118E', 'Asiasat122E', 'Potok'],
      cityA: '',
      countryA: '',
      eirpdownA: '',
      gtA: '',
      azAngleA: '',
      elAngleA: '',
      cityB: '',
      countryB: '',
      eirpdownB: '',
      gtB: '',
      azAngleB: '',
      elAngleB: '',
      carrierInfoA: '',
      carrierInfoB: '',
      allowBWA: '',
      allowBWB: '',
      iflLossA: '',
      iflLossB: '',
      totalLossUpA: '',
      totalLossUpB: '',
      hpaPowerBothA: '',
      hpaPowerBothB: '',
      ciUpTotalA: '',
      cnUpA: '',
      cnDnA: '',
      interModA: '',
      ciCochA: '',
      ciAdjA: '',
      cnTotalA: '',
      ebNoA: '',
      marginA: '',
      ciUpTotalB: '',
      cnUpB: '',
      cnDnB: '',
      interModB: '',
      ciCochB: '',
      ciAdjB: '',
      cnTotalB: '',
      ebNoB: '',
      marginB: '',
      ebNoBothA: '',
      ebNoBothB: '',
      pwrUtilA: '',
      pwrUtilB: '',
      guardBandValA: '',
      guardBandValB: '',
      upFadePercent: '',
      dnFadePercent: '',
      avrFadePercent: '',
      adjInfo: {},
      ctpInfo: '',
      adjSatPeak1: '',
      adjSatPeak2: ''
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
    AdjSatCheckBox,
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
    Modulation,
    //////////////////////////////////////////////////////////////////////////////////////
    IflLoss,
    LossFeedA,
    MisAntUpA,
    MisAntDnB,
    Atmos,
    OtherLoss,
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
    SummaryOutput,
    CtpInput,
    // Ctp
  },
  computed: {
    LocationLabelA() {
      return this.selectedLocationsA.map(function(obj) {
        return obj.city;
      }).join(',');

    },
    LocationLabelB() {
      return this.selectedLocationsB.map(function(obj) {
        return obj.city;
      }).join(',');

    },
    DxContourA() {
      return this.selectedLocationsA.map(function(obj) {
        return obj.dxConTourApstar7;
      }).join(',');

    },
    satObo() {
      var vm = this;
      let result = [];
      if (this.selectedTp) {
        result = this.selectedTp.backoff_settings.find(function(x) {
          return x.num_carriers === vm.selectedCarrier;
        });
        if (result) {
          return result.obo;
        } else {
          return 'Alert';
        }
      } else {
        return '';
      }
    },
    satIbo() {
      var vm = this;
      let result = [];
      if (this.selectedTp) {
        result = this.selectedTp.backoff_settings.find(function(x) {
          return x.num_carriers === vm.selectedCarrier;
        });
        if (result) {
          return result.ibo;
        } else {
          return 'Alert';
        }
      } else {
        return '';
      }
    },
    interMod() {
      var vm = this;
      let result = [];
      if (this.selectedTp) {
        result = this.selectedTp.backoff_settings.find(function(x) {
          return x.num_carriers === vm.selectedCarrier;
        });
        if (result) {
          return result.intermod;
        } else {
          return 'Alert';
        }
      } else {
        return '';
      }
    },
    atten() {
      return this.selectedTp.default_atten;
    },
    selectedPath() {
      return this.selectedPlatform;
    },
    modemApp() {
      if (this.selectedModem) {
        var a = this.selectedModem.applications.find(x => x.type === 'forward' || x.type === 'SCPC' || x.type === 'Broadcast')
        return a;
      } else {
        return [];
      }

    },
    mcgA() {
      if (this.selectedModem) {
        var a = this.selectedModem.applications.find(x => x.type === 'forward' || x.type === 'SCPC' || x.type === 'Broadcast')
        return a.mcgs;
      } else {
        return [];
      }

    },
    mcgB() {
      if (this.selectedModem) {
        var a = this.selectedModem.applications.find(x => x.type === 'return' || x.type === 'SCPC')
        return a.mcgs;
      } else {
        return [];
      }
    },
    antGainVal() {
      if (this.selectedAntGain === "Calculation") {
        return 10 * Math.log10((this.antEffVal / 100) * (Math.pow(Math.PI * this.antSizeA / (this.celeritas / (this.selectedTp.uplink_cf * 1000000000)), 2)));
        // return 'A';
      } else {
        return 0;
      }
    },
    antEffVal() {
      if (this.selectedAntEff === "Default") {
        return 60;
      } else {
        return '';
      }
    },
    adjSatellitesData() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        selectedLocations: this.selectedLocationsA,
        city: this.cityA,
      }
    },
    adjDxContourDataA() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        selectedLocations: this.selectedLocationsA,
        city: this.cityA,
        adjSatSel: this.adjSat,
        adjSatPeak1: this.adjSatPeak1,
        adjSatPeak2: this.adjSatPeak2
      }
    },
    adjDxContourDataB() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        selectedLocations: this.selectedLocationsB,
        city: this.cityB,
        adjSatSel: this.adjSat,
        adjSatPeak1: this.adjSatPeak1,
        adjSatPeak2: this.adjSatPeak2
      }
    },
    satName() {
      if (this.selectedSatellite.name === "Thaicom 5") {
        return "T5";
      } else if (this.selectedSatellite.name === "Thaicom 6") {
        return "T6";
      } else if (this.selectedSatellite.name === "Thaicom 7") {
        return "T7";
      } else if (this.selectedSatellite.name === "Thaicom 8") {
        return "T8"
      } else {
        return "Warning";
      }
    },
    satAndBeam() {
      return this.selectedSatellite.name + " " + this.selectedBeam ;
    },
    startFrqUp() {
      return ((this.frqUp_A * 1000) - ((this.allowBWA/2) / 1000));
    },
    endFrqUp() {
      return ((this.frqUp_A * 1000) + ((this.allowBWA/2) / 1000));
    },
    startFrqDn() {
      return ((this.frqDn_A * 1000) - ((this.allowBWA/2) / 1000));
    },
    endFrqDn() {
      return ((this.frqDn_A * 1000) + ((this.allowBWA/2) /1000));
    },
    upPolText() {
      if (this.selectedTp.uplink_pol === 'H') {
        return 'Horizontal';
      } else {
        return 'Vertical';
      }
    },
    dnPolText() {
      if (this.selectedTp.downlink_pol === 'H') {
        return 'Horizontal';
      } else {
        return 'Vertical';
      }
    },
    txSite(){
      return this.countryA + ', ' + this.cityA;
    },
    rxSite(){
      return this.countryB + ', ' + this.cityB;
    },
    // iflVal() {
    //   return {
    //     iflLoss: this.iflLoss
    //   }
    // },
    // dataBwInfoA(){
    //   return {
    //     selectedBwSel: this.selectedBwSel,
    //     bandwidth: this.bandwidthValA,
    //     selectedModCode: this.selectedModCodeA,
    //     bt: this.modemApp.roll_off_factor,
    //   }
    // },
    // dataBwInfoB(){
    //   return {
    //     selectedBwSel: this.selectedBwSel,
    //     bandwidth: this.bandwidthValB,
    //     selectedModCode: this.selectedModCodeB,
    //     bt: this.modemApp.roll_off_factor,
    //   }
    // },
    InputPara() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        maxEirpNon: this.maxEirpNon,
        selectedTp: this.selectedTp,
        // selectedFreq: this.selectedFreq,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedLocationsA: this.selectedLocationsA,
        selectedLocationsB: this.selectedLocationsB,
        antSizeA: this.antSizeA,
        antSizeB: this.antSizeB,
        dxContour: this.dxContour,
        adjSatSel: this.adjSat,
        adjSatDxContourA: this.adjSatDxContourA,
        adjSatDxContourB: this.adjSatDxContourB,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedCarrier: this.selectedCarrier,
        selectedMode: this.selectedMode,
        satObo: this.satObo,
        satIbo: this.satIbo,
        interMod: this.interMod,
        atten: this.atten,
        deepIn: this.deepIn,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedPowerMargin: this.selectedPowerMargin,
        pwrValA: this.pwrValA,
        pwrValB: this.pwrValB,
        marginA: this.marginA,
        marginB: this.marginB,
        selectedBwSel: this.selectedBwSel,
        bandwidthValA: this.bandwidthValA,
        bandwidthValB: this.bandwidthValB,
        // infoValA: this.infoValA,
        // infoValB: this.infoValB,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedPlatform: this.selectedPlatform,
        selectedSimDuplex: this.selectedSimDuplex,
        selectedAppDVB: this.selectedAppDVB,
        //////////////////////////////////////////////////////////////////////////////////////
        selectedModem: this.selectedModem,
        selectedBestModCode: this.selectedBestModCode,
        bt: this.modemApp.roll_off_factor,
        selectedModCodeA: this.selectedModCodeA,
        selectedModCodeB: this.selectedModCodeB,
        //////////////////////////////////////////////////////////////////////////////////////
        iflLoss: this.iflLoss,
        lossFeedA: this.lossFeedA,
        misAntUpA: this.misAntUpA,
        misAntDnB: this.misAntDnB,
        atmos: this.atmos,
        otherLoss: this.otherLoss,
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
        adjInfo: this.adjInfo
      }
    },
    SumPara() {
      return {
        selectedSatellite: this.selectedSatellite,
        selectedBeam: this.selectedBeam,
        cityA: this.cityA,
        countryA: this.countryA,
        eirpdownA: this.eirpdownA,
        gtA: this.gtA,
        azAngleA: +this.azAngleA,
        elAngleA: +this.elAngleA,
        antSizeA: +this.antSizeA,

        cityB: this.cityB,
        countryB: this.countryB,
        eirpdownB: this.eirpdownB,
        gtB: this.gtB,
        azAngleB: +this.azAngleB,
        elAngleB: +this.elAngleB,
        antSizeB: +this.antSizeB,

        // carrierInfoA: +this.carrierInfoA,
        // carrierInfoB: +this.carrierInfoB,

        infoValueA: +this.carrierInfoA.infoValue,
        fecA: +this.carrierInfoA.fec,
        ebNoThrA: +this.carrierInfoA.ebNo,
        btA: +this.carrierInfoA.bt,
        modA: +this.carrierInfoA.mod,

        infoValueB: +this.carrierInfoB.infoValue,
        fecB: +this.carrierInfoB.fec,
        ebNoThrB: +this.carrierInfoB.ebNo,
        btB: +this.carrierInfoB.bt,
        modB: +this.carrierInfoB.mod,

        allowBWA: this.allowBWA,
        allowBWB: this.allowBWB,
        iflLossA: this.iflLossA,
        iflLossB: this.iflLossB,
        totalLossUpA: this.totalLossUpA,
        totalLossUpB: this.totalLossUpB,
        hpaPowerBothA: this.hpaPowerBothA,
        hpaPowerBothB: this.hpaPowerBothB,

        ciUpTotalA: +this.ciUpTotalA,
        cnUpA: +this.cnUpA,
        cnDnA: +this.cnDnA,

        interModA: this.interModA,
        ciCochA: +this.ciCochA,
        ciAdjA: +this.ciAdjA,
        cnTotalA: +this.cnTotalA,
        ebNoA: +this.ebNoA,
        marginA: +this.marginA,

        ciUpTotalB: +this.ciUpTotalB,
        cnUpB: +this.cnUpB,
        cnDnB: +this.cnDnB,

        interModB: this.interModB,
        ciCochB: +this.ciCochB,
        ciAdjB: +this.ciAdjB,
        cnTotalB: +this.cnTotalB,
        ebNoB: +this.ebNoB,
        marginB: +this.marginB,

        ebNoBothA: +this.ebNoBothA,
        ebNoBothB: +this.ebNoBothB,

        pwrUtilA: +this.pwrUtilA,
        pwrUtilB: +this.pwrUtilB,
        guardBandValA: this.guardBandValA,
        guardBandValB: this.guardBandValB,
        upFadePercent: +this.upFadePercent,
        dnFadePercent: +this.dnFadePercent,
        avrFadePercent: +this.avrFadePercent,

        selectedEbe: this.selectedEbe,
        selectedEquivalentBW: this.selectedEquivalentBW,
        selectedSimDuplex: this.selectedSimDuplex,
      }
    },
    CtpPara() {
      return {
        satAndBeam: this.satAndBeam,
        // satName: this.satName,
        selectedBeam: this.selectedBeam,
        tp: this.selectedTp.name,

        allowBWA: this.allowBWA,
        allowBWB: this.allowBWB,

        frqUp_A: this.frqUp_A * 1000,
        frqUp_B: this.frqUp_B * 1000,
        frqDn_A: this.frqDn_A * 1000,
        frqDn_B: this.frqDn_B * 1000,

        startFrqUp: this.startFrqUp,
        endFrqUp: this.endFrqUp,
        startFrqDn: this.startFrqDn,
        endFrqDn: this.endFrqDn,

        upPol: this.upPolText,
        dnPol: this.dnPolText,
        attenTp: this.attenTp,

        txSite: this.txSite,
        rxSite: this.rxSite,
        txAnt: this.antSizeA,
        rxAnt: this.antSizeB,
        infoRate: this.carrierInfoA.infoValue,
        fec: this.carrierInfoA.fec,

      }
    },
    PrintPara() {
      return {
        ctpInfo: this.ctpInfo
      }
    }
  },
  methods: {
    // Called from the 'satelliteSelected' event of SatelliteSelector. The 'satellite' argument of this function comes 2nd argument of this.$emit() inside SatelliteSelector.vue
    // updateSatellite(satellite) {
    //   this.selectedSatellite = satellite;
    // },
    // // Called from the 'beamSelected' event of BeamSelector. The 'beam' argument of this function comes from 2nd arguemnt of this.$emit() inside BeamSelector.vue
    updateBeam(value) {
      // this.selectedBeam = value
      this.selectedBeam = value;

    },

    updateTp(value) {
      this.selectedTp = value;
    },
    updateAnt(value) {
      this.attenTp = value.atten;
      this.antSizeA = value.antSizeA;
      this.antSizeB = value.antSizeB;
    },
    updateLocationA(value) {
      this.cityA = value.cityA;
      this.countryA = value.countryA;
      this.eirpdownA = value.eirpdownA;
      this.gtA = value.gtA;

    },
    updateLocationB(value) {
      this.cityB = value.cityB;
      this.countryB = value.countryB;
      this.eirpdownB = value.eirpdownB;
      this.gtB = value.gtB;
    },
    updateDataA(value) {
      this.azAngleA = value.azAngleA;
      this.elAngleA = value.elAngleA;
    },
    updateDataB(value) {
      this.azAngleB = value.azAngleB;
      this.elAngleB = value.elAngleB;
    },
    updateAntSizeA(value) {
      this.antSizeA = value.antSize;
      this.iflLoss = value.iflLoss;
      this.misAntUpA = value.misAntUpA;
      this.misAntDnA = value.misAntDnA;
    },
    updateAntSizeB(value) {
      this.antSizeB = value.antSize;
      // this.iflLoss = value.iflLoss,
      this.misAntUpB = value.misAntUpA;
      this.misAntDnB = value.misAntDnA;
    },
    updateCarrierA(value) {
      this.carrierInfoA = value.carrierInfoA;
    },
    updateCarrierB(value) {
      this.carrierInfoB = value.carrierInfoB;
    },
    updateDesignParamA(value) {
      this.allowBWA = value.allowBWA;
      this.guardBandValA = value.guardBandValA;
    },
    updateDesignParamB(value) {
      this.allowBWB = value.allowBWB;
      this.guardBandValB = value.guardBandValB;
    },
    updateTranmitLossA(value) {
      this.iflLossA = value.iflLossA;
      this.totalLossUpA = value.totalLossUpA;
    },
    updateTranmitLossB(value) {
      this.iflLossB = value.iflLossB;
      this.totalLossUpB = value.totalLossUpB;
    },
    updateAdjustableParamA(value) {
      this.hpaPowerBothA = value.hpaPowerBothA;
    },
    updateAdjustableParamB(value) {
      this.hpaPowerBothB = value.hpaPowerBothB;
    },
    updateCNA(value) {
      this.cnTotalA = value.cnTotalA;
      this.ciUpTotalA = value.ciUpTotalA;
      this.cnUpA = value.cnUpA;
      this.cnDnA = value.cnDnA;
      this.interModA = value.interModA;
      this.ciCochA = value.ciCochA;
      this.ciAdjA = value.ciAdjA;
      this.ebNoA = value.ebNoA;
      this.marginA = value.marginA;
    },
    updateCNB(value) {
      this.cnTotalB = value.cnTotalB;
      this.ciUpTotalB = value.ciUpTotalB;
      this.cnUpB = value.cnUpB;
      this.cnDnB = value.cnDnB;
      this.interModB = value.interModB;
      this.ciCochB = value.ciCochB;
      this.ciAdjB = value.ciAdjB;
      this.ebNoB = value.ebNoB;
      this.marginB = value.marginB;
    },
    updateCNA_Both(value) {
      this.ebNoBothA = value.ebNoBothA;
    },
    updateCNB_Both(value) {
      this.ebNoBothB = value.ebNoBothB;
    },
    updateUtilParam(value) {
      this.pwrUtilA = value.pwrUtilA;
      this.pwrUtilB = value.pwrUtilB;
    },
    updateLinkAva(value) {
      this.upFadePercent = value.upFadePercent;
      this.dnFadePercent = value.dnFadePercent;
      this.avrFadePercent = value.avrFadePercent;
    },
    updateAdjSat(value) {
      this.adjSat = value.adjSat;
      this.adjInfo = value.adjInfo;
    },
    updateFreq(value) {
      this.frqUp_A = value.frqUp_A;
      this.frqUp_B = value.frqUp_B;
      this.frqDn_A = value.frqDn_A;
      this.frqDn_B = value.frqDn_B;
    },
    updateCtp(value) {
      this.ctpInfo = value;
      this.$emit('valCtp', {
        ctpInfo: this.ctpInfo,
      })
    },
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
