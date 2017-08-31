<template>
<div>
  <div id="app" style="margin-right:20px">

    <!-- ////////////////////////////// Section1: Satellite //////////////////////////////-->
    <!-- /////////////// Satellite /////////////// -->
    <div class="row" style="padding:10px">

      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Satellite</h3>

      <div id="template" class="col-sm-1">
        <span>Satellite: {{ selectedSatelliteName }} </span>
      </div>

      <div class="col-sm-2">
        <select v-model="satellite" class="btn btn-default" @change="satelliteChanged">
        <option v-for="satellite in satelliteDatabase" v-bind:value="satellite.value">
          {{ satellite.text }}
        </option>
    </select>
      </div>


      <!-- /////////////// Beam /////////////// -->
      <div id="template" class="col-sm-1">
        <span>Beam: {{ beams }}</span>
      </div>

      <div class="col-sm-1">
        <select v-model="beams" class="btn btn-default">
      <option value="">Select Beam</option>
        <option v-for="beam in beam_options" >
          {{ beam }}
        </option>
    </select>
      </div>

      <div class="col-sm-1"></div>

      <!-- /////////////// Transponder /////////////// -->
      <div id="template" class="col-sm-1">
        <span>Transponder: {{ transponders }}</span>
      </div>

      <div class="col-sm-1">
        <select v-model="transponders" class="btn btn-default" @change="frqSel">
      <option value="">Select Transponder</option>
        <option v-for="transponder in tp_options" >
          {{ transponder }}
        </option>
    </select>
      </div>

      <div class="col-sm-1"></div>

      <!-- /////////////// Frequency /////////////// -->
      <div class="col-sm-2" style="margin-top:5px">
        <span>Frequency: {{ frqDn_A }} MHz</span>
      </div>

    </div>

    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

    <!-- ////////////////////////////// Section2: Location ////////////////////////////// -->
    <!-- /////////////// Adjacent satellite Name /////////////// -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">
      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Location</h3>
    </div>

    <div class="row">

      <div class="col-sm-7"></div>

      <div class="col-sm-1" style="margin-bottom:8px; margin-left:40px; text-align:center">
        <span>Adjacent Satellite </span>
      </div>

      <div class="col-sm-1" v-for="sat in adjSat" style="margin-bottom:8px; text-align:center">
        {{ sat }}
      </div>
    </div>


    <!-- /////////////// Tx Location /////////////// -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Tx Location: {{ selectedLocations_A }}</span>
      </div>

      <div class="col-sm-2">
        <v-select multiple v-model="Locations_A" :options="aLocation_options"></v-select>
      </div>

      <!-- /////////////// Tx Antenna Size /////////////// -->
      <div id="template" class="col-sm-1">
        Tx Antenna Size: {{ antSize_A }}
      </div>

      <input v-model="antSize_A" class="col-sm-1" style="width:95px; margin-left:10px; margin-top:4px; text-align:center" @change="lossValue_A">

      <div class="col-sm-1"></div>

      <!-- /////////////// Tx Dx Contour /////////////// -->
      <div id="template" class="col-sm-1" style="text-align:center">
        Dx Contours
      </div>

      <div class="col-sm-1" v-for="sat in adjSat" style="margin-top:8px; text-align:center">
        {{ getTxDxContour(sat) }}
      </div>

      <div class="row" style="padding-left:10px; padding-bottom:10px">
        <div id="template1" class="col-sm-12">
          {{latSel_A}}
        </div>

      </div>

    </div>

    <!-- /////////////// Rx Location /////////////// -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Rx Location: {{ selectedLocations_B }}</span>
      </div>

      <div class="col-sm-2">
        <v-select multiple v-model="Locations_B" :options="bLocation_options"></v-select>
      </div>

      <!-- /////////////// Rx Antenna Size /////////////// -->
      <div id="template" class="col-sm-1">
        Rx Antenna Size: {{ antSize_B }}
      </div>

      <input v-model="antSize_B" class="col-sm-1" style="width:95px; margin-left:10px; margin-top:4px; text-align:center" @change="lossValue_B" />

      <div class="col-sm-1"></div>

      <!-- /////////////// Rx Dx Contour /////////////// -->
      <div id="template" class="col-sm-1" style="text-align:center">
        Dx Contours
      </div>

      <div class="col-sm-1" v-for="sat in adjSat" style="margin-top:8px; text-align:center">
        {{ getRxDxContour(sat) }}
      </div>

    </div>

    <!-- /////////////// Adjacent Satellite Condition Checking /////////////// -->
    <div class="row" style="padding-left:10px; padding-bottom:10px; margin-top:10px">

      <div id="template" class="col-sm-2">
        <span>Adjacent Satellite: {{ adjSat }} </span>
      </div>

      <!-- /////////////// Adjacent Satellite from Database /////////////// -->
      <div class="col-sm-6">

        <div class="col-sm-4">
          <div class="row" v-for="adj in adjSat_options">
            <input type="checkbox" v-bind:value="adj" v-model="adjSat"> {{ adj }} </input>
          </div>
        </div>

        <!-- /////////////// Other Adjacent Satellite /////////////// -->
        <div class="col-sm-4">
          <div class="row" style="margin-bottom:5px">
            <input type="checkbox" v-bind:value="other1" v-model="adjSat" style="margin-left:15px"> Other1</input>
            <input v-model="other1" style="margin-left:15px; width:120px"></input>
          </div>
          <div class="row" style="margin-bottom:5px">
            <input type="checkbox" v-bind:value="other2" v-model="adjSat" style="margin-left:15px"> Other2</input>
            <input v-model="other2" style="margin-left:15px; width:120px"></input>
          </div>
          <div class="row" style="margin-bottom:5px">
            <input type="checkbox" v-bind:value="other3" v-model="adjSat" style="margin-left:15px"> Other3</input>
            <input v-model="other3" style="margin-left:15px; width:120px"></input>
          </div>
        </div>

      </div>

    </div>
    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

    <!-- ////////////////////////////// Section3: Carrier Setting ////////////////////////////// -->
    <!-- Carrier Mode -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Carrier Setting</h3>

      <div id="template" class="col-md-2 col-sm-2">
        <span>Carrier Mode: {{ carrier }}</span>
      </div>

      <div class="col-md-2 col-sm-2">
        <select v-model="carrier" class="btn btn-default">
        <option v-for="carrier in carrier_options" v-bind:value="carrier.label">
          {{ carrier.label }}
        </option>
    </select>
      </div>

    </div>

    <!-- Row9 Satellite OBO -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Satellite OBO: {{ aggObo }}</span>
      </div>

      <input v-model="aggObo" class="col-sm-1" style="margin-left:15px; margin-top:4px; margin-right:-13px" />

      <div class="col-sm-1">
      </div>

      <div id="template" class="col-sm-2">
        <span>Satellite IBO: {{ aggIbo }}</span>
      </div>

      <input v-model="aggIbo" class="col-sm-1" style="width:60px; margin-left:15px; margin-top:4px" />
    </div>

    <!-- Row10 Satellite Mode -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Satellite Mode: {{ mode }}</span>

      </div>

      <div class="col-sm-2">
        <select v-model="mode" class="btn btn-default">
        <option v-for="mode in mode_options" v-bind:value="mode.label">
          {{ mode.label }}
        </option>
    </select>
      </div>

      <div class="row" style="padding-left:10px; padding-bottom:10px">
        <div class="col-md-3 col-sm-2">
          <div class="row">
            <div id="template" class="col-sm-8">
              <span>Attenuation: {{ atten }}</span>
            </div>

            <input v-model="atten" class="col-md-1 col-sm-1" style="width:60px; margin-left:15px; margin-top:4px" />
          </div>

          <div class="row" style="margin-top:10px">
            <div id="template" class="col-sm-8">
              <span>Deep-in: {{ deepIn }}</span>
            </div>

            <input v-model="deepIn" class="col-md-1 col-sm-1" style="width:60px; margin-left:15px; margin-top:4px" />
          </div>
        </div>
      </div>
    </div>

    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">

    <!-- Row13 Power Utilization -->
    <div id="row13" class="row" style="padding-left:10px; padding-bottom:10px">

      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Bandwidth Infomation</h3>

      <div id="template" class="col-md-2 col-sm-2">
        <span>Power Utilization/Margin: {{ powerU }}</span>
      </div>

      <div class="col-sm-2">
        <select v-model="powerU" class="btn btn-default">
        <option v-for="powerU in power_options" v-bind:value="powerU.label">
          {{ powerU.label }}
        </option>
    </select>
      </div>

      <div class="col-sm-3" style="margin-left:-10px">

        <div v-if="powerU === 'Power Utilization' ">
          <div class="input-group">
            <span class="input-group-addon">Percent Power Utilization</span>
            <input v-model="powerUVal" class="form-control">
            <span class="input-group-addon">%</span>
          </div>
        </div>

        <div v-else-if="powerU === 'Margin' ">
          <div class="input-group">
            <span class="input-group-addon">Percent Margin</span>
            <input v-model="powerUVal" class="form-control">
            <span class="input-group-addon">dB</span>

          </div>
        </div>

        <div v-else>
        </div>

      </div>
    </div>

    <!-- Row14 Bandwidth -->
    <div id="row14" class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>BW / Info Rate: {{ bandwidthSel }}</span>
      </div>

      <div class="col-sm-2">
        <select v-model="bandwidthSel" class="btn btn-default">
        <option v-for="bandwidthSel in bandwidth_options" v-bind:value="bandwidthSel.label">
          {{ bandwidthSel.label }}
        </option>
    </select>
      </div>

      <div class="col-sm-3" style="margin-left:-10px">
        <div v-if="bandwidthSel === 'Bandwidth' ">
          <div id="Test" class="input-group">
            <span class="input-group-addon">Bandwidth</span>
            <input v-model="bwValue_A" type="text" class="form-control">
            <span class="input-group-addon">kHz</span>
          </div>
        </div>

        <div v-else-if="bandwidthSel === 'Information Rate' ">
          <div class="input-group">
            <span class="input-group-addon">Information Rate</span>
            <input v-model="infoValue_A" type="text" class="form-control">
            <span class="input-group-addon">kbps</span>
          </div>
        </div>

        <div v-else>
        </div>
      </div>

      <div v-if="powerBoth === 'Yes'" class="col-sm-3">
        <div v-if="bandwidthSel === 'Bandwidth' ">
          <div id="Test" class="input-group">
            <span class="input-group-addon">Bandwidth</span>
            <input v-model="bwValue_B" type="text" class="form-control">
            <span class="input-group-addon">kHz</span>
          </div>
        </div>

        <div v-else-if="bandwidthSel === 'Information Rate' ">
          <div class="input-group">
            <span class="input-group-addon">Information Rate</span>
            <input v-model="bwValue_B" type="text" class="form-control">
            <span class="input-group-addon">kbps</span>

          </div>
        </div>

        <div v-else>
        </div>

      </div>

      <div v-else>
      </div>
    </div>

    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">
    <!-- Row7 Platform -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <h3 style="margin-left:20px; margin-top:5px; font-weight:bold">Data Infomation</h3>

      <div id="template" class="col-md-2 col-sm-2">
        <span>Platform: {{ platform }}</span>
      </div>

      <div class="col-md-2 col-sm-2">
        <select v-model="platform" class="btn btn-default">
        <option v-for="platform in platform_options" v-bind:value="platform.label">
          {{ platform.label }}
        </option>
    </select>
      </div>

    </div>

    <!-- Row28 Power Utilization % A->B & B->A -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Simplex / Duplex: {{ powerBoth }}</span>
      </div>

      <div class="col-sm-4">
        <select v-model="powerBoth" class="btn btn-default">
        <option v-for="powerBoth in yesNo_options" v-bind:value="powerBoth.label">
          {{ powerBoth.label }}
        </option>
    </select>
      </div>
    </div>

    <!-- Row18 Application -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-md-2 col-sm-2">
        <span>Application: {{ appDVB }}</span>
      </div>

      <div class="col-md-2 col-sm-2">
        <select v-model="appDVB" class="btn btn-default">
        <option v-for="appDVB in appDVB_options" v-bind:value="appDVB.label">
          {{ appDVB.label }}
        </option>
    </select>
      </div>

    </div>

    <!-- Row15 Modem -->
    <div class="row" style="padding-left:10px; padding-bottom:20px"></div>

    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-sm-2">
        <span>Modem: {{ modem }}</span>
      </div>

      <div class="col-sm-1">
        <select v-model="modem" class="btn btn-default">
        <option v-for="modem in modem_options" v-bind:value="modem.label">
          {{ modem.label }}
        </option>
    </select>
      </div>

      <div class="input-group col-sm-2" style="padding-left:67px">
        <span class="input-group-addon">Manual</span>
        <input v-model="modem" class="form-control">
      </div>
    </div>

    <!-- Row16 Best Mod Code -->
    <div class="row" style="padding-left:10px; padding-bottom:10px">

      <div id="template" class="col-md-2 col-sm-2">
        <span>Best Mod Code: {{ bestModCode }}</span>
      </div>

      <div class="col-md-2 col-sm-2">
        <select v-model="bestModCode" class="btn btn-default">
        <option v-for="bestModCode in yesNo_options" v-bind:value="bestModCode.label">
          {{ bestModCode.label }}
        </option>
    </select>
      </div>

    </div>
    <!-- ######################### Location A Data Information ######################### -->
    <div class="row">

      <div class="col-sm-6">
        <div class="row" style="padding-left:40px; padding-bottom:10px">
          <h4 style="font-weight:bold">Location A</h4>
        </div>
        <!-- Row17 FEC & Mod -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>Modulation: {{ modCodeA }}</span>
          </div>

          <div class="col-sm-3">
            <select v-model="modCodeA" class="btn btn-default" @change="modChange_A">
          <option v-for="modA in modCode_options" v-bind:value="modA" >
            {{ modA }}
          </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="modCodeValue_A" type="text" class="form-control">
          </div>

        </div>

        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>FEC: {{ fecValue_A }}</span>
          </div>

          <div class="col-sm-3">
            <v-select multiple v-model="fecValue_A" :options="fec_options"></v-select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="fecValue_A" class="form-control">
          </div>

        </div>

        <!-- Row19 Threshold Eb/No -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>Threshold Eb/No: {{ ebNoA }}</span>
          </div>

          <div class="col-sm-3">
            <select v-model="ebNoA" class="btn btn-default">
          <option v-for="ebNoA in ebNo_options" v-bind:value="ebNoA">
            {{ ebNoA }}
          </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="ebNoA" class="form-control">
          </div>

        </div>

        <!-- Row20 BT -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>BT Product: {{ btA }}</span>
          </div>

          <div class="col-sm-3">
            <select v-model="btA" class="btn btn-default">
          <option v-for="btA in bt_options" v-bind:value="btA">
            {{ btA }}
          </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="btA" class="form-control">
          </div>

        </div>
      </div>

      <!-- ######################### Location B Data Information ######################### -->
      <div v-if="powerBoth === 'Yes'" class="col-sm-6">
        <div class="row" style="padding-left:40px; padding-bottom:10px">
          <h4 style="font-weight:bold">Location B</h4>
        </div>
        <!-- Row17 FEC & Mod -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>Modulation: {{ modCodeB }}</span>
          </div>


          <div class="col-sm-3">
            <select v-model="modCodeB" class="btn btn-default" @change="modChange_B">
            <option v-for="modB in modCode_options" v-bind:value="modB" >
              {{ modB }}
            </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="modCodeValue_B" type="text" class="form-control">
          </div>

        </div>

        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>FEC: {{ fecValue_B }}</span>
          </div>


          <div class="col-sm-3">
            <v-select multiple v-model="fecValue_B" :options="fec_options"></v-select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="fecValue_B" class="form-control">
          </div>

        </div>



        <!-- Row19 Threshold Eb/No -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>Threshold Eb/No: {{ ebNoB }}</span>
          </div>

          <div class="col-sm-3">
            <select v-model="ebNoB" class="btn btn-default">
            <option v-for="ebNoB in ebNo_options" v-bind:value="ebNoB">
              {{ ebNoB }}
            </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="ebNoB" class="form-control">
          </div>

        </div>

        <!-- Row20 BT -->
        <div class="row" style="padding-left:40px; padding-bottom:10px">

          <div id="template" class="col-sm-4">
            <span>BT Product: {{ btB }}</span>
          </div>


          <div class="col-sm-3">
            <select v-model="btB" class="btn btn-default">
            <option v-for="btB in bt_options" v-bind:value="btB">
              {{ btB }}
            </option>
        </select>
          </div>

          <div class="input-group col-sm-4">
            <span class="input-group-addon">Manual</span>
            <input v-model="btB" class="form-control">
          </div>

        </div>
      </div>
      <div v-else>
      </div>
    </div>
    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">


    <!-- Row21 IFL Loss -->
    <div class="row">

      <h3 class="col-sm-2" style="padding-left:10px; padding-bottom:10px; margin-left:20px; margin-top:5px; font-weight:bold">System Loss</h3>
      <div class="col-sm-4"></div>
      <h3 class="col-sm-4" style="padding-left:10px; padding-bottom:10px; margin-left:-10px; margin-top:5px; font-weight:bold">Antenna Gain & Temperature</h3>

      <div class="col-sm-12">
        <div class="col-sm-6">
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>IFL Loss: {{ iflLossUp_A }} </span>
            </div>

            <div class="col-sm-1">
            </div>

            <div class="input-group col-sm-3">
              <span class="input-group-addon">Uplink</span>
              <input v-model="iflLossUp_A" class="form-control" style="text-align:center">
            </div>
            <!-- <div class="col-sm-1">
        </div> -->

            <div class="col-sm-5" style="margin-left:10px">
            </div>

            <!-- <div class="input-group col-sm-3">
          <span class="input-group-addon">Downlink</span>
          <input v-model="iflLossDn" class="form-control" style="text-align:center">
        </div> -->


          </div>
          <!-- Row22 Manual Antenna Gain -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Loss from Antenna Feed to LNA: {{ lossFeed_A }}</span>
            </div>
            <div class="col-sm-1">
            </div>

            <div class="col-sm-2">
              <input v-model="lossFeed_A" class="form-control" style="text-align:center" />
            </div>
          </div>


          <!-- Row24 Adjacent Condition -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Mispointing Antenna Loss: {{ misAntUp_A }} / {{ misAntDn_B }}</span>
            </div>

            <div class="col-sm-1">
            </div>

            <div class="input-group col-sm-3">
              <span class="input-group-addon">Uplink</span>
              <input v-model="misAntUp_A" class="form-control" style="text-align:center" />
            </div>

            <div class="col-sm-5" style="margin-left:10px">

            </div>

            <div class="input-group col-sm-3">
              <span class="input-group-addon">Downlink</span>
              <input v-model="misAntDn_B" class="form-control" style="text-align:center" />
            </div>
          </div>

          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Atmospheric Absorption: {{ atmos }}</span>
            </div>

            <div class="col-sm-1">
            </div>

            <div class="col-sm-2">
              <input v-model="atmos" class="form-control" style="text-align:center" />
            </div>
          </div>

          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Other Loss (XPD & Axial Ratio Loss): {{ otherLossUp_A }}</span>
            </div>

            <div class="col-sm-1">
            </div>

            <div class="col-sm-2">
              <input v-model="otherLossUp_A" class="form-control" style="text-align:center" />
            </div>
          </div>

        </div>
        <div class="col-sm-6">

          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4">
              <span>Antenna Gain: {{ antGainValCal.toFixed(2) }} </span>
            </div>

            <div class="col-sm-4">
              <select v-model="antGain" class="btn btn-default" @change="antEffCal">
              <option v-for="antGain in Cal_options" v-bind:value="antGain.label">
                {{ antGain.label }}
              </option>
          </select>
            </div>

            <div class="input-group col-sm-2">
              <span class="input-group-addon">{{ antGain }}</span>
              <input v-if="antGain === 'Calculation'" v-model="antGainVal" class="form-control" style="width:70px; text-align:center">
              <input v-else v-model="antGainManual" class="form-control" style="width:70px; text-align:center" @change="antEffCal">
            </div>
          </div>

          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4">
              <span>Antenna Efficiency: {{ antEffVal }}</span>
            </div>

            <div class="col-sm-4">
              <select v-model="antEff" class="btn btn-default" @change="antEffCal">
              <option v-for="antEff in Default_options" v-bind:value="antEff.label">
                {{ antEff.label }}
              </option>
          </select>
            </div>

            <div class="input-group col-sm-2">
              <span class="input-group-addon">{{ antEff }}</span>
              <input v-model="antEffVal" class="form-control" style="text-align:center">
            </div>
          </div>

          <!-- Row23 Manual Temperature -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4">
              <span>Rx Antenna Temperature: {{ rxTemp }}</span>
            </div>


            <div class="col-sm-4">
              <select v-model="rxTemp" class="btn btn-default" @change="rxTempCal">
              <option v-for="rxTemp in Default_options" v-bind:value="rxTemp.label">
                {{ rxTemp.label }}
              </option>
          </select>
            </div>
            <div class="input-group col-sm-2">
              <span class="input-group-addon">{{ rxTemp }}</span>
              <input v-model="rxTempVal_A" class="form-control" style="text-align:center">
            </div>
          </div>
          <!-- Row23 Manual Temperature -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4">
              <span>LNA Noise Temperature: {{ lnaTemp }}</span>
            </div>


            <div class="col-sm-4">
              <select v-model="lnaTemp" class="btn btn-default" @change="lnaTempCal">
              <option v-for="lnaTemp in Default_options" v-bind:value="lnaTemp.label">
                {{ lnaTemp.label }}
              </option>
          </select>
            </div>
            <div class="input-group col-sm-2">
              <span class="input-group-addon">{{ lnaTemp }}</span>
              <input v-model="lnaTempVal_A" class="form-control" style="text-align:center">
            </div>
          </div>


        </div>


      </div>
    </div>


    <div class="row">
      <h3 style="padding-left:10px; padding-bottom:10px; margin-left:20px; margin-top:5px; font-weight:bold">Miscellaneous Configuration</h3>

      <div class="col-sm-12">
        <div class="col-sm-6">

          <!-- Row25 Link Availability -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Link Availability: {{ linkAva }}</span>
            </div>


            <div class="col-sm-4">
              <select v-model="linkAva" class="btn btn-default" @change="linkAvaCal">
                  <option v-for="linkAva in Default_options" v-bind:value="linkAva.label">
                    {{ linkAva.label }}
                  </option>
              </select>
            </div>
            <div class="input-group col-sm-2">
              <span class="input-group-addon">{{ linkAva }}</span>
              <input v-model="linkAvaMan" class="form-control" style="text-align:center">
            </div>
          </div>
          <!-- Row26 Equivalent BW -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>Equivalent BW: {{ equivalentBW }}</span>
            </div>


            <div class="col-sm-4">
              <select v-model="equivalentBW" class="btn btn-default">
            <option v-for="equivalentBW in yesNo_options" v-bind:value="equivalentBW.label">
              {{ equivalentBW.label }}
            </option>
          </select>
            </div>

          </div>

          <!-- Row27 EBE -->
          <div class="row" style="padding-bottom:10px">

            <div id="template" class="col-sm-4" style="margin-left:10px">
              <span>EBE: {{ ebe }}</span>
            </div>

            <div class="col-sm-4">
              <select v-model="ebe" class="btn btn-default">
            <option v-for="ebe in Show_options" v-bind:value="ebe.label">
              {{ ebe.label }}
            </option>
          </select>
            </div>

          </div>
        </div>
      </div>
    </div>

    <hr style="height:5px; border-width:3px; border-color:#777; margin:50px">
    <!-- ###################################################### Only show for testing ###################################################### -->

    <div class="row" style="margin-left:20px">
      <div class="col-sm-5">
        TX (Loaction A)
        <div class="row">
          <div class="col-sm-2">
            <span>latitude</span>
          </div>
          <div class="col-sm-3">
            <input v-model="latSel_A" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <span class="row">Longtitude</span>
          </div>
          <div class="col-sm-3">
            <input v-model="longSel_A" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <span class="row">HPA</span>
          </div>
          <div class="col-sm-3">
            <input v-model="hpaPowerBoth_A" class="form-control" style="text-align:center">
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        TX (Loaction B)
        <div class="row">
          <div class="col-sm-2">
            <span>latitude</span>
          </div>
          <div class="col-sm-3">
            <input v-model="latSel_B" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <span class="row">Longtitude</span>
          </div>
          <div class="col-sm-3">
            <input v-model="longSel_B" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <span class="row">HPA</span>
          </div>
          <div class="col-sm-3">
            <input v-model="hpaPowerBoth_B" class="form-control" style="text-align:center">
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="template1" class="col-sm-12" style="margin-left:20px">
      <div class="row">
        <span>Rain: {{ rainCal }} </span>
      </div>

      <div class="row">
        <span>Gas: {{ gasCal }} </span>
      </div>

      <div class="row">
        <span>Cloud: {{ cloudCal }} </span>
      </div>

      <div class="row">
        <span>Scin: {{ scinCal }} </span>
      </div>
    </div> -->

    <div class="row">
      <div id="template1" class="col-sm-12" style="margin-left:20px">
        {{resultsCal}}
      </div>
    </div>

    <hr style="height:5px; border-width:3px; border-color:#777; margin:50px">

    <!-- Page2 -->

    <div class="row" style="margin-left:10px; text-align:center; border:solid 2px">
      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Design Parameter</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">HPA Backoff per Carrier</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{hpaBackoff_A}}</div>
          <div class="col-sm-2">{{hpaBackoff_B}}</div>
          <div class="col-sm-2">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Occupied Bandwidth</div>
          <div class="col-sm-2"></div>
          <div v-if="bandwidthSel === 'Bandwidth' " class="col-sm-2">
            <input v-model="bwValue_A" class="form-control" style="text-align:center" @click="bwAuto_A">
          </div>
          <div v-else class="col-sm-2">
            <input v-model="bwCal_A" class="form-control" style="text-align:center" @click="bwAuto_A">
          </div>
          <div v-if="bandwidthSel === 'Bandwidth' " class="col-sm-2">
            <input v-model="bwValue_B" class="form-control" style="text-align:center" @click="bwAuto_B">
          </div>
          <div v-else class="col-sm-2">
            <input v-model="bwCal_B" class="form-control" style="text-align:center" @click="bwAuto_B">
          </div>
          <div class="col-sm-2">kHz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Guard Band</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="GuardBand_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="GuardBand_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">%</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Allowcated Bandwidth</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{allowBw_A}}</div>
          <div class="col-sm-2">{{allowBw_B}}</div>
          <div class="col-sm-2">kHz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Aggregrated HPA BOo</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{aggHpaBoo}}</div>
          <div class="col-sm-2">{{aggHpaBoo}}</div>
          <div class="col-sm-2">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Number of MCPC Carrier</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{numMCPC}}</div>
          <div class="col-sm-2">{{numMCPC}}</div>
          <div class="col-sm-2"></div>
        </div>
      </div>

      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-3" style="text-align:left">Utilization</div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <div class="col-sm-2">Total</div>
          <div class="col-sm-3"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-3" style="text-align:left">Power Utilization</div>
          <div class="col-sm-2">{{pwrUtil_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{pwrUtil_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{pwrUtil_Total.toFixed(2)}}</div>
          <div class="col-sm-3">% (Max=100)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-3" style="text-align:left">BW Utilization</div>
          <div class="col-sm-2">{{bwUtil_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{bwUtil_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{bwUtil_Total.toFixed(2)}}</div>
          <div class="col-sm-3">% (Max=100)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-3" style="text-align:left">Case</div>
          <div class="col-sm-2">{{case_A}}</div>
          <div class="col-sm-2">{{case_B}}</div>
          <div class="col-sm-2">{{case_Total}}</div>
          <div class="col-sm-3"></div>
        </div>

        <div class="row" style="padding:5px">
        </div>
      </div>
    </div>
    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-bottom:solid 2px; border-right:solid 2px">
      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-6" style="text-align:left">Satellite Design Parameter</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Sat. Attenuation Setting</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="atten" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px; text-align:left">dB</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Attenuator Range</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{maxAttenSel}}</div>
          <div class="col-sm-2" style="text-align:left">dB</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">ES A antenna Diameter</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="antSize_A" class="form-control" style="text-align:center">
          </div>
          <div v-if="beams === 'Standard-C'" class="col-sm-4" style="margin-top:6px; text-align:left">m. ( The minimum Ant. is 3m.)</div>
          <div v-else class="col-sm-4" style="margin-top:6px; text-align:left">m.</div>
        </div>

        <div class="row" style="padding:5px; margin-bottom:30px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">ES B antenna Diameter</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="antSize_B" class="form-control" style="text-align:center">
          </div>
          <div v-if="beams === 'Standard-C'" class="col-sm-4" style="margin-top:6px; text-align:left">m. ( The minimum Ant. is 3m.)</div>
          <div v-else class="col-sm-4" style="margin-top:6px; text-align:left">m.</div>
          <!-- <div class="col-sm-2"></div> -->
        </div>


      </div>

      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Carrier Operating Point</div>
          <div class="col-sm-2">A to B<br/>(Cl. Sky)</div>
          <div class="col-sm-2">A to B<br/>(Up fade)</div>
          <div class="col-sm-2">B to A<br/>(Cl. Sky)</div>
          <div class="col-sm-2">B to A<br/>(Up fade)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Allowable Input Backoff per Carrier (dB)</div>
          <div class="col-sm-2">{{allowIboClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{allowIboClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{allowIboClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{allowIboClear_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Input Backoff per Carrier (dB)</div>
          <div class="col-sm-2">{{iboCal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{iboUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{iboCal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{iboUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Output Backoff per Carrier(dB)</div>
          <div class="col-sm-2">{{oboCal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{oboUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{oboCal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{oboUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Transponder Gain (dBm^2)</div>
          <div class="col-sm-2">{{tpGain_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{tpGain_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{tpGain_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{tpGain_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
        </div>


      </div>
    </div>

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-bottom:solid 2px; border-right:solid 2px">
      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Adjustable Parameters</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <!-- <div class="col-sm-2" style="font-size:10px">(ITU-R 618-6,99)</div> -->
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Upfade A/B with availability (%)</div>
          <div class="col-sm-2">
            <input v-model="upFadePercent" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">xxx</div>
          <div class="col-sm-2">xxx</div>
          <div class="col-sm-2">dB (ITU-R 618-6, 99)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Downfade A/B with availability (%)</div>
          <div class="col-sm-2">
            <input v-model="dnFadePercent" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">xxx</div>
          <div class="col-sm-2">xxx</div>
          <div class="col-sm-2">dB (ITU-R 618-6, 99)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">SFD at desired attenuation</div>
          <div class="col-sm-2">{{avrFadePercent.toFixed(2)}}</div>
          <div class="col-sm-2">{{sfdAtten_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{sfdAtten_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW/m^2</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Allowable Flux Density</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{allowFluxDen_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{allowFluxDen_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW/m^2</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">HPA Max Power Required</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{hpaMax_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{hpaMax_B.toFixed(2)}}</div>
          <div class="col-sm-2">Watts</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-5" style="text-align:left">HPA Operating Power Both Fade</div>
          <div class="col-sm-1"></div>
          <div class="col-sm-2">
            <input v-model="hpaPowerBoth_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="hpaPowerBoth_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">Watts</div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Aggregrate input Backoff</div>
          <div class="col-sm-2">{{aggIbo}}</div>
          <div class="col-sm-2">dB/Tp</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Aggregrate Output Backoff</div>
          <div class="col-sm-2">{{aggObo}}</div>
          <div class="col-sm-2">dB/Tp</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Percent of Allocated BW / Tp. BW</div>
          <div class="col-sm-2">{{percentAllowBw_A.toFixed(2)}}</div>
          <div class="col-sm-2">% (A to B)</div>
          <div class="col-sm-2">{{percentAllowBw_B.toFixed(2)}}</div>
          <div class="col-sm-2">% (B to A)</div>
        </div>

        <!-- <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Current BOi (dB) (Before Uplink this Carrier)</div>
      <div class="col-sm-2">5.200</div>
      <div class="col-sm-4">Current Transponder BOo (dB)</div>
      <div class="col-sm-2">4.2</div>
    </div> -->


        <!--  -->

        <div class="row" style="border-bottom:solid 2px; border-top:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Frequency Assigned</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <div class="col-sm-2">Polarization</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Uplink Frequency (GHz)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{frqUp_A}}</div>
          <div class="col-sm-2">{{frqUp_B}}</div>
          <div class="col-sm-2">{{upPol}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Downlink Frequency (GHz)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="frqDn_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="frqDn_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">{{dnPol}}</div>
        </div>
      </div>

    </div>

    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-12"> A to B </div>
        </div>

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:14px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">CALCULATE C/N TOTAL</div>
          <div class="col-sm-2">Cl.sky</div>
          <div class="col-sm-2">Up Fade</div>
          <div class="col-sm-2">Down Fade</div>
          <div class="col-sm-2">Both Fade</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I Up Adj. Sat (dB) (Key-in)</div>
          <div class="col-sm-2">{{ciUpTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/N (Uplink) (dB)</div>
          <div class="col-sm-2">{{cnUpClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpUpfade_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/N (Downlink) (dB)</div>
          <div class="col-sm-2">{{cnDnClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeUpfade_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I (Intermodulation) (dB)</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I (Co-Channel 20+ Xpol Iso.25) (dB)</div>
          <div class="col-sm-2">{{ciCoch_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">C/I dn Adj. Sat (dB) (Key-in)</div>
          <div class="col-sm-2">{{ciDnTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">C/N TOTAL</div>
          <div class="col-sm-2">{{cnTotalClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalDnfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalBothfade_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">Eb/No</div>
          <div class="col-sm-2">{{ebnoClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoDnfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoBothfade_A.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Margin</div>
          <div class="col-sm-2">{{marginClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginDnfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginBothfade_A.toFixed(2)}}</div>
        </div>

      </div>
      <!--  -->
      <div class="col-sm-6">
        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-12"> B to A </div>
        </div>

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:14px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">CALCULATE C/N TOTAL</div>
          <div class="col-sm-2">Cl.sky</div>
          <div class="col-sm-2">Up Fade</div>
          <div class="col-sm-2">Down Fade</div>
          <div class="col-sm-2">Both Fade</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I Up Adj. Sat (dB) (Key-in)</div>
          <div class="col-sm-2">{{ciUpTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/N (Uplink) (dB)</div>
          <div class="col-sm-2">{{cnUpClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/N (Downlink) (dB)</div>
          <div class="col-sm-2">{{cnDnClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I (Intermodulation) (dB)</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
          <div class="col-sm-2">{{interMod}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I (Co-Channel 20+ Xpol Iso.25) (dB)</div>
          <div class="col-sm-2">{{ciCoch_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciCoch_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">C/I dn Adj. Sat (dB) (Key-in)</div>
          <div class="col-sm-2">{{ciDnTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">C/N TOTAL</div>
          <div class="col-sm-2">{{cnTotalClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalDnfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnTotalBothfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">Eb/No</div>
          <div class="col-sm-2">{{ebnoClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoDnfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ebnoBothfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Margin</div>
          <div class="col-sm-2">{{marginClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginDnfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{marginBothfade_B.toFixed(2)}}</div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Carrier Information</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">mod type PSK(1) QPSK(2)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="modCodeValue_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="modCodeValue_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">info. rate (before FEC)</div>
          <div class="col-sm-2"></div>
          <div v-if="bandwidthSel === 'Information Rate' " class="col-sm-2">
            <input v-model="infoValue_A" class="form-control" style="text-align:center" @click="infoAuto_A">
          </div>
          <div v-else class="col-sm-2">
            <input v-model="infoCal_A" class="form-control" style="text-align:center" @click="infoAuto_A">
          </div>
          <div v-if="bandwidthSel === 'Information Rate' " class="col-sm-2">
            <input v-model="infoValue_B" class="form-control" style="text-align:center" @click="infoAuto_B">
          </div>
          <div v-else class="col-sm-2">
            <input v-model="infoCal_B" class="form-control" style="text-align:center" @click="infoAuto_B">
          </div>
          <div class="col-sm-2" style="margin-top:6px">kbps</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">FEC Rate</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="fecValue_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="fecValue_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Transmission Rate</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{txRate_A}}</div>
          <div class="col-sm-2">{{txRate_B}}</div>
          <div class="col-sm-2">kbps</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">BT Product</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="btA" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="btB" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Threshold Eb/No (info. rate)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="ebNoA" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ebNoB" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB (Operating)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Symbol Rate</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{symbolRate_A}}</div>
          <div class="col-sm-2">{{symbolRate_B}}</div>
          <div class="col-sm-2">kbps</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Occupied BW</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{bwCal_A}}</div>
          <div class="col-sm-2">{{bwCal_B}}</div>
          <div class="col-sm-2">kHz</div>
        </div>
      </div>


      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Satellite Information</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Subsatellite Point (deg)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{orbitalSlotSel.toFixed(2)}}</div>
          <div class="col-sm-2">{{orbitPoint.toFixed(2)}}</div>
          <div class="col-sm-2">rad</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Altitude</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{altitude}}</div>
          <div class="col-sm-2">km</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px; margin-bottom:30px">
          <div class="col-sm-4" style="text-align:left">Earth Radius</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{earthR}}</div>
          <div class="col-sm-2">km</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="border-bottom:solid 1px; border-top:solid 1px; padding:5px; font-weight:bold; font-size:14px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"> At ES A</div>
          <div class="col-sm-2"> At ES B</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">G/T</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="gtSel_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="gtSel_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dBi/K</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left; text-align:left">SFD at max attenuation</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{sfdMax_A}}</div>
          <div class="col-sm-2">{{sfdMax_B}}</div>
          <div class="col-sm-2">dBW/m^2</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Satellite BW</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{satBW}}</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Satellite EIRP</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="eirpdnSat_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="eirpdnSat_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dBW</div>
        </div>

      </div>
    </div>

    <!--  -->
    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Earth Station A</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-2" style="margin-top:6px; text-align:left">Location</div>
          <div class="col-sm-2">
            <select v-model="LocationA" class="btn btn-default">
            <option v-for="LocationA in selectedLocations_A">
              {{ LocationA }}
            </option>
        </select>
          </div>
          <div class="col-sm-2" style="margin-top:6px">ID</div>
          <div class="col-sm-4" style="margin-top:6px; text-align:left">{{locationsName_A}}</div>
          <!-- <div class="col-sm-2"></div> -->
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">latitude (deg)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="latSel_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{latRad_A.toFixed(2)}}</div>
          <div class="col-sm-2" style="margin-top:6px">rad</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">longitude (deg)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="longSel_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{longRad_A.toFixed(2)}}</div>
          <div class="col-sm-2" style="margin-top:6px">rad</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Antenna Efficiency Tx/Rx</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="antEffVal_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="antEffVal_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">%</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Xmitted Ant Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{antGainValCal_A.toFixed(2)}}</div>
          <div class="col-sm-2">dBi at</div>
          <div class="col-sm-2">{{frqUp_A}} GHz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Receive Antenna Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{antGainReceive_A.toFixed(2)}}</div>
          <div class="col-sm-2">dBi</div>
          <div class="col-sm-2">Size: {{antSize_A}}m</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive Antenna Temperature</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="rxTempVal_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">Kelvin</div>
          <div class="col-sm-2" style="margin-top:6px">D/C.Gain (dB)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Loss from Ant Feed to LNA</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="lossFeed_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2">
            <input v-model="dcGain_A" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive LNA Noise Temperature</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="lnaTempVal_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">Kelvin</div>
          <div class="col-sm-2" style="margin-top:6px">IFL Loss (dB)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive LNA Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="rxLnaGain_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2">
            <input v-model="iflLossAdd_A" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Downconverter Noise Figure</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="dnNoise_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Receive ES Tsys</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{tsys_A.toFixed(2)}}</div>
          <div class="col-sm-2">Kelvin</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">G/T</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{gtES_A.toFixed(2)}}</div>
          <div class="col-sm-2">dBi/K</div>
          <div class="col-sm-2"></div>
        </div>
      </div>

      <!-- Earth Station B -->
      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Earth Station B</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-2" style="margin-top:6px; text-align:left">Location</div>
          <div class="col-sm-2">
            <select v-model="LocationB" class="btn btn-default">
            <option v-for="LocationB in selectedLocations_B">
              {{ LocationB }}
            </option>
        </select>
          </div>
          <div class="col-sm-2" style="margin-top:6px">ID</div>
          <div class="col-sm-4" style="margin-top:6px; text-align:left">{{locationsName_B}}</div>
          <!-- <div class="col-sm-2"></div> -->
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">latitude (deg)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="latSel_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{latRad_B.toFixed(2)}}</div>
          <div class="col-sm-2" style="margin-top:6px">rad</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">longitude (deg)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="longSel_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{longRad_B.toFixed(2)}}</div>
          <div class="col-sm-2" style="margin-top:6px">rad</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Antenna Efficiency Tx/Rx</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="antEffVal_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="antEffVal_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">%</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Xmitted Ant Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{antGainValCal_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBi at</div>
          <div class="col-sm-2">{{frqUp_B}} GHz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Receive Antenna Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{antGainReceive_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBi</div>
          <div class="col-sm-2">Size: {{antSize_B}}m</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive Antenna Temperature</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="rxTempVal_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">Kelvin</div>
          <div class="col-sm-2" style="margin-top:6px">D/C.Gain (dB)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Loss from Ant Feed to LNA</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="lossFeed_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2">
            <input v-model="dcGain_B" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive LNA Noise Temperature</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="lnaTempVal_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">Kelvin</div>
          <div class="col-sm-2" style="margin-top:6px">IFL Loss (dB)</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Receive LNA Gain</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="rxLnaGain_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2">
            <input v-model="iflLossAdd_B" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Downconverter Noise Figure</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="dnNoise_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Receive ES Tsys</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{tsys_B.toFixed(2)}}</div>
          <div class="col-sm-2">Kelvin</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">G/T</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{gtES_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBi/K</div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Transmitted ES Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"> A to B </div>
          <div class="col-sm-2"> B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">WG and Feed Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="iflLossUp_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="iflLossUp_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Mispointing Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="misAntUp_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="misAntUp_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-6" style="margin-top:6px; text-align:left">Other Loss (XPD & Axial Ratio)</div>
          <div class="col-sm-2">
            <input v-model="otherLossUp_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="otherLossUp_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Total Up ES Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{ totalLossUp_A }}</div>
          <div class="col-sm-2">{{ totalLossUp_B}}</div>
          <div class="col-sm-2">dB</div>
        </div>


      </div>

      <!--  -->
      <div class="col-sm-6">


        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4">Received ES Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"> A to B </div>
          <div class="col-sm-2"> B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px; margin-top:30px">
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Mispointing Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="misAntDn_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="misAntDn_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-6" style="margin-top:6px; text-align:left">Other Loss (XPD & Axial Ratio)</div>
          <div class="col-sm-2">
            <input v-model="otherLossDn_B" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="otherLossDn_A" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Total Up ES Loss</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{ totalLossDn_B }}</div>
          <div class="col-sm-2">{{ totalLossDn_A }}</div>
          <div class="col-sm-2">dB</div>
        </div>


      </div>

    </div>


    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Earth Station A</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-8" style="text-align:left">Azimuth-Elevation-Slant Range Calculation</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Longitude Difference</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{longDiff_A.toFixed(2)}}</div>
          <div class="col-sm-2">rad</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Central Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{centralAngle_A.toFixed(2)}}</div>
          <div class="col-sm-2">rad</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Slant Range</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{slantRange_A.toFixed(2)}}</div>
          <div class="col-sm-2">km</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Azimuth Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{azAngle_A.toFixed(2)}}</div>
          <div class="col-sm-2">deg</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Elevation Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{elAngle_A}}</div>
          <div class="col-sm-2">deg</div>
          <div class="col-sm-2"></div>
        </div>
      </div>

      <!--  -->
      <div class="col-sm-6">

        <div class="row" style="padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Earth Station B</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-8" style="text-align:left">Azimuth-Elevation-Slant Range Calculation</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Longitude Difference</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{longDiff_B.toFixed(2)}}</div>
          <div class="col-sm-2">rad</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Central Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{centralAngle_B.toFixed(2)}}</div>
          <div class="col-sm-2">rad</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Slant Range</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{slantRange_B.toFixed(2)}}</div>
          <div class="col-sm-2">km</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Azimuth Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{azAngle_B.toFixed(2)}}</div>
          <div class="col-sm-2">deg</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Elevation Angle</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{elAngle_B.toFixed(2)}}</div>
          <div class="col-sm-2">deg</div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Uplink Loss Calculation</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"> A to B </div>
          <div class="col-sm-2"> B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Xmitted EIRP</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{eirpUpVal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpUpVal_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Power Density</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{powerDen_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{powerDen_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW/Hz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Atmospheric Absorption</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <input v-model="atmos" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="atmos" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Spreading Loss & Atmospheric Absorption</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{spreadLoss_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{spreadLoss_B.toFixed(2)}}</div>
          <div class="col-sm-2">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Operating Flux Density</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{opFluxDen_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{opFluxDen_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW/m^2</div>
        </div>

        <div class="row" style="padding:5px; margin-bottom:45px">
          <div class="col-sm-4" style="text-align:left">Gain of square meter</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{gainSqrM_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{gainSqrM_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBi/m^2</div>
        </div>
      </div>

      <!--  -->
      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Downlink Loss Calculation</div>
          <div class="col-sm-2"> A to B<br />(Cl. Sky) </div>
          <div class="col-sm-2"> A to B<br />(Up fade) </div>
          <div class="col-sm-2"> B to A<br />(Cl. Sky) </div>
          <div class="col-sm-2"> B to A<br />(Up fade) </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Sat. Xmitted EIRP (dBW)</div>
          <div class="col-sm-2">{{eirpDnClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Path Loss (dB)</div>
          <div class="col-sm-2">{{pathLoss_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLoss_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLoss_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLoss_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="margin-top:6px; text-align:left">Atmospheric Absorption (dB)</div>
          <div class="col-sm-2">
            <input v-model="atmos" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{atmos}}</div>
          <div class="col-sm-2">
            <input v-model="atmos" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2" style="margin-top:6px">{{atmos}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Path Loss & Atmospheric Absorption (dB)</div>
          <div class="col-sm-2">{{pathLossAtmos_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLossAtmos_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLossAtmos_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{pathLossAtmos_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Receive Power (dBW)</div>
          <div class="col-sm-2">{{receivePwrClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{receivePwrUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{receivePwrClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{receivePwrUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Sat. Xmitted EIRPdn Density (dBW/Hz)</div>
          <div class="col-sm-2">{{eirpDnDenClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnDenUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnDenClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpDnDenUpfade_B.toFixed(2)}}</div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style=" padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Uplink Noise Budget</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="font-size:16px; padding:11px; margin-bottom:1px; background-color: #337AB7; color: white; text-shadow:1px 1px black"> </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Boltzman's Constant</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{boltzman}}</div>
          <div class="col-sm-2">{{boltzman}}</div>
          <div class="col-sm-2">dBW/K-Hz</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Noise BW</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{noiseBW_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noiseBW_B.toFixed(2)}}</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/N Up Cl. SKY</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{cnUpClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBHz</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">C/N Up (Upfade)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{cnUpUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnUpUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBH</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Operating Flux Density (Upfade)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{opFluxDenUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{opFluxDenUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">dBW/m^2</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Sat.Xmit EIRP (Upfade)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{eirpUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{eirpUpfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">dB</div>
        </div>

        <div class="row" style="padding:5px; margin-bottom:70px">
          <div class="col-sm-4" style="text-align:left">C/Ndo (Both fade)</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{cnBothfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnBothfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">dB</div>
        </div>
      </div>

      <!--  -->

      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">Downlink Noise Budget</div>
          <div class="col-sm-2"> A to B<br />(Cl. Sky) </div>
          <div class="col-sm-2"> A to B<br />(Up fade) </div>
          <div class="col-sm-2"> B to A<br />(Cl. Sky) </div>
          <div class="col-sm-2"> B to A<br />(Up fade) </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Boltzman's Constant</div>
          <div class="col-sm-2">{{boltzman}}</div>
          <div class="col-sm-2">{{boltzman}}</div>
          <div class="col-sm-2">{{boltzman}}</div>
          <div class="col-sm-2">{{boltzman}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Increased T (Rain) (Kelvins)</div>
          <div class="col-sm-2">{{increaseT_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{increaseT_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{increaseT_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{increaseT_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Noise BW (dBHz)</div>
          <div class="col-sm-2">{{noiseBW_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noiseBW_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noiseBW_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{noiseBW_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; border-bottom:solid 1px">
          <div class="col-sm-4" style="text-align:left">Noise Power (Cl. Sky) (dBW)</div>
          <div class="col-sm-2">{{noisePwrClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrClear_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Noise Power Downfade (dBW)</div>
          <div class="col-sm-2">{{noisePwrDnfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrDnfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrDnfade_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{noisePwrDnfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/Ndo (Downlink Cl. Sky) (dB)</div>
          <div class="col-sm-2">{{cnDnClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/Ndo Downfade (dB)</div>
          <div class="col-sm-2">{{cnDnfadeClear_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeUpfade_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeClear_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{cnDnfadeUpfade_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Noise Power Total (Cl. Sky) (dBW)</div>
          <div class="col-sm-2">{{noisePwrTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{noisePwrTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <!-- <div class="row" style="border-bottom:solid 1px; padding:5px; margin-top:2px; font-weight:bold; font-size:16px">
      <div class="col-sm-6" style="text-align:left">Adjacent Satellite Interference</div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2"></div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Adj. Sat. EIRP (dBW)</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-4">InterferenceEIRPdens (dBW/Hz)</div>
      <div class="col-sm-2">xxx</div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Adj Sat Transponder (MHz)</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-4">SFD of adjacent sat</div>
      <div class="col-sm-2"></div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Tx Intrf. gain rejection ratio (2.4m C/ 1.2m Ku)</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">A to B</div>
      <div class="col-sm-2">B to A</div>
      <div class="col-sm-2">U/L Diff of slots</div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Interference EIRP per carrier (dBW)</div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">xxx</div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Assumed G/T of Tx Intf. ES</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">Ant. B</div>
      <div class="col-sm-2">Ant. A</div>
      <div class="col-sm-2">D/L Diff of Slots</div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Difference of Gain at peak and 2 deg. (dB)</div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">xxx</div>
    </div>

    <div class="row" style="padding:5px">
      <div class="col-sm-4" style="text-align:left">Approximate C/I down adjacent satellite (dB)</div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">xxx</div>
      <div class="col-sm-2">
        <-Max is limited at 25</div>
      </div> -->
        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">A to B</div>
          <div class="col-sm-2">B to A</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Key-In C/I adj. Up</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{ciUpTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUpTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Key-In C/I adj. Down</div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2">{{ciDnTotal_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDnTotal_B.toFixed(2)}}</div>
          <div class="col-sm-2"></div>
        </div>
      </div>

      <!--  -->

      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-6" style="text-align:left"></div>
          <div class="col-sm-2">Utilization</div>
          <div class="col-sm-1"></div>
          <div class="col-sm-2">Bandwidth</div>
          <div class="col-sm-1"></div>
        </div>



        <!-- <div class="row" style="padding:5px">
        <div class="col-sm-4" style="text-align:left">C/I up</div>
        <div class="col-sm-2">xxx</div>
        <div class="col-sm-2">xxx</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"></div>
      </div>

      <div class="row" style="border-bottom:solid 1px; padding:5px">
        <div class="col-sm-4" style="text-align:left">SFD Adj. Sat.Interference per occ. BW</div>
        <div class="col-sm-2">xxx</div>
        <div class="col-sm-2">xxx</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"></div>
      </div> -->

        <div class="row" style="padding:5px">
          <div class="col-sm-6" style="text-align:left">EIRP down @ Nonthaburi (A->B)</div>
          <div class="col-sm-2">{{maxEirpNonUtil_A}}</div>
          <div class="col-sm-1">dB</div>
          <div class="col-sm-2">{{maxEirpNonBW_A}}</div>
          <div class="col-sm-1">dB</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-6" style="text-align:left">EIRP down @ Nonthaburi (B->A)</div>
          <div class="col-sm-2">{{maxEirpNonUtil_B}}</div>
          <div class="col-sm-1">dB</div>
          <div class="col-sm-2">{{maxEirpNonBW_B}}</div>
          <div class="col-sm-1">dB</div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">

      <div class="col-sm-6" style="border-right:solid 2px">

        <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">U/L Adj Sat Interference</div>
          <div class="col-sm-8">

            <div class="row">
              <div class="col-sm-6">A->B</div>
              <div class="col-sm-6">B->A</div>
            </div>

            <div class="row" style="font-size:14px; margin-bottom:2px;">
              <div class="col-sm-3">{{adjSat[0]}}</div>
              <div class="col-sm-3">{{adjSat[1]}}</div>
              <div class="col-sm-3">{{adjSat[0]}}</div>
              <div class="col-sm-3">{{adjSat[1]}}</div>
            </div>
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Topocentric Angle</div>
          <div class="col-sm-2">{{topo1.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo2.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo1.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo2.toFixed(4)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Uplink Pdens (dBW/Hz)</div>
          <div class="col-sm-2">
            <input v-model="ulPden1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulPden2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulPden1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulPden2" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Assumed Tx Intf. E/S in THAICOM G/T contour</div>
          <div class="col-sm-2">
            <input v-model="esInTcGt1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esInTcGt2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esInTcGt1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esInTcGt2" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Polarization Improvement</div>
          <div class="col-sm-2">
            <input v-model="polImp1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp3" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp4" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">U/L Slidelobe improvement from 29-25log</div>
          <div class="col-sm-2">
            <input v-model="ulSidelobe1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulSidelobe2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulSidelobe3" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="ulSidelobe4" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I Uplink</div>
          <div class="col-sm-2">{{ciUp1_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUp2_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUp1_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciUp2_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px; margin-bottom:8px">
          <div class="col-sm-4" style="text-align:left">C/I Uplink Total</div>
          <div class="col-sm-4">{{ciUpTotal_A.toFixed(2)}}</div>
          <div class="col-sm-4">{{ciUpTotal_B.toFixed(2)}}</div>
        </div>
      </div>

      <!--  -->

      <div class="col-sm-6">

        <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
          <div class="col-sm-4" style="text-align:left">D/L Adj Sat Interference
            <div style="text-align:left; font-weight:normal; font-size:12px">
              <input type="checkbox" v-model="carrierType">{{ carrierTypeSel}}
            </div>
          </div>

          <div class="col-sm-8">

            <div class="row">
              <div class="col-sm-6">A->B</div>
              <div class="col-sm-6">B->A</div>
            </div>

            <div class="row" style="font-size:14px">
              <div class="col-sm-3">{{adjSat[0]}}</div>
              <div class="col-sm-3">{{adjSat[1]}}</div>
              <div class="col-sm-3">{{adjSat[0]}}</div>
              <div class="col-sm-3">{{adjSat[1]}}</div>
            </div>
          </div>
        </div>


        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Topocentric Angle</div>
          <div class="col-sm-2">{{topo1.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo2.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo1.toFixed(4)}}</div>
          <div class="col-sm-2">{{topo2.toFixed(4)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Downlink EIRP density @peak (dBW/Hz)</div>

          <div class="col-sm-2">
            <input v-model="downlinkPdenSel1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="downlinkPdenSel2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="downlinkPdenSel1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="downlinkPdenSel2" class="form-control" style="text-align:center">
          </div>
        </div>

        <!-- <div class="row" style="padding:5px">
        <div class="col-sm-4" style="text-align:left">
          <input type="checkbox" v-model="carrierType">{{carrierTypeSel}}
        </div>
      </div> -->

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">GRR from Antenna Pattern (BO.1213)</div>
          <div class="col-sm-2">{{grr1_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{grr2_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{grr1_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{grr2_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">Polarization Improvement</div>
          <div class="col-sm-2">
            <input v-model="polImp5" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp6" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp7" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="polImp8" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">TC-5 Rx. E/S in Adj Sat D/L EIRP dx contour</div>
          <div class="col-sm-2">
            <input v-model="esAdj1" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esAdj2" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esAdj3" class="form-control" style="text-align:center">
          </div>
          <div class="col-sm-2">
            <input v-model="esAdj4" class="form-control" style="text-align:center">
          </div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I Downlink</div>
          <div class="col-sm-2">{{ciDn1_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDn2_A.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDn1_B.toFixed(2)}}</div>
          <div class="col-sm-2">{{ciDn2_B.toFixed(2)}}</div>
        </div>

        <div class="row" style="padding:5px">
          <div class="col-sm-4" style="text-align:left">C/I Downlink Total</div>
          <div class="col-sm-4">{{ciDnTotal_A.toFixed(2)}}</div>
          <div class="col-sm-4">{{ciDnTotal_B.toFixed(2)}}</div>
        </div>
      </div>
    </div>
    <!-- ########################################################## -->

    <!-- <div class="row" style="margin-left:20px">

  <div class="col-sm-5"> -->

    <!-- ###################################################### Location A ######################################################-->
    <!-- <span class="row">Antenna Gain: {{antGainVal}}</span>
    <span class="row">Gain Squarer Meter: {{gainSqrM_A}}</span>
    <span class="row">EIRP Up: {{eirpUpVal_A}}</span>
    <span class="row">Power Density: {{powerDen_A}}</span>
    <span class="row">Spreading Loss & Atmospheric: {{spreadLoss_A}}</span>
    <span class="row">Slant Range Tx: {{slantRange_A}}</span>

    <span class="row">Longtitude Diff Tx: {{longDiff_A}}</span>
    <span class="row">Orbit: {{orbitalSlotSel}}</span>
    <span class="row">Orbit Angle: {{orbitPoint}}</span>
    <span class="row">Operating Flux Density A: {{opFluxDen_A}}</span>
    <span class="row">C/N Up: {{cnUp_A}}</span>
    <span class="row">BW: {{bwCal_A}}</span>
    <span class="row">SFD Tx at max atten Tx: {{sfdMax_A}}</span>
    <span class="row">SFD at desire atten Tx: {{sfdAtten_A}}</span>
    <span class="row">IBO/OBO: {{iboCal_A}} / {{oboCal_A}}</span>
    <span class="row">EIRPdn Sat Location A: {{eirpdnSat_A}}</span>
    <span class="row">EIRPdn Location A: {{eirpDnClear_A}}</span>
    <span class="row">TP Gain Tx: {{tpGain_A}}</span>
    <span class="row">Path Loss: {{pathLoss_A}}</span>
    <span class="row">Receive antenna Gain: {{antGainReceive_A}}</span>
  </div> -->

    <!-- ###################################################### Location B ######################################################-->
    <!-- <div class="col-sm-5">
    <span class="row">Antenna Gain: {{antGainVal}}</span>
    <span class="row">Gain Squarer Meter: {{gainSqrM_B}}</span>
    <span class="row">EIRP Up: {{eirpUpVal_B}}</span>
    <span class="row">Power Density: {{powerDen_B}}</span>
    <span class="row">Spreading Loss & Atmospheric: {{spreadLoss_B}}</span>
    <span class="row">Slant Range Tx: {{slantRange_B}}</span>

    <span class="row">Longtitude Diff Rx: {{longDiff_B}}</span>
    <span class="row">Orbit: {{orbitalSlotSel}}</span>
    <span class="row">Orbit Angle: {{orbitPoint}}</span>
    <span class="row">Operating Flux Density B: {{opFluxDen_B}}</span>
    <span class="row">C/N Up: {{cnUp_B}}</span>
    <span class="row">BW: {{bwCal_B}}</span>
    <span class="row">SFD Tx at max atten Rx: {{sfdMax_B}}</span>
    <span class="row">SFD at desire atten Rx: {{sfdAtten_B}}</span>
    <span class="row">IBO/OBO: {{iboCal_B}} / {{oboCal_B}}</span>
    <span class="row">EIRPdn Sat Location B: {{eirpdnSat_B}}</span>
    <span class="row">EIRPdn Location B: {{eirpDnClear_B}}</span>
    <span class="row">TP Gain Rx: {{tpGain_B}}</span>
    <span class="row">Path Loss: {{pathLoss_B}}</span>
    <span class="row">Receive antenna Gain: {{antGainReceive_B}}</span>
  </div>
  </div> -->
    <br />
    <hr style="height:5px; border-width:3px; border-color:#777; margin:10px">
    <!-- ############################################################################################################################### -->

    <div class="row" style="align:center; margin-bottom:20px">
      <div class="col-sm-5"></div>
      <div class="col-sm-1">
        <!-- <button v-on:click="say">Generate JRF</button> -->
        <button v-on:click="goalseekHPA">HPA</button>
      </div>

      <div class="col-sm-1">
        <button v-on:click="loopCal">Test</button>
      </div>
    </div>

  </div>


</div>
</template>

<script>
import {getRainData, atmosphericLoss, cloudAtten, gasAtten, scinAtten, rainAtten001, rainAtten} from '../utils/atmospheric.js'

export default {
  name: 'input',
  data() {
    return {
      // Choice Option
      yesNo_options: [{
          label: 'Yes',
          value: 1
        },
        {
          label: 'No',
          value: 2
        }
      ],
      Default_options: [{
          label: 'Default',
          value: 1
        },
        {
          label: 'Manual',
          value: 2
        }
      ],
      Cal_options: [{
          label: 'Calculation',
          value: 1
        },
        {
          label: 'Manual',
          value: 2
        }
      ],
      Show_options: [{
          label: 'Show',
          value: 1
        },
        {
          label: 'Hide',
          value: 2
        }
      ],

      //Database
      satellite: 5,
      satelliteDatabase: [{
          text: 'Thaicom5',
          value: 5,
          orbitalSlot: 78.5,
          sfd: 80,
          maxAtten: 16,
        },
        {
          text: 'Thaicom6',
          value: 6,
          orbitalSlot: 78.5,
          sfd: 82,
          maxAtten: 16
        },
        {
          text: 'Thaicom7',
          value: 7,
          orbitalSlot: 119.92,
          sfd: 80,
          maxAtten: 16
        },
        {
          text: 'Thaicom8',
          value: 8,
          orbitalSlot: 78.5,
          sfd: 81,
          maxAtten: 16
        }
      ],
      orbitalSlot: "",
      beams: "",
      beamDatabase: [{
          satellite: 'Thaicom 5',
          beams: ["Standard-C", "Extended-C", "Global"]
        },
        {
          satellite: 'Thaicom 6',
          beams: ["C1", "C2"]
        },
        {
          satellite: 'Thaicom 7',
          beams: ["Regional", "Semi"]
        }
      ],
      transponders: "",
      tpDatabase: [{
          beams: 'Standard-C',
          transponders: ["1V", "2V", "3V"],
          maxEirpNon: 40.51,
          ulPol: 'H',
          dnPol: 'V'
        },
        {
          beams: 'Extended-C',
          transponders: ["1E", "2E", "3E"],
          maxEirpNon: 40.51,
          ulPol: 'H',
          dnPol: 'V'
        },
        {
          beams: 'Global',
          transponders: ["1G", "2G", "3G"],
          maxEirpNon: 36.85,
          ulPol: 'V',
          dnPol: 'H'
        },
        {
          beams: 'C1',
          transponders: ["1H", "2H", "3H"],
          maxEirpNon: 41,
          ulPol: 'V',
          dnPol: 'H'
        },
        {
          beams: 'C2',
          transponders: ["1H", "2H", "3H"],
          maxEirpNon: 34.66,
          ulPol: 'V',
          dnPol: 'H'
        },
        {
          beams: 'Regional',
          transponders: ["1V", "2V", "3V"],
          maxEirpNon: 40,
          ulPol: 'H',
          dnPol: 'V'
        },
        {
          beams: 'Semi',
          transponders: ["1V", "2V", "3V"],
          maxEirpNon: 40,
          ulPol: 'H',
          dnPol: 'V'
        }
      ],
      tpConfigDatabase: [{
          transponders: '1V',
          satelliteMode: 'FGM',
          defaultAtten: 9,
          eirpPeak: 40.53,
          downFrq: 3.72,
          upFrq: 5.945,
          singleIbo: 0,
          twoIbo: 1.8,
          multiIbo: 5.2,
          singleObo: 0,
          twoObo: 2.2,
          multiObo: 4.2,
          singleInt: 25,
          twoInt: 18.78,
          multiInt: 17.00
        },
        {
          transponders: '2V',
          satelliteMode: 'ALC',
          defaultAtten: 8,
          eirpPeak: 40.53,
          downFrq: 3.76,
          upFrq: 5.985,
          singleIbo: 0,
          twoIbo: 1.8,
          multiIbo: 5.2,
          singleObo: 0,
          twoObo: 2.2,
          multiObo: 4.2,
          singleInt: 25,
          twoInt: 18.78,
          multiInt: 17.00
        },
        {
          transponders: '3V',
          satelliteMode: 'FGM',
          defaultAtten: 8,
          eirpPeak: 40.53,
          downFrq: 3.8,
          upFrq: 6.025,
          singleIbo: 0,
          twoIbo: 1.8,
          multiIbo: 5.2,
          singleObo: 0,
          twoObo: 2.2,
          multiObo: 4.2,
          singleInt: 25,
          twoInt: 18.78,
          multiInt: 17.00
        },
        {
          transponders: '1H',
          satelliteMode: 'FGM',
          defaultAtten: 9,
          eirpPeak: 41,
          downFrq: 3.72,
          upFrq: 5.945,
          singleIbo: 5.25,
          twoIbo: 1.5,
          multiIbo: 5.7,
          singleObo: 3,
          twoObo: 0.5,
          multiObo: 3.5,
          singleInt: 25,
          twoInt: 20,
          multiInt: 16.67
        },
        {
          transponders: '2H',
          satelliteMode: 'ALC',
          defaultAtten: 8,
          eirpPeak: 41,
          downFrq: 3.76,
          upFrq: 5.985,
          singleIbo: 5.25,
          twoIbo: 1.5,
          multiIbo: 5.7,
          singleObo: 3,
          twoObo: 0.5,
          multiObo: 3.5,
          singleInt: 25,
          twoInt: 20,
          multiInt: 16.67
        },
        {
          transponders: '3H',
          satelliteMode: 'FGM',
          defaultAtten: 8,
          eirpPeak: 41,
          downFrq: 3.8,
          upFrq: 6.025,
          singleIbo: 5.25,
          twoIbo: 1.5,
          multiIbo: 5.7,
          singleObo: 3,
          twoObo: 0.5,
          multiObo: 3.5,
          singleInt: 25,
          twoInt: 20,
          multiInt: 16.67
        }
      ],
      LocationA: "",
      Locations_A: [],
      aLocation_options: [{
          label: 'LLK',
          dxConTourApstar7: -1,
          dxConTourExpress80E: -2,
          dxConTourABS2: -4,
          dxConTourTelkom3s: -5,
          dxConTourAsiasat4: -6,
          dxConTourCosmos: -7,
          dxConTourPotok: -8,
          lat: 14.08,
          long: 100.57,
          eirp: 40.5,
          gt: 1.09,
          id: 'a'
        },
        {
          label: 'Satoon',
          dxConTourApstar7: -10,
          dxConTourExpress80E: -20,
          dxConTourABS2: -40,
          dxConTourTelkom3s: -50,
          dxConTourAsiasat4: -60,
          dxConTourCosmos: -70,
          dxConTourPotok: -80,
          lat: 6,
          long: 100.1,
          eirp: 40.16,
          gt: 0.56,
          id: 'b'
        },
        {
          label: 'Bangkok',
          dxConTourApstar7: -11,
          dxConTourExpress80E: -12,
          dxConTourABS2: -14,
          dxConTourTelkom3s: -15,
          dxConTourAsiasat4: -16,
          dxConTourCosmos: -17,
          dxConTourPotok: -18,
          lat: 13.75,
          long: 100.57,
          eirp: 40.51,
          gt: 1.09,
          id: 'c'
        }
      ],
      LocationB: "",
      Locations_B: [],
      bLocation_options: [{
          label: 'LLK',
          dxConTourApstar7: -5,
          dxConTourExpress80E: -15,
          dxConTourABS2: -25,
          dxConTourTelkom3s: -35,
          dxConTourAsiasat4: -45,
          dxConTourCosmos: -55,
          dxConTourPotok: -65,
          lat: 14.08,
          long: 100.57,
          eirp: 40.5,
          gt: 1.09,
          id: 'aa'
        },
        {
          label: 'Satoon',
          dxConTourApstar7: -111,
          dxConTourExpress80E: -222,
          dxConTourABS2: -333,
          dxConTourTelkom3s: -444,
          dxConTourAsiasat4: -555,
          dxConTourCosmos: -666,
          dxConTourPotok: -777,
          lat: 6,
          long: 100.1,
          eirp: 40.16,
          gt: 0.56,
          id: 'bb'
        },
        {
          label: 'Bangkok',
          dxConTourApstar7: -1,
          dxConTourExpress80E: -2,
          dxConTourABS2: -3,
          dxConTourTelkom3s: -4,
          dxConTourAsiasat4: -5,
          dxConTourCosmos: -6,
          dxConTourPotok: -7,
          lat: 13.75,
          long: 100.57,
          eirp: 40.51,
          gt: 1.09,
          id: 'cc'
        }
      ],
      platform: 'Broadcast',
      platform_options: [{
          label: 'Broadcast',
          value: 1
        },
        {
          label: 'VSAT',
          value: 2
        }
      ],
      carrier: 'Multiple Carrier',
      carrier_options: [{
          label: 'Single Carrier',
          value: 1
        },
        {
          label: 'Two Carrier',
          value: 2
        },
        {
          label: 'Multiple Carrier',
          value: 3
        }
      ],
      mode: "FGM",
      mode_options: [{
          label: 'ALC',
          value: 1
        },
        {
          label: 'FGM',
          value: 2
        }
      ],
      powerU: 'Power Utilization',
      power_options: [{
          label: 'Power Utilization',
          value: 1
        },
        {
          label: 'Margin',
          value: 2
        }
      ],
      bandwidthSel: 'Bandwidth',
      bandwidth_options: [{
          label: 'Bandwidth',
          value: 1
        },
        {
          label: 'Information Rate',
          value: 2
        }
      ],
      modem: "Modem A",
      modem_options: [{
          label: 'Modem A',
          value: 1
        },
        {
          label: 'Modem B',
          value: 2
        }
      ],
      modemDatabase: [{
          label: 'Modem A',
          modCode: ['BPSK', 'QPSK', '8PSK', '16APSK'],
          modCodeValue: [1, 2, 3, 4],
          fec: ['1/2', '2/3', '3/4', '7/8'],
          fecValue: ['0.5', '0.67', '0.75', '0.875'],
          ebNo: [1, 2, 3, 4, 8, 9],
          bt: [1.05, 1.2, 1.35]
        },
        {
          label: 'Modem B',
          modCode: ['BPSK', 'QPSK', '8PSK'],
          modCodeValue: [1, 2, 3],
          fec: ['1/2', '2/3', '3/4'],
          fecValue: ['0.5', '0.67', '0.75'],
          ebNo: [1, 2, 3, 8],
          bt: [1.05, 1.2]
        }
      ],
      bestModCode: "",
      fec: "",
      modA: "",
      modB: "",
      modCodeA: "",
      modCodeB: "",
      appDVB: 'DVB-S1',
      appDVB_options: [{
          label: 'DVB-S1',
          value: 1
        },
        {
          label: 'DVB-S2',
          value: 2
        }
      ],

      //adjSat: ['Apstar7','Express80E'],
      adjSat: ['Apstar7', 'Express80E'],
      adjSat_options: ['Apstar7', 'Express80E', 'ABS2', 'Telkom3s', 'Asiasat4', 'Potok'],
      adjSatSel: [{
          label: 5,
          adjSat: ['Apstar7', 'Express80E']
        },
        {
          label: 6,
          adjSat: ['Apstar7', 'Express80E']
        },
        {
          label: 7,
          adjSat: ['Asiasat4', 'Telkom3s']
        },
        {
          label: 8,
          adjSat: ['Apstar7', 'Express80E']
        }
      ],
      adjSatDatabase: [{
          satellite: 'Thaicom5',
          adjSat: 'Apstar7',
          adjSlot: 76.5,
          beams: 'Standard-C',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -35.5630250076729,
          downlinkPdens_MCPC: -39.5630250076729,
          esInTcGt: -3
        },
        {
          satellite: 'Thaicom5',
          adjSat: 'Express80E',
          adjSlot: 80,
          beams: 'Standard-C',
          topocentricAngle: 1.485000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -29.0205999132796,
          downlinkPdens_MCPC: -37.4205999132796,
          esInTcGt: -10
        },
        {
          satellite: 'Thaicom5',
          adjSat: 'Apstar7',
          adjSlot: 76.5,
          beams: 'Global',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -35.5630250076729,
          downlinkPdens_MCPC: -39.5630250076729,
          esInTcGt: -1
        },
        {
          satellite: 'Thaicom5',
          adjSat: 'Express80E',
          adjSlot: 80,
          beams: 'Global',
          topocentricAngle: 1.485000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -29.0205999132796,
          downlinkPdens_MCPC: -37.4205999132796,
          esInTcGt: -2
        },
        {
          satellite: 'Thaicom6',
          adjSat: 'Apstar7',
          adjSlot: 76.5,
          beams: 'C1',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -35.5630250076729,
          downlinkPdens_MCPC: -39.5630250076729,
          esInTcGt: 0
        },
        {
          satellite: 'Thaicom6',
          adjSat: 'Express80E',
          adjSlot: 80,
          beams: 'C1',
          topocentricAngle: 1.485000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -29.0205999132796,
          downlinkPdens_MCPC: -37.4205999132796,
          esInTcGt: -10
        },
        {
          satellite: 'Thaicom6',
          adjSat: 'Apstar7',
          adjSlot: 76.5,
          beams: 'C2',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -35.5630250076729,
          downlinkPdens_MCPC: -39.5630250076729,
          esInTcGt: -3
        },
        {
          satellite: 'Thaicom6',
          adjSat: 'Express80E',
          adjSlot: 80,
          beams: 'C2',
          topocentricAngle: 1.485000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -29.0205999132796,
          downlinkPdens_MCPC: -37.4205999132796,
          esInTcGt: -10
        },
        {
          satellite: 'Thaicom7',
          adjSat: 'Telkom3s',
          adjSlot: 118,
          beams: 'Regional',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -37.5630250076729,
          downlinkPdens_MCPC: -41.5630250076729,
          esInTcGt: -10
        },
        {
          satellite: 'Thaicom7',
          adjSat: 'Asiasat4',
          adjSlot: 122.1,
          beams: 'Regional',
          topocentricAngle: 2.255000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -34.5630250076729,
          downlinkPdens_MCPC: -38.5630250076729,
          esInTcGt: -4
        },
        {
          satellite: 'Thaicom7',
          adjSat: 'Telkom3s',
          adjSlot: 118,
          beams: 'Semi',
          topocentricAngle: 2.035000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -37.5630250076729,
          downlinkPdens_MCPC: -41.5630250076729,
          esInTcGt: -10
        },
        {
          satellite: 'Thaicom7',
          adjSat: 'Asiasat4',
          adjSlot: 122.1,
          beams: 'Semi',
          topocentricAngle: 2.255000,
          uplinkPdens: -55,
          downlinkPdens_SCPC: -34.5630250076729,
          downlinkPdens_MCPC: -38.5630250076729,
          esInTcGt: -4
        }
      ],
      usePowerBoth: true,
      powerUVal: "",
      antSize_A: "",
      antSize_B: "",
      satObo: "",
      satIbo: "",
      atten: 12,
      deepIn: "",
      iflLossUp_A: "",
      iflLossUp_B: "",
      // iflLossDn: 0.3,
      lossFeed_A: 0.3,
      lossFeed_B: 0.3,
      misAntUp_A: "",
      misAntUp_B: "",
      misAntDn_A: "",
      misAntDn_B: "",
      //lossValue:"",
      other1: "",
      other2: "",
      other3: "",
      bw1: "",
      ebNoA: "",
      ebNoB: "",
      btA: 1.05,
      btB: 1.05,
      antEff: 'Default',
      rxTemp: 'Default',
      lnaTemp: 'Default',
      antGain: "Calculation",
      linkAva: "Default",
      equivalentBW: "No",
      ebe: "Show",
      powerBoth: "Yes",
      bwCalData_A: "",
      bwValue_A: 1075.2,
      bwValue_B: 1075.2,
      fecCal: "",
      fecValue: "",
      fecValue_A: "",
      fecValue_B: "",
      modCodeValue: "",
      modCodeValue_A: "",
      modCodeValue_B: "",
      //antEffVal_A: 60,
      //antEffVal_B: 60,
      antEffVal: 60,
      antGainVal: "",
      antGainManual: "",
      rxTempVal_A: 35,
      rxTempVal_B: 35,
      lnaTempVal_A: 45,
      lnaTempVal_B: 45,
      otherLossUp_A: 0,
      otherLossUp_B: 0,
      otherLossDn_A: 0,
      otherLossDn_B: 0,
      boltzman: -228.6,
      //hpaOp_A: 100,
      hpaOp_A: "",
      hpaOp_B: 100,
      atmos: 0.1,
      altitude: 35786, //km
      earthR: 6378, //km
      lat: "", //Angola Luanda
      long: "", //Angola Luanda
      sfd: "", //T5 Standard-C
      gtVal: 1.09, //T5 Standard-C Angola Luanda
      celeritas: 299792500,
      GuardBand_A: 0,
      GuardBand_B: 0,
      maxAtten: "",
      dcGain_A: 0,
      dcGain_B: 0,
      dnNoise_A: 1,
      dnNoise_B: 1,
      iflLossAdd_A: 0,
      iflLossAdd_B: 0,
      upFadePercent: "",
      dnFadePercent: "",
      infoValue_A: "",
      infoValue_B: "",
      rxLnaGain_A: 60,
      rxLnaGain_B: 60,
      //aggIbo: 5.2,
      //aggObo: 4.2,
      satBW: 72,
      hpaPowerBoth_A: "",
      hpaPowerBoth_B: 100,
      frqDn_A: "",
      frqDn_B: "",
      aggHpaBoo: 3,
      numMCPC: 1,
      ciCoch_A: 30,
      ciCoch_B: 25,
      carrierType: true,
      polImp1: 5,
      polImp2: 5,
      polImp3: 0,
      polImp4: 3,
      polImp5: 5,
      polImp6: 5,
      polImp7: 0,
      polImp8: 3,
      ulSidelobe1: 0,
      ulSidelobe2: 0,
      ulSidelobe3: 0,
      ulSidelobe4: 0,
      esAdj1: -1.5,
      esAdj2: -20,
      esAdj3: 0,
      esAdj4: -25,
      resultsCal: [],
      linkAvaMan: ""
    }


  },
  computed: {
    rainCal() {
      return rainAtten001({
        lat: this.latSel_A,
        lon: this.longSel_A
      }, this.frqUp_A, this.orbitalSlotSel, this.upPol, this.upFadePercent);
    },
    gasCal() {
      return gasAtten(+this.frqUp_A, this.elAngle_A);
    },
    cloudCal() {
      return cloudAtten(+this.frqUp_A, this.elAngle_A);
    },
    scinCal() {
      return scinAtten(+this.frqUp_A, this.elAngle_A, this.antSize_A, this.upFadePercent);
    },
    beam_options() {
      var vm = this;
      let result = [];
      result = this.beamDatabase.find(function(x) {
        return x.satellite === 'Thaicom ' + vm.satellite;
      });
      if (result) {
        return result.beams;
      }
      return [];
    },
    selectedSatelliteName() {
      return 'Thaicom ' + this.satellite;
    },
    tp_options() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return result.transponders;
      }
      return [];
    },
    upPol() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return result.ulPol;
      }
      //return [];
    },
    dnPol() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return result.dnPol;
      }
      //return [];
    },
    frqDn_options() {
      var vm = this;
      let result = [];
      result = this.tpConfigDatabase.find(function(x) {
        return x.transponders === vm.transponders;
      });
      if (result) {
        return result.downFrq;
      }
      //return [];
    },
    frqUp_options() {
      var vm = this;
      let result = [];
      result = this.tpConfigDatabase.find(function(x) {
        return x.transponders === vm.transponders;
      });
      if (result) {
        return result.upFrq;
      }
      return [];
    },
    orbitalSlotSel() {
      var vm = this;
      let result = [];
      result = this.satelliteDatabase.find(function(x) {
        return x.value === vm.satellite;
      });
      if (result) {
        return result.orbitalSlot;
      }
      return [];
    },
    sfdSel() {
      var vm = this;
      let result = [];
      result = this.satelliteDatabase.find(function(x) {
        return x.value === vm.satellite;
      });
      if (result) {
        return result.sfd;
      }
      return [];
    },
    maxAttenSel() {
      var vm = this;
      let result = [];
      result = this.satelliteDatabase.find(function(x) {
        return x.value === vm.satellite;
      });
      if (result) {
        return result.maxAtten;
      }
      return [];
    },
    linkAvaCal() {
      if (this.linkAva === "Default") {
        this.linkAvaMan = 99.99;
        this.upFadePercent = 99.99;
        this.dnFadePercent = 99.99;
      } else {
        this.upFadePercent = this.linkAvaMan;
        this.dnFadePercent = this.linkAvaMan;
      }
    },
    aggIbo() {
      var vm = this;
      let result = [];
      result = this.tpConfigDatabase.find(function(x) {
        return x.transponders === vm.transponders;
      });
      if (result) {
        if (this.carrier === 'Single Carrier') {
          return result.singleIbo;
        } else if (this.carrier === 'Two Carrier') {
          return result.twoIbo;
        } else {
          return result.multiIbo;
        }
      }
      return;
    },
    aggObo() {
      var vm = this;
      let result = [];
      result = this.tpConfigDatabase.find(function(x) {
        return x.transponders === vm.transponders;
      });
      if (result) {
        if (this.carrier === 'Single Carrier') {
          return result.singleObo;
        } else if (this.carrier === 'Two Carrier') {
          return result.twoObo;
        } else {
          return result.multiObo;
        }
      }
      return;
    },
    interMod() {
      var vm = this;
      let result = [];
      result = this.tpConfigDatabase.find(function(x) {
        return x.transponders === vm.transponders;
      });
      if (result) {
        if (this.carrier === 'Single Carrier') {
          return result.singleInt;
        } else if (this.carrier === 'Two Carrier') {
          return result.twoInt;
        } else {
          return result.multiInt;
        }
      }
      return [];
    },
    maxEirpNonUtil_A() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return (result.maxEirpNon - this.oboCal_A).toFixed(2);
      }
      //return [];
    },
    maxEirpNonUtil_B() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return (result.maxEirpNon - this.oboCal_B).toFixed(2);
      }
    },
    maxEirpNonBW_A() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return (result.maxEirpNon - (this.aggObo + (10 * Math.log10(36000 / this.allowBw_A)))).toFixed(2);
      }
    },
    maxEirpNonBW_B() {
      var vm = this;
      let result = [];
      result = this.tpDatabase.find(function(x) {
        return x.beams === vm.beams;
      });
      if (result) {
        return (result.maxEirpNon - (this.aggObo + (10 * Math.log10(36000 / this.allowBw_B)))).toFixed(2);
      }
    },
    // topo1() {
    // 	var vm = this;
    // 	let result = [];
    // 	result = this.adjSatDatabase.find(function(x) {
    // 		return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
    // 		//return x.text === this.satellite;
    // 		//return x.beams === vm.beams && x.text === this.satellite;
    // 		//return x.adjSat === vm.adjSat[0];
    // 	});
    // 	if (result) {
    // 		return result.topocentricAngle;
    // 	}
    // 	return [];
    // },
    // topo2() {
    // 	var vm = this;
    // 	let result = [];
    // 	result = this.adjSatDatabase.find(function(x) {
    // 		return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[1];
    // 	});
    // 	if (result) {
    // 		return result.topocentricAngle;
    // 	}
    // 	return [];
    // },
    adjSlot1() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === vm.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      });
      if (result) {
        return result.adjSlot;
      }
      return [];
    },
    adjSlot2() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === vm.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[1];
      });
      if (result) {
        return result.adjSlot;
      }
      return [];
    },
    topo1() {
      return (Math.abs(this.adjSlot1 - this.orbitalSlotSel) - 0.15) * 1.1;
      //return this.adjSlot1;
    },
    topo2() {
      return (Math.abs(this.adjSlot2 - this.orbitalSlotSel) - 0.15) * 1.1;
      //return this.orbitalSlotSel;
    },



    ulPden1() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      });
      if (result) {
        return result.uplinkPdens;
      }
      return [];
    },
    ulPden2() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[1];
      });
      if (result) {
        return result.uplinkPdens;
      }
      return [];
    },
    carrierTypeSel() {
      if (this.carrierType === true) {
        return "SCPC";
      } else {
        return "MCPC";
      }
    },
    downlinkPdenSel1() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      });
      if (result) {
        if (vm.carrierType === true) {
          return result.downlinkPdens_SCPC;
        } else {
          return result.downlinkPdens_MCPC;
        }
      }
      return [];
    },
    downlinkPdenSel2() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[1];
      });
      if (result) {
        if (vm.carrierType === true) {
          return result.downlinkPdens_SCPC;
        } else {
          return result.downlinkPdens_MCPC;
        }
      }
      return [];
    },
    esInTcGt1() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[0];
      });
      if (result) {
        return result.esInTcGt;
      }
      return [];
    },
    esInTcGt2() {
      var vm = this;
      let result = [];
      result = this.adjSatDatabase.find(function(x) {
        return x.text === this.satellite && x.beams === vm.beams && x.adjSat === vm.adjSat[1];
      });
      if (result) {
        return result.esInTcGt;
      }
      return [];
    },
    grr1_A() {
      Gmax = 10 * Math.log10((this.antEffVal_B / 100) * Math.pow((this.antSize_B * this.frqDn_A * Math.PI / 0.3), 2));
      lamda = 0.3 / this.frqDn_A;
      theta_r = 95 * lamda / this.antSize_B;
      g1 = 29 - 25 * Math.log10(theta_r);
      theta_m = lamda / this.antSize_B * Math.sqrt((Gmax - g1) / 0.0025);
      theta_b = Math.pow(10, (34 / 25));

      if (Math.abs(this.topo1) < theta_m) {
        x = Gmax - 0.0025 * Math.pow((this.antSize_B / lamda * this.topo1), 2);
      } else if (Math.abs(this.topo1) < theta_r) {
        x = g1;
      } else if (Math.abs(this.topo1) < theta_b) {
        x = 29 - 25 * Math.log10(Math.abs(this.topo1));
      } else if (Math.abs(this.topo1) < 70) {
        x = -5;
      } else {
        x = 0;
      }

      return Gmax - x;
    },
    grr2_A() {
      Gmax = 10 * Math.log10((this.antEffVal_B / 100) * Math.pow((this.antSize_B * this.frqDn_A * Math.PI / 0.3), 2));
      lamda = 0.3 / this.frqDn_A;
      theta_r = 95 * lamda / this.antSize_B;
      g1 = 29 - 25 * Math.log10(theta_r);
      theta_m = lamda / this.antSize_B * Math.sqrt((Gmax - g1) / 0.0025);
      theta_b = Math.pow(10, (34 / 25));

      if (Math.abs(this.topo2) < theta_m) {
        x = Gmax - 0.0025 * Math.pow((this.antSize_B / lamda * this.topo2), 2);
      } else if (Math.abs(this.topo2) < theta_r) {
        x = g1;
      } else if (Math.abs(this.topo2) < theta_b) {
        x = 29 - 25 * Math.log10(Math.abs(this.topo2));
      } else if (Math.abs(this.topo2) < 70) {
        x = -5;
      } else {
        x = 0;
      }

      return Gmax - x;
    },
    grr1_B() {
      Gmax = 10 * Math.log10((this.antEffVal_A / 100) * Math.pow((this.antSize_A * this.frqDn_B * Math.PI / 0.3), 2));
      lamda = 0.3 / this.frqDn_B;
      theta_r = 95 * lamda / this.antSize_A;
      g1 = 29 - 25 * Math.log10(theta_r);
      theta_m = lamda / this.antSize_A * Math.sqrt((Gmax - g1) / 0.0025);
      theta_b = Math.pow(10, (34 / 25));

      if (Math.abs(this.topo1) < theta_m) {
        x = Gmax - 0.0025 * Math.pow((this.antSize_A / lamda * this.topo1), 2);
      } else if (Math.abs(this.topo1) < theta_r) {
        x = g1;
      } else if (Math.abs(this.topo1) < theta_b) {
        x = 29 - 25 * Math.log10(Math.abs(this.topo1));
      } else if (Math.abs(this.topo1) < 70) {
        x = -5;
      } else {
        x = 0;
      }

      return Gmax - x;
    },
    grr2_B() {
      Gmax = 10 * Math.log10((this.antEffVal_A / 100) * Math.pow((this.antSize_A * this.frqDn_B * Math.PI / 0.3), 2));
      lamda = 0.3 / this.frqDn_B;
      theta_r = 95 * lamda / this.antSize_A;
      g1 = 29 - 25 * Math.log10(theta_r);
      theta_m = lamda / this.antSize_A * Math.sqrt((Gmax - g1) / 0.0025);
      theta_b = Math.pow(10, (34 / 25));

      if (Math.abs(this.topo2) < theta_m) {
        x = Gmax - 0.0025 * Math.pow((this.antSize_A / lamda * this.topo2), 2);
      } else if (Math.abs(this.topo2) < theta_r) {
        x = g1;
      } else if (Math.abs(this.topo2) < theta_b) {
        x = 29 - 25 * Math.log10(Math.abs(this.topo2));
      } else if (Math.abs(this.topo2) < 70) {
        x = -5;
      } else {
        x = 0;
      }

      return Gmax - x;
    },
    ciUp1_A() {
      return parseFloat(this.powerDen_A) + parseFloat(this.antGainValCal_A) + parseFloat(this.gtSel_A) - (parseFloat(this.ulPden1) + 29 - (25 * Math.log10(parseFloat(this.topo1))) + parseFloat(this.esInTcGt1)) + parseFloat(this.polImp1) +
        parseFloat(
          this.ulSidelobe1);
    },
    ciUp2_A() {
      return parseFloat(this.powerDen_A) + parseFloat(this.antGainValCal_A) + parseFloat(this.gtSel_A) - (parseFloat(this.ulPden2) + 29 - (25 * Math.log10(parseFloat(this.topo2))) + parseFloat(this.esInTcGt2)) + parseFloat(this.polImp2) +
        parseFloat(
          this.ulSidelobe2);
    },
    ciUp1_B() {
      return parseFloat(this.powerDen_B) + parseFloat(this.antGainValCal_B) + parseFloat(this.gtSel_B) - (parseFloat(this.ulPden1) + 29 - (25 * Math.log10(parseFloat(this.topo1))) + parseFloat(this.esInTcGt1)) + parseFloat(this.polImp3) +
        parseFloat(
          this.ulSidelobe3);
    },
    ciUp2_B() {
      return parseFloat(this.powerDen_B) + parseFloat(this.antGainValCal_B) + parseFloat(this.gtSel_B) - (parseFloat(this.ulPden2) + 29 - (25 * Math.log10(parseFloat(this.topo2))) + parseFloat(this.esInTcGt2)) + parseFloat(this.polImp4) +
        parseFloat(
          this.ulSidelobe4);
    },
    ciUpTotal_A() {
      return Math.min(-10 * Math.log10(Math.pow(10, -(parseFloat(this.ciUp1_A) / 10)) + Math.pow(10, -(parseFloat(this.ciUp2_A) / 10))), 30);
    },
    ciUpTotal_B() {
      return Math.min(-10 * Math.log10(Math.pow(10, -(parseFloat(this.ciUp1_B) / 10)) + Math.pow(10, -(parseFloat(this.ciUp2_B) / 10))), 30);
    },
    ciDn1_A() {
      return this.eirpDnDenClear_A - (this.downlinkPdenSel1 + this.esAdj1) + this.grr1_A + this.polImp5;
    },
    ciDn2_A() {
      return this.eirpDnDenClear_A - (this.downlinkPdenSel2 + this.esAdj2) + this.grr2_A + this.polImp6;
    },
    ciDn1_B() {
      return this.eirpDnDenClear_B - (this.downlinkPdenSel1 + this.esAdj3) + this.grr1_B + this.polImp7;
    },
    ciDn2_B() {
      return this.eirpDnDenClear_B - (this.downlinkPdenSel2 + this.esAdj4) + this.grr2_B + this.polImp8;
    },
    ciDnTotal_A() {
      return Math.min(-10 * Math.log10(Math.pow(10, -(this.ciDn1_A / 10)) + Math.pow(10, -(this.ciDn2_A / 10))), 30);
    },
    ciDnTotal_B() {
      return Math.min(-10 * Math.log10(Math.pow(10, -(this.ciDn1_B / 10)) + Math.pow(10, -(this.ciDn2_B / 10))), 30);
    },
    cnTotalClear_A() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_A / 10) + 1 / Math.pow(10, this.cnUpClear_A / 10) +
        1 / Math.pow(10, this.cnDnClear_A / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_A / 10) + 1 / Math.pow(10, this.ciDnTotal_A / 10)));
    },
    cnTotalUpfade_A() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_A / 10) + 1 / Math.pow(10, this.cnUpUpfade_A / 10) +
        1 / Math.pow(10, this.cnDnUpfade_A / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_A / 10) + 1 / Math.pow(10, this.ciDnTotal_A / 10)));
    },
    cnTotalDnfade_A() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_A / 10) + 1 / Math.pow(10, this.cnUpClear_A / 10) +
        1 / Math.pow(10, this.cnDnfadeClear_A / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_A / 10) + 1 / Math.pow(10, this.ciDnTotal_A / 10)));
    },
    cnTotalBothfade_A() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_A / 10) + 1 / Math.pow(10, this.cnUpUpfade_A / 10) +
        1 / Math.pow(10, this.cnDnfadeUpfade_A / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_A / 10) + 1 / Math.pow(10, this.ciDnTotal_A / 10)));
    },
    ebnoClear_A() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalClear_A - (10 * Math.log10(this.infoValue_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      } else {
        return this.cnTotalClear_A - (10 * Math.log10(this.infoCal_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      }
    },
    ebnoUpfade_A() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalUpfade_A - (10 * Math.log10(this.infoValue_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      } else {
        return this.cnTotalUpfade_A - (10 * Math.log10(this.infoCal_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      }
    },
    ebnoDnfade_A() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalDnfade_A - (10 * Math.log10(this.infoValue_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      } else {
        return this.cnTotalDnfade_A - (10 * Math.log10(this.infoCal_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      }
    },
    ebnoBothfade_A() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalBothfade_A - (10 * Math.log10(this.infoValue_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      } else {
        return this.cnTotalBothfade_A - (10 * Math.log10(this.infoCal_A * 1000)) + (10 * Math.log10(this.bwCal_A * 1000));
      }
    },
    marginClear_A() {
      return parseFloat(this.ebnoClear_A) - parseFloat(this.ebNoA);
    },
    marginUpfade_A() {
      return parseFloat(this.ebnoUpfade_A) - parseFloat(this.ebNoA);
    },
    marginDnfade_A() {
      return parseFloat(this.ebnoDnfade_A) - parseFloat(this.ebNoA);
    },
    marginBothfade_A() {
      return parseFloat(this.ebnoBothfade_A) - parseFloat(this.ebNoA);
    },

    //

    cnTotalClear_B() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_B / 10) + 1 / Math.pow(10, this.cnUpClear_B / 10) +
        1 / Math.pow(10, this.cnDnClear_B / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_B / 10) + 1 / Math.pow(10, this.ciDnTotal_B / 10)));
    },
    cnTotalUpfade_B() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_B / 10) + 1 / Math.pow(10, this.cnUpUpfade_B / 10) +
        1 / Math.pow(10, this.cnDnUpfade_B / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_B / 10) + 1 / Math.pow(10, this.ciDnTotal_B / 10)));
    },
    cnTotalDnfade_B() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_B / 10) + 1 / Math.pow(10, this.cnUpClear_B / 10) +
        1 / Math.pow(10, this.cnDnfadeClear_B / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_B / 10) + 1 / Math.pow(10, this.ciDnTotal_B / 10)));
    },
    cnTotalBothfade_B() {
      return 10 * Math.log10(1 / (1 / Math.pow(10, this.ciUpTotal_B / 10) + 1 / Math.pow(10, this.cnUpUpfade_B / 10) +
        1 / Math.pow(10, this.cnDnfadeUpfade_B / 10) + 1 / Math.pow(10, this.interMod / 10) + 1 / Math.pow(10, this.ciCoch_B / 10) + 1 / Math.pow(10, this.ciDnTotal_B / 10)));
    },
    ebnoClear_B() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalClear_B - (10 * Math.log10(this.infoValue_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      } else {
        return this.cnTotalClear_B - (10 * Math.log10(this.infoCal_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      }
    },
    ebnoUpfade_B() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalUpfade_B - (10 * Math.log10(this.infoValue_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      } else {
        return this.cnTotalUpfade_B - (10 * Math.log10(this.infoCal_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      }
    },
    ebnoDnfade_B() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalDnfade_B - (10 * Math.log10(this.infoValue_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      } else {
        return this.cnTotalDnfade_B - (10 * Math.log10(this.infoCal_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      }
    },
    ebnoBothfade_B() {
      if (this.bandwidthSel === 'Information Rate') {
        return this.cnTotalBothfade_B - (10 * Math.log10(this.infoValue_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      } else {
        return this.cnTotalBothfade_B - (10 * Math.log10(this.infoCal_B * 1000)) + (10 * Math.log10(this.bwCal_B * 1000));
      }
    },
    marginClear_B() {
      return parseFloat(this.ebnoClear_B) - parseFloat(this.ebNoB);
    },
    marginUpfade_B() {
      return parseFloat(this.ebnoUpfade_B) - parseFloat(this.ebNoB);
    },
    marginDnfade_B() {
      return parseFloat(this.ebnoDnfade_B) - parseFloat(this.ebNoB);
    },
    marginBothfade_B() {
      return parseFloat(this.ebnoBothfade_B) - parseFloat(this.ebNoB);
    },
    fec_options() {
      var vm = this;
      let result = [];
      var modemSel = this.modem;
      result = this.modemDatabase.find(function(x) {
        return x.label === modemSel;
      });
      if (result) {
        //return result.fec;
        return result.fecValue;
      }
      return [];
    },
    modCode_options() {
      var vm = this;
      let result = [];
      var modemSel = this.modem;
      result = this.modemDatabase.find(function(x) {
        return x.label === modemSel;
      });
      if (result) {
        return result.modCode;
      }
      return [];
    },
    ebNo_options() {
      var vm = this;
      let result = [];
      var modemSel = this.modem;
      result = this.modemDatabase.find(function(x) {
        return x.label === modemSel;
      });
      if (result) {
        return result.ebNo;
      }
      return [];
    },
    bt_options() {
      var vm = this;
      let result = [];
      var modemSel = this.modem;
      result = this.modemDatabase.find(function(x) {
        return x.label === modemSel;
      });
      if (result) {
        return result.bt;
      }
      return [];
    },
    selectedLocations_A() {
      return this.Locations_A.map(function(v) {
        return v.label;
      })
    },
    locationsName_A() {
      return this.locationData_A.label;
    },
    txDxContourApstar7() {
      return this.locationData_A.dxConTourApstar7;
    },
    txDxContourExpress80E() {
      return this.locationData_A.dxConTourExpress80E;
    },
    txDxContourABS2() {
      return this.locationData_A.dxConTourABS2;
    },
    txDxContourTelkom3s() {
      return this.locationData_A.dxConTourTelkom3s;
    },
    txDxContourAsiasat4() {
      return this.locationData_A.dxConTourAsiasat4;
    },
    txDxContourCosmos() {
      return this.locationData_A.dxConTourCosmos;
    },
    txDxContourPotok() {
      return this.locationData_A.dxConTourPotok;
    },
    rxDxContourApstar7() {
      return this.locationData_B.dxConTourApstar7;
    },
    rxDxContourExpress80E() {
      return this.locationData_B.dxConTourExpress80E;
    },
    rxDxContourABS2() {
      return this.locationData_B.dxConTourABS2;
    },
    rxDxContourTelkom3s() {
      return this.locationData_B.dxConTourTelkom3s;
    },
    rxDxContourAsiasat4() {
      return this.locationData_B.dxConTourAsiasat4;
    },
    rxDxContourCosmos() {
      return this.locationData_B.dxConTourCosmos;
    },
    rxDxContourPotok() {
      return this.locationData_B.dxConTourPotok;
    },
    selectedLocations_B() {
      return this.Locations_B.map(function(v) {
        return v.label;
      })
    },
    locationsName_B() {
      return this.locationData_B.label;
    },
    rxDxContour1() {
      return this.Locations_B.map(function(v) {
        return v.dxConTour1;
      })
    },
    rxDxContour2() {
      return this.Locations_B.map(function(v) {
        return v.dxConTour2;
      })
    },
    // latSel_A() {
    // 	return this.Locations_A.map(function(v) {
    // 		return v.lat;
    // 	})
    // },
    // latSel_A() {
    // 	var vm = this;
    //
    // 	return this.Locations_A.map(function(v) {
    // 		return v.lat;
    // 	})
    // },
    locationData_A() {
      var vm = this;
      let result = [];
      result = vm.aLocation_options.find(function(x) {
        return x.label === vm.LocationA;
      });
      if (result) {
        return result;
      }
      return [];
    },
    locationData_B() {
      var vm = this;
      let result = [];
      result = vm.bLocation_options.find(function(x) {
        return x.label === vm.LocationB;
      });
      if (result) {
        return result;
      }
      return [];
    },
    // latLocation_A() {
    // 	var vm = this;
    // 	let result = [];
    // 	result = vm.aLocation_options.find(function(x) {
    // 		return x.label === vm.LocationA;
    // 	});
    // 	if (result) {
    // 		return result.lat;
    // 	}
    // 	return [];
    // },
    latSel_A() {
      return this.locationData_A.lat;
    },
    latSel_B() {
      return this.locationData_B.lat;
    },
    latRad_A() {
      return this.latSel_A * Math.PI / 180;
    },
    latRad_B() {
      return this.latSel_B * Math.PI / 180;
    },
    longSel_A() {
      return this.locationData_A.long;
    },
    longSel_B() {
      return this.locationData_B.long;
    },
    longRad_A() {
      return this.longSel_A * Math.PI / 180;
    },
    longRad_B() {
      return this.longSel_B * Math.PI / 180;
    },
    hpaBackoff_A() {
      return (-10 * Math.log10(this.hpaPowerBoth_A / this.hpaMax_A)).toFixed(0);
    },
    hpaBackoff_B() {
      return (-10 * Math.log10(this.hpaPowerBoth_A / this.hpaMax_B)).toFixed(0);
    },
    eirpdnSat_A() {
      return this.locationData_A.eirp;
    },
    eirpdnSat_B() {
      return this.locationData_B.eirp;
    },
    gtSel_A() {
      return this.locationData_A.gt;
    },
    gtSel_B() {
      return this.locationData_B.gt;
    },
    // antGainVal_A(){
    // 	return this.antGainVal;
    // },
    // antGainVal_B(){
    // 	return this.antGainVal;
    // },
    antGainValCal() {
      if (this.antGain === 'Calculation') {
        this.antGainVal = 10 * Math.log10((this.antEffVal_A / 100) * (Math.pow(Math.PI * this.antSize_A / (this.celeritas / (this.frqUp_options * 1000000000)), 2)));
      } else {
        this.antGainVal = this.antGainManual;
      }
      return this.antGainVal;
    },

    antGainValCal_A() {
      if (this.antGain === 'Calculation') {
        this.antGainVal_A = 10 * Math.log10((this.antEffVal_A / 100) * (Math.pow(Math.PI * this.antSize_A / (this.celeritas / (this.frqUp_A * 1000000000)), 2)));
      } else {
        this.antGainVal_A = this.antGainManual;
      }
      return this.antGainVal_A;
    },
    antGainValCal_B() {
      if (this.antGain === 'Calculation') {
        this.antGainVal_B = 10 * Math.log10((this.antEffVal_B / 100) * (Math.pow(Math.PI * this.antSize_B / (this.celeritas / (this.frqUp_B * 1000000000)), 2)));
      } else {
        this.antGainVal_B = this.antGainManual;
      }
      return this.antGainVal_B;
    },
    gainSqrM_A() {
      return 10 * Math.log10(4 * Math.PI * (Math.pow(((this.frqUp_A * 1000000000) / this.celeritas), 2)));
    },
    gainSqrM_B() {
      return 10 * Math.log10(4 * Math.PI * (Math.pow(((this.frqUp_B * 1000000000) / this.celeritas), 2)));
    },
    eirpUpVal_A() {
      return this.antGainValCal_A + (10 * Math.log10(this.hpaPowerBoth_A)) - this.iflLossUp_A - this.misAntUp_A - this.otherLossUp_A;
    },
    eirpUpVal_B() {
      return this.antGainValCal_B + (10 * Math.log10(this.hpaPowerBoth_B)) - this.iflLossUp_B - this.misAntUp_B - this.otherLossUp_B;
    },
    eirpDnClear_A() {
      return this.eirpdnSat_B - this.oboCal_A;
    },
    eirpDnClear_B() {
      return this.eirpdnSat_A - this.oboCal_B;
    },
    eirpDnUpfade_A() {
      return this.eirpdnSat_B - this.oboUpfade_A;
    },
    eirpDnUpfade_B() {
      return this.eirpdnSat_A - this.oboUpfade_B;
    },
    iboCal_A() {
      return this.sfdAtten_A - this.opFluxDen_A;
    },
    iboCal_B() {
      return this.sfdAtten_B - this.opFluxDen_B;
    },
    oboCal_A() {
      return this.eirpdnSat_B - (this.opFluxDen_A + this.tpGain_A);
    },
    oboCal_B() {
      return this.eirpdnSat_A - (this.opFluxDen_B + this.tpGain_B);
    },
    tpGain_A() {
      return parseFloat(this.eirpdnSat_B) - 4.2 - (parseFloat(this.sfdMax_A) - 5.2 - (parseFloat(this.maxAttenSel) - parseFloat(this.atten)));
    },
    tpGain_B() {
      return parseFloat(this.eirpdnSat_A) - 4.2 - (parseFloat(this.sfdMax_B) - 5.2 - (parseFloat(this.maxAttenSel) - parseFloat(this.atten)));
    },
    sfdMax_A() {
      return -(parseFloat(this.sfdSel) + parseFloat(this.gtSel_A));
    },
    sfdMax_B() {
      return -(parseFloat(this.sfdSel) + parseFloat(this.gtSel_B));
    },
    sfdAtten_A() {
      return this.sfdMax_A - (parseFloat(this.maxAttenSel) - this.atten);
    },
    sfdAtten_B() {
      return this.sfdMax_B - (parseFloat(this.maxAttenSel) - this.atten);
    },
    allowFluxDen_A() {
      return this.sfdMax_A - (parseFloat(this.maxAttenSel) - this.atten) - this.aggIbo;
    },
    allowFluxDen_B() {
      return this.sfdMax_B - (parseFloat(this.maxAttenSel) - this.atten) - this.aggIbo;
    },
    hpaMax_A() {
      return Math.pow(10, (10 * (Math.log10(this.hpaPowerBoth_A * this.numMCPC)) + this.aggHpaBoo) / 10);
    },
    hpaMax_B() {
      return Math.pow(10, (10 * (Math.log10(this.hpaPowerBoth_B * this.numMCPC)) + this.aggHpaBoo) / 10);
    },
    opFluxDen_A() {
      return this.eirpUpVal_A - this.spreadLoss_A;
    },
    opFluxDen_B() {
      return this.eirpUpVal_B - this.spreadLoss_B;
    },
    spreadLoss_A() {
      return parseFloat(this.atmos) + (10 * Math.log10(4 * Math.PI * Math.pow(this.slantRange_A * 1000, 2)));
    },
    spreadLoss_B() {
      return parseFloat(this.atmos) + (10 * Math.log10(4 * Math.PI * Math.pow(this.slantRange_B * 1000, 2)));
      // return (parseFloat(this.atmos) + (10 * Math.log10(4 * Math.PI * Math.pow(this.slantRange_B * 1000, 2)))).toFixed(2);
    },
    pathLoss_A() {
      return 20 * (Math.log10(4 * Math.PI * this.frqDn_A * 1000000000 * this.slantRange_B * 1000 / this.celeritas));
    },
    pathLoss_B() {
      return 20 * (Math.log10(4 * Math.PI * this.frqDn_B * 1000000000 * this.slantRange_A * 1000 / this.celeritas));
    },
    pathLossAtmos_A() {
      return (20 * (Math.log10(4 * Math.PI * this.frqDn_A * 1000000000 * this.slantRange_B * 1000 / this.celeritas))) + parseFloat(this.atmos);
    },
    pathLossAtmos_B() {
      return (20 * (Math.log10(4 * Math.PI * this.frqDn_B * 1000000000 * this.slantRange_A * 1000 / this.celeritas))) + parseFloat(this.atmos);
    },
    receivePwrClear_A() {
      return parseFloat(this.eirpDnClear_A) - parseFloat(this.pathLossAtmos_A) + parseFloat(this.antGainReceive_B) - parseFloat(this.totalLossDn_B);
    },
    receivePwrClear_B() {
      return parseFloat(this.eirpDnClear_B) - parseFloat(this.pathLossAtmos_B) + parseFloat(this.antGainReceive_A) - parseFloat(this.totalLossDn_A);
    },
    receivePwrUpfade_A() {
      return parseFloat(this.eirpDnUpfade_A) - parseFloat(this.pathLossAtmos_A) + parseFloat(this.antGainReceive_B) - parseFloat(this.totalLossDn_B);
    },
    receivePwrUpfade_B() {
      return parseFloat(this.eirpDnUpfade_B) - parseFloat(this.pathLossAtmos_B) + parseFloat(this.antGainReceive_A) - parseFloat(this.totalLossDn_A);
    },
    eirpDnDenClear_A() {
      return this.eirpDnClear_A - (10 * Math.log10(this.bwCal_A * 1000));
    },
    eirpDnDenClear_B() {
      return this.eirpDnClear_B - (10 * Math.log10(this.bwCal_B * 1000));
    },
    eirpDnDenUpfade_A() {
      return 37.97 - this.oboCal_A - (10 * Math.log10(this.bwCal_A * 1000));
    },
    eirpDnDenUpfade_B() {
      return 37.97 - this.oboCal_B - (10 * Math.log10(this.bwCal_B * 1000));
    },
    antGainReceive_A() {
      return 10 * Math.log10(4 * Math.PI * (this.antEffVal_A / 100) * (Math.PI * Math.pow(this.antSize_A, 2) / 4) / Math.pow((this.celeritas / (this.frqDn_B * 1000000000)), 2));
    },
    antGainReceive_B() {
      return 10 * Math.log10(4 * Math.PI * (this.antEffVal_B / 100) * (Math.PI * Math.pow(this.antSize_B, 2) / 4) / Math.pow((this.celeritas / (this.frqDn_A * 1000000000)), 2));
    },
    tsys_A() {
      return parseFloat(this.rxTempVal_A) + ((Math.pow(10, (this.lossFeed_A / 10)) - 1) * 290) + (Math.pow(10, (this.lossFeed_A / 10)) * this.lnaTempVal_A) +
        ((Math.pow(10, (this.lossFeed_A / 10))) * ((Math.pow(10, (this.dnNoise_A / 10)) - 1) * 290) / (Math.pow(10, (this.rxLnaGain_A / 10)))) +
        (((Math.pow(10, (this.iflLossAdd_A / 10))) - 1) * 290) / ((Math.pow(10, (this.rxLnaGain_A / 10))) * (Math.pow(10, (this.dcGain_A / 10))));

      //return (Math.pow(10,(this.lossFeed/10))*this.lnaTempVal)+((Math.pow(10,(this.lossFeed/10)))*((Math.pow(10,(this.dnNoise_A/10))-1)*290)/(Math.pow(10,this.rxLnaGain_A/10)));
      //return (((Math.pow(10,this.iflLossAdd/10))-1)*290)/((Math.pow(10,this.rxLnaGain_A/10))*(Math.pow(10,this.dcGain/10)));

    },
    tsys_B() {
      return parseFloat(this.rxTempVal_B) + ((Math.pow(10, (this.lossFeed_B / 10)) - 1) * 290) + (Math.pow(10, (this.lossFeed_B / 10)) * this.lnaTempVal_B) +
        ((Math.pow(10, (this.lossFeed_B / 10))) * ((Math.pow(10, (this.dnNoise_B / 10)) - 1) * 290) / (Math.pow(10, (this.rxLnaGain_B / 10)))) +
        (((Math.pow(10, (this.iflLossAdd_B / 10))) - 1) * 290) / ((Math.pow(10, (this.rxLnaGain_B / 10))) * (Math.pow(10, (this.dcGain_B / 10))));
    },
    gtES_A() {
      return this.antGainReceive_A - (10 * Math.log10(this.tsys_A));
    },
    gtES_B() {
      return this.antGainReceive_B - (10 * Math.log10(this.tsys_B));
    },
    slantRange_A() {
      return Math.sqrt(Math.pow(this.altitude, 2) + (2 * this.earthR * (this.altitude + this.earthR) * (1 - Math.cos(this.longDiff_A) * Math.cos(this.latSel_A * Math.PI / 180))));
    },
    slantRange_B() {
      return Math.sqrt(Math.pow(this.altitude, 2) + (2 * this.earthR * (this.altitude + this.earthR) * (1 - Math.cos(this.longDiff_B) * Math.cos(this.latSel_B * Math.PI / 180))));
    },
    azAngle_A() {
      c = (this.orbitalSlotSel - this.longSel_A) * Math.PI / 180;
      a = Math.abs(Math.atan(Math.tan((Math.abs(c))) / Math.sin(this.latRad_A)) * 180 / Math.PI);

      if (this.latSel_A >= 0) {
        if (this.longSel_A - this.orbitalSlotSel >= 0) {
          return 180 + a;
        } else {
          return 180 - a
        }
      } else {
        if (this.longSel_A - this.orbitalSlotSel >= 0) {
          return 360 + a;
        } else {
          return a
        }
      }
    },
    azAngle_B() {
      c = (this.orbitalSlotSel - this.longSel_B) * Math.PI / 180;
      a = Math.abs(Math.atan(Math.tan((Math.abs(c))) / Math.sin(this.latRad_B)) * 180 / Math.PI);

      if (this.latSel_B >= 0) {
        if (this.longSel_B - this.orbitalSlotSel >= 0) {
          return 180 + a;
        } else {
          return 180 - a
        }
      } else {
        if (this.longSel_B - this.orbitalSlotSel >= 0) {
          return 360 + a;
        } else {
          return a
        }
      }
    },
    elAngle_A() {
      c = (this.orbitalSlotSel - this.longSel_A) * Math.PI / 180;
      return (180 / Math.PI) * Math.atan((Math.cos(c) * Math.cos(this.latRad_A) - 0.15126) / Math.sqrt(Math.pow(Math.sin(c), 2) + Math.pow(Math.cos(c), 2) * Math.pow(Math.sin(this.latRad_A), 2)));
    },
    elAngle_B() {
      c = (this.orbitalSlotSel - this.longSel_B) * Math.PI / 180;
      return (180 / Math.PI) * Math.atan((Math.cos(c) * Math.cos(this.latRad_B) - 0.15126) / Math.sqrt(Math.pow(Math.sin(c), 2) + Math.pow(Math.cos(c), 2) * Math.pow(Math.sin(this.latRad_B), 2)));
    },
    longDiff_A() {
      return (this.longSel_A * Math.PI / 180) - (this.orbitPoint);
    },
    longDiff_B() {
      return (this.longSel_B * Math.PI / 180) - (this.orbitPoint);
    },
    centralAngle_A() {
      return Math.acos(Math.cos(this.latRad_A) * Math.cos(this.longDiff_A));
    },
    centralAngle_B() {
      return Math.acos(Math.cos(this.latRad_B) * Math.cos(this.longDiff_B));
    },
    orbitPoint() {
      return this.orbitalSlotSel * Math.PI / 180;
    },
    cnUp_A() {
      return this.opFluxDen_A - this.gainSqrM_A + parseFloat(this.gtSel_A) - this.boltzman - (10 * Math.log10(this.bwCal_A * 1000));
      //return this.gtSel_A;
    },
    cnUp_B() {
      return this.opFluxDen_B - this.gainSqrM_B + parseFloat(this.gtSel_B) - this.boltzman - (10 * Math.log10(this.bwCal_B * 1000));
    },
    powerDen_A() {
      return this.eirpUpVal_A - this.antGainValCal_A - (10 * Math.log10(this.bwCal_A * 1000));
    },
    powerDen_B() {
      return this.eirpUpVal_B - this.antGainValCal_B - (10 * Math.log10(this.bwCal_B * 1000));
    },
    avrFadePercent() {
      return (parseFloat(this.upFadePercent) + parseFloat(this.dnFadePercent)) / 2;
    },
    symbolRate_A() {
      return parseFloat(this.bwCal_A) / parseFloat(this.btA);
    },
    symbolRate_B() {
      return parseFloat(this.bwCal_B) / parseFloat(this.btB);
    },
    bwCal_A() {
      if (this.bandwidthSel === 'Information Rate') {
        this.bwCalData_A = (this.infoValue_A * this.btA) / (this.fecValue_A * this.modCodeValue_A);
        return this.bwCalData_A;
      } else {
        this.bwCalData_A = this.bwValue_A;
        return this.bwCalData_A;
      }
    },
    infoCal_A() {
      if (this.bandwidthSel === 'Information Rate') {
        this.infoCalData_A = this.infoValue_A;
        return this.infoCalData_A;
      } else {
        this.infoCalData_A = (this.bwValue_A * this.fecValue_A) / this.btA * this.modCodeValue_A;
        return this.infoCalData_A;
      }
    },
    txRate_A() {
      return this.infoCal_A / this.fecValue_A;
    },
    bwCal_B() {
      if (this.bandwidthSel === 'Information Rate') {
        this.bwCalData_B = (this.infoValue_B * this.btB) / (this.fecValue_B * this.modCodeValue_B);
        return this.bwCalData_B;
      } else {
        this.bwCalData_B = this.bwValue_B;
        return this.bwCalData_B;
      }
    },
    infoCal_B() {
      if (this.bandwidthSel === 'Information Rate') {
        this.infoCalData_B = this.infoValue_B;
        return this.infoCalData_B;
      } else {
        this.infoCalData_B = (this.bwValue_B * this.fecValue_B) / this.btB * this.modCodeValue_B;
        return this.infoCalData_B;
      }
    },
    txRate_B() {
      return this.infoCal_B / this.fecValue_B;
    },
    noiseBW_A() {
      return 10 * Math.log10(this.bwCal_A * 1000);
    },
    noiseBW_B() {
      return 10 * Math.log10(this.bwCal_B * 1000);
    },
    cnUpClear_A() {
      return parseFloat(this.opFluxDen_A) - parseFloat(this.gainSqrM_A) + parseFloat(this.gtSel_A) - parseFloat(this.boltzman) - parseFloat(this.noiseBW_A);
    },
    cnUpClear_B() {
      return parseFloat(this.opFluxDen_B) - parseFloat(this.gainSqrM_B) + parseFloat(this.gtSel_B) - parseFloat(this.boltzman) - parseFloat(this.noiseBW_B);
    },
    cnUpUpfade_A() {
      return this.cnUpClear_A - 2.07174802169227;
    },
    cnUpUpfade_B() {
      return this.cnUpClear_B - 1.88822777498377;
    },
    opFluxDenUpfade_A() {
      return this.eirpUpVal_A - this.spreadLoss_A - 2.07174802169227;
    },
    opFluxDenUpfade_B() {
      return this.eirpUpVal_B - this.spreadLoss_B - 1.88822777498377;
    },
    eirpUpfade_A() {
      return parseFloat(this.eirpdnSat_B) - (parseFloat(this.sfdAtten_A) - (this.opFluxDenUpfade_A)) + 1;
    },
    eirpUpfade_B() {
      return parseFloat(this.eirpdnSat_A) - (parseFloat(this.sfdAtten_B) - (this.opFluxDenUpfade_B)) + 1;
    },
    cnBothfade_A() {
      return this.receivePwrClear_A - 2.07174802169227 - 0.293214851232992 - this.noisePwrDnfade_A;
    },
    cnBothfade_B() {
      return this.receivePwrClear_B - 1.88822777498377 - 0.304466657795431 - this.noisePwrDnfade_B;
    },
    increaseT_A() {
      return 280 * (1 - Math.exp(-0.293214851232992 / 4.34));
    },
    increaseT_B() {
      return 280 * (1 - Math.exp(-0.304466657795431 / 4.34));
    },
    noisePwrClear_A() {
      return this.boltzman + (10 * Math.log10(this.tsys_B) + this.noiseBW_A);
    },
    noisePwrClear_B() {
      return this.boltzman + (10 * Math.log10(this.tsys_A) + this.noiseBW_B);
    },
    noisePwrDnfade_A() {
      return this.boltzman + (10 * Math.log10(this.tsys_B + this.increaseT_A) + this.noiseBW_A);
    },
    noisePwrDnfade_B() {
      return this.boltzman + (10 * Math.log10(this.tsys_A + this.increaseT_B) + this.noiseBW_B);
    },
    cnDnClear_A() {
      return this.receivePwrClear_A - this.noisePwrClear_A;
    },
    cnDnClear_B() {
      return this.receivePwrClear_B - this.noisePwrClear_B;
    },
    cnDnUpfade_A() {
      return this.receivePwrUpfade_A - this.noisePwrClear_A;
    },
    cnDnUpfade_B() {
      return this.receivePwrUpfade_B - this.noisePwrClear_B;
    },
    cnDnfadeClear_A() {
      return this.receivePwrClear_A - this.noisePwrDnfade_A - 0.293214851232992;
    },
    cnDnfadeClear_B() {
      return this.receivePwrClear_B - this.noisePwrDnfade_B - 0.304466657795431;
    },
    cnDnfadeUpfade_A() {
      return this.receivePwrUpfade_A - this.noisePwrDnfade_A - 0.293214851232992;
    },
    cnDnfadeUpfade_B() {
      return this.receivePwrUpfade_B - this.noisePwrDnfade_B - 0.304466657795431;
    },
    noisePwrTotal_A() {
      return -this.cnTotalClear_A + this.receivePwrClear_A;
    },
    noisePwrTotal_B() {
      return -this.cnTotalClear_B + this.receivePwrClear_B;
    },
    allowBw_A() {
      return parseFloat(this.bwCal_A) * (1 + parseFloat(this.GuardBand_A) / 100);
    },
    allowBw_B() {
      return parseFloat(this.bwCal_B) * (1 + parseFloat(this.GuardBand_B) / 100);
    },
    percentAllowBw_A() {
      return this.allowBw_A / 1000 * 100 / this.satBW;
    },
    percentAllowBw_B() {
      return this.allowBw_B / 1000 * 100 / this.satBW;
    },
    totalLossUp_A() {
      return parseFloat(this.iflLossUp_A) + parseFloat(this.misAntUp_A) + parseFloat(this.otherLossUp_A);
    },
    totalLossUp_B() {
      return parseFloat(this.iflLossUp_B) + parseFloat(this.misAntUp_B) + parseFloat(this.otherLossUp_B);
    },
    totalLossDn_A() {
      return parseFloat(this.misAntDn_A) + parseFloat(this.otherLossDn_A);
    },
    totalLossDn_B() {
      return parseFloat(this.misAntDn_B) + parseFloat(this.otherLossDn_B);
    },
    frqUp_A() {

      // if (this.satellite === 'Thaicom ' + vm.satellite ) {
      if (this.beams === "Standard-C") {
        return (parseFloat(this.frqDn_A) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.frqDn_A) + 3.025).toFixed(3);
      }
      // }
      // //else if (this.satellite === "Thaicom 6" || "Thaicom 7") {
      // else {
      // 	return (parseFloat(this.frqDn_A) + 2.225).toFixed(3);
      // }

    },
    frqUp_B() {

      if (this.beams === "Standard-C") {
        return (parseFloat(this.frqDn_B) + 2.225).toFixed(3);
      } else {
        return (parseFloat(this.frqDn_B) + 3.025).toFixed(3);
      }
    },
    // frqDn_A() {
    // 	return this.frqDn_options;
    // },
    // frqDn_B() {
    // 	return this.frqDn_options;
    // },

    // ciIntermod_A(){
    //
    // },

    // ciCoch_A(){
    //
    // },

    antEffVal_A() {
      return this.antEffVal;
    },
    antEffVal_B() {
      return this.antEffVal;
    },
    pwrUtil_A() {
      return (Math.pow(10, (this.opFluxDen_A - (this.allowFluxDen_A + (10 * Math.log10(this.percentAllowBw_A / 100)))) / 10)) * 100;
    },
    pwrUtil_B() {
      return (Math.pow(10, (this.opFluxDen_B - (this.allowFluxDen_B + (10 * Math.log10(this.percentAllowBw_B / 100)))) / 10)) * 100;
    },
    pwrUtil_Total() {
      return ((Math.pow(10, (-this.iboCal_A / 10))) + (Math.pow(10, (-this.iboCal_B / 10)))) / ((Math.pow(10, (-this.allowIboClear_A / 10))) + (Math.pow(10, (-this.allowIboClear_B / 10)))) * 100;
    },
    bwUtil_A() {
      return (this.allowBw_A * 100) / (this.satBW * 1000 * this.percentAllowBw_A / 100);
    },
    bwUtil_B() {
      return (this.allowBw_B * 100) / (this.satBW * 1000 * this.percentAllowBw_B / 100);
    },
    bwUtil_Total() {
      return (this.bwUtil_A * this.allowBw_A + this.bwUtil_B * this.allowBw_B) / (this.allowBw_A + this.allowBw_B);
    },
    case_A() {
      if (parseInt(100 / this.bwUtil_A) > parseInt(100 / this.pwrUtil_A)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    },
    case_B() {
      if (parseInt(100 / this.bwUtil_B) > parseInt(100 / this.pwrUtil_B)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    },
    case_Total() {
      if (parseInt(100 / this.bwUtil_Total) > parseInt(100 / this.pwrUtil_Total)) {
        return "pwr limited";
      } else {
        return "bw limited";
      }
    },
    allowIboClear_A() {
      return this.aggIbo - (10 * Math.log10(this.allowBw_A / (this.satBW * 1000)));
    },
    allowIboClear_B() {
      return this.aggIbo - (10 * Math.log10(this.allowBw_B / (this.satBW * 1000)));
    },
    iboUpfade_A() {
      return this.iboCal_A + 2.07174802169227;
    },
    iboUpfade_B() {
      return this.iboCal_B + 1.88822777498377;
    },
    oboUpfade_A() {
      return this.eirpdnSat_B - (this.opFluxDenUpfade_A + this.tpGain_A);
    },
    oboUpfade_B() {
      return this.eirpdnSat_A - (this.opFluxDenUpfade_B + this.tpGain_B);
    },
    ebeVal() {
      return this.infoValue_A / this.allowBw_A;
    },
    equivalentBWCal() {
      return this.allowBw_A * this.pwrUtil_A / 100;
    },
    pointerLo_A() {
      return this.selectedLocations_A.length - 1;
    },
    resultsVal() {
      var resultObj = {};
      this.resultsCal = [];
      resultObj.locationsName_A = this.locationsName_A;
      resultObj.locationsName_B = this.locationsName_B;
      resultObj.antSize_A = this.antSize_A;
      resultObj.antSize_B = this.antSize_B;
      if (this.bandwidthSel === "Information Rate") {
        resultObj.infoValue_A = this.infoValue_A;
      } else {
        resultObj.bwValue_A = this.bwValue_A;
      }

      resultObj.fecValue_A = this.fecValue_A[0];
      resultObj.ebNoA = this.ebNoA;
      resultObj.allowBw_A = this.allowBw_A;
      resultObj.iflLossUp_A = this.iflLossUp_A;
      resultObj.hpaPowerBoth_A = this.hpaPowerBoth_A;
      resultObj.cnTotalClear_A = this.cnTotalClear_A;
      resultObj.ebnoClear_A = this.ebnoClear_A;
      resultObj.marginClear_A = this.marginClear_A;
      resultObj.cnUpClear_A = this.cnUpClear_A;
      resultObj.cnDnClear_A = this.cnDnClear_A;
      // resultObj.rainCal = this.rainCal;
      resultObj.pwrUtil_A = this.pwrUtil_A;
      resultObj.pwrUtil_Total = this.pwrUtil_Total;
      resultObj.GuardBand_A = this.GuardBand_A;
      resultObj.btA = this.btA;
      resultObj.modCodeValue_A = this.modCodeValue_A;
      resultObj.ebeVal = this.ebeVal;
      resultObj.avrFadePercent = this.avrFadePercent;
      resultObj.equivalentBWCal = this.equivalentBWCal;

      this.resultsCal.push(resultObj);

      return this.resultsCal;
    }
  },
  methods: {
    loopCal() {
      // Loop through all parameters that have multiple selecte
      // For 1
      // For 2
      // Change parameters ex.
      // Create resultObj based on current parameters
      // Push that resultObj to resultCal
      this.resultsVal;
      // console.log("Log: " + this.resultsCal);
    },
    goalseekHPA() {
      this.hpaPowerBoth_A = 0;
      // while (this.pwrUtil_A <= this.powerUVal - 0.001 || this.pwrUtil_A >= this.powerUVal + 0.001) {
      // while (this.pwrUtil_A <= this.powerUVal - 0.01) {
      // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.01;
      // }
      while (this.pwrUtil_A <= this.powerUVal - 0.001) {
        // if (this.pwrUtil_A < this.powerUVal) {
        // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.001;
        // }
        // else {
        // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A - 0.001;
        // }
        this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.001;
      }

      // while (this.pwrUtil_A <= this.powerUVal - 0.0001) {
      // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.0001;
      // }
      while (this.pwrUtil_A <= this.powerUVal - 0.00001) {
        this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.00001;
      }
      // while (this.pwrUtil_A <= this.powerUVal - 0.000001) {
      // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.000001;
      // }
      while (this.pwrUtil_A <= this.powerUVal - 0.0000001) {
        this.hpaPowerBoth_A = this.hpaPowerBoth_A + 0.0000001;
      }
      // while (this.pwrUtil_A >= this.powerUVal + 0.000001) {
      // 	this.hpaPowerBoth_A = this.hpaPowerBoth_A - 0.000001;
      // }


      // }
      return this.hpaPowerBoth_A;
    },
    satelliteChanged() {
      this.beams = "";
      this.transponders = "";
      if (this.orbitalSlotSel === 78.5) {
        return this.adjSat = ['Apstar7', 'Express80E'];
      } else if (this.orbitalSlotSel === 119.92) {
        return this.adjSat = ['Asiasat4', 'Telkom3s'];
      } else {
        return this.adjSat = [];
      }

    },
    getTxDxContour(sat) {
      //adjName = 'txDxContour'+sat;
      if (this.orbitalSlotSel === 78.5) {
        if (sat === 'Apstar7' || sat === 'Express80E' || sat === 'ABS2' || sat === 'Potok') {
          return this.Locations_A.map(function(v) {
            return v['dxConTour' + sat];
          })
        }
      } else if (this.orbitalSlotSel === 119.92) {
        if (sat === 'Telkom3s' || sat === 'Asiasat4') {
          return this.Locations_A.map(function(v) {
            return v['dxConTour' + sat];
          })
        }
      }
    },
    getRxDxContour(sat) {

      if (this.orbitalSlotSel === 78.5) {
        if (sat === 'Apstar7' || sat === 'Express80E' || sat === 'ABS2' || sat === 'Potok') {
          return this.Locations_B.map(function(v) {
            return v['dxConTour' + sat];
          })
        }
      } else if (this.orbitalSlotSel === 119.92) {
        if (sat === 'Telkom3s' || sat === 'Asiasat4') {
          return this.Locations_B.map(function(v) {
            return v['dxConTour' + sat];
          })
        }
      }
    },
    say: function() {
      alert(this.bwCal_A)
    },
    lossValue_A() {
      if (this.antSize_A <= 3.8) {
        this.iflLossUp_A = 2;
        this.misAntUp_A = 0.2;
        this.misAntDn_A = 0.2;
      } else if (this.antSize_A > 3.8 && this.antSize_A <= 6.1) {
        this.iflLossUp_A = 2.5;
        this.misAntUp_A = 0.3;
        this.misAntDn_A = 0.3;
      } else {
        this.iflLossUp_A = 3;
        this.misAntUp_A = 0.3;
        this.misAntDn_A = 0.3;
      }
    },
    lossValue_B() {
      if (this.antSize_B <= 3.8) {
        this.iflLossUp_B = 2;
        this.misAntUp_B = 0.2;
        this.misAntDn_B = 0.2;
      } else if (this.antSize_B > 3.8 && this.antSize_B <= 6.1) {
        this.iflLossUp_B = 2.5;
        this.misAntUp_B = 0.3;
        this.misAntDn_B = 0.3;
      } else {
        this.iflLossUp_B = 3;
        this.misAntUp_B = 0.3;
        this.misAntDn_B = 0.3;
      }
    },
    antEffCal() {
      if (this.antGain === 'Manual') {
        this.antGainVal = '';
        this.antEff = 'Manual';
        this.antEffVal = (100 * (Math.pow((this.celeritas / (this.frqUp_options * 1000000000)), 2) * (Math.pow(10, (this.antGainManual / 10))))) / (Math.PI * Math.PI * (Math.pow(this.antSize_A, 2)));

      } else if (this.antEff === 'Default') {
        this.antEffVal = 60;
      } else {
        this.antEffVal = '';
      }
    },
    lnaTempCal() {
      if (this.lnaTemp === 'Default') {
        this.lnaTempVal_A = 45;
        this.lnaTempVal_B = 45;
      } else if (this.lnaTemp === 'Manual') {
        this.lnaTempVal_A = '';
        this.lnaTempVal_B = '';
      } else {
        this.lnaTempVal_A = '';
        this.lnaTempVal_B = '';
      }
    },
    rxTempCal() {
      if (this.rxTemp === 'Default') {
        this.rxTempVal_A = 35;
        this.rxTempVal_B = 35;
      } else if (this.rxTemp === 'Manual') {
        this.rxTempVal_A = '';
        this.rxTempVal_B = '';
      } else {
        this.rxTempVal_A = '';
        this.rxTempVal_B = '';
      }
    },
    infoAuto_A() {
      temp = this.bwValue_B;
      temp1 = this.infoCal_B;
      this.infoValue_A = "";
      this.bandwidthSel = 'Information Rate';
      this.bwValue_B = temp;
      this.infoValue_B = temp1;
      this.bwValue_A = "";
    },
    infoAuto_B() {
      temp = this.bwValue_A;
      temp1 = this.infoCal_A;
      this.infoValue_B = "";
      this.bandwidthSel = 'Information Rate';
      this.bwValue_A = temp;
      this.infoValue_A = temp1;
      //this.bwValue_A = "";
      this.bwValue_B = "";
    },
    bwAuto_A() {
      temp = this.bwValue_B;
      temp1 = this.infoCal_B;
      this.bwValue_A = "";
      this.bandwidthSel = 'Bandwidth';
      this.bwValue_B = temp;
      this.infoCal_B = temp1;
      this.infoValue_A = "";
    },
    bwAuto_B() {
      temp = this.bwValue_A;
      temp1 = this.infoCal_A;
      this.bwValue_B = "";
      this.bandwidthSel = 'Bandwidth';
      this.bwValue_A = temp;
      this.infoCal_A = temp1;
      this.infoValue_B = "";
    },
    modChange_A() {
      if (this.modCodeA === 'BPSK') {
        return this.modCodeValue_A = 1;
      } else if (this.modCodeA === 'QPSK') {
        return this.modCodeValue_A = 2;
      } else if (this.modCodeA === '8PSK') {
        return this.modCodeValue_A = 3;
      } else if (this.modCodeA === '16APSK') {
        return this.modCodeValue_A = 4;
      } else {
        return this.modCodeValue_A;
      }
    },
    modChange_B() {
      if (this.modCodeB === 'BPSK') {
        return this.modCodeValue_B = 1;
      } else if (this.modCodeB === 'QPSK') {
        return this.modCodeValue_B = 2;
      } else if (this.modCodeB === '8PSK') {
        return this.modCodeValue_B = 3;
      } else if (this.modCodeB === '16APSK') {
        return this.modCodeValue_B = 4;
      } else {
        return this.modCodeValue_B;
      }
    },
    frqSel() {
      this.frqDn_A = this.frqDn_options;
      this.frqDn_B = this.frqDn_options;
      //return this.frqDn_A;
    }

  }
}
</script>
<style>
#template {
  margin-left: 15px;
  padding: 4px;
  border: black solid;
  border-radius: 8px;
  background-color: #337AB7;
  color: white;
}

,

#template1 {

  padding: 4px;
  border: black solid;
  border-radius: 8px;
  background-color: #337AB7;
  color: white;
}
</style>
