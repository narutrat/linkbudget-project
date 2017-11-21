<template>
<!-- <div> -->
<div>
  <div class="row" style="margin-left:10px; text-align:center; border:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Design Parameter</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
        <!-- <div class="col-sm-2">{{this.hpaPowerBothA}}</div> -->

      </div>

      <div class="row" style="padding:10px">
        <div class="col-sm-4" style="text-align:left">
          <div class="row">HPA Backoff per Carrier</div>
          <div class="row">Occupied Bandwidth</div>
          <div class="row" style="margin-top:5px">Guard Band</div>
          <div class="row" style="margin-top:8px">Allowcated Bandwidth</div>
          <div class="row">Aggregrated HPA BOo</div>
          <div class="row">Number of MCPC Carrier</div>
        </div>

        <div class="col-sm-2" style="text-align:left"></div>

        <DesignParam @updateBW="dataDesignParamUpdateA" :bandwidthData="dataDesignParamA"></DesignParam>

        <DesignParam @updateBW="dataDesignParamUpdateB" :bandwidthData="dataDesignParamB"></DesignParam>

        <div class="col-sm-2" style="text-align:center">
          <div class="row">dB</div>
          <div class="row">kHz</div>
          <div class="row" style="margin-top:5px">%</div>
          <div class="row" style="margin-top:8px">kHz</div>
          <div class="row">dB</div>
          <div class="row"></div>
        </div>
      </div>
    </div>

    <div class="col-sm-6">

      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Utilization</div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
        <div class="col-sm-2">Total</div>
        <div class="col-sm-2"></div>
      </div>

      <UtilParam @updateHPA="dataUtilParamUpdate" :utilParam="dataUtilParam" style="padding:10px"></UtilParam>

    </div>



  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="text-align:left; border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        Satellite Design Parameter
      </div>

      <SatDesignParam @updateSatDesignData="dataSatDesignParamUpdate" :satDesign="dataSatDesignParam"></SatDesignParam>

    </div>

    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Carrier Operating Point</div>
        <div class="col-sm-2">A to B<br/>(Cl. Sky)</div>
        <div class="col-sm-2">A to B<br/>(Up fade)</div>
        <div class="col-sm-2">B to A<br/>(Cl. Sky)</div>
        <div class="col-sm-2">B to A<br/>(Up fade)</div>
      </div>

      <div class="col-sm-4" style="text-align:left; margin-top:10px">
        <div class="row">Allowable IBO / Carrier (dB)</div>
        <div class="row">IBO / Carrier (dB)</div>
        <div class="row">OBO / Carrier (dB)</div>
        <div class="row">Transponder Gain (dBm^2)</div>
      </div>
      <CarrierOperation @updateCarrierOperationData="dataCarrierOperationUpdateA" :carrierOperation="dataCarrierOperationA"></CarrierOperation>
      <CarrierOperation @updateCarrierOperationData="dataCarrierOperationUpdateB" :carrierOperation="dataCarrierOperationB"></CarrierOperation>
    </div>

  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Adjustable Parameters</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
      </div>

      <AdjustableLinkAva @updateAdjustableLinkAva="dataAdjustableLinkAva" :adjustableLinkAva="dataAdjustbleLinkAva"></AdjustableLinkAva>
      <AdjustableParam @updateAdjustableParamData="dataAdjustableParamUpdateA" :adjustableParam="dataAdjustbleParamA"></AdjustableParam>
      <AdjustableParam @updateAdjustableParamData="dataAdjustableParamUpdateB" :adjustableParam="dataAdjustbleParamB"></AdjustableParam>

      <div class="col-sm-2">
        <div class="row">dB (ITU-R 618-6, 99)</div>
        <div class="row">dB (ITU-R 618-6, 99)</div>
        <div class="row">dBW/m^2</div>
        <div class="row">dBW/m^2</div>
        <div class="row">Watts</div>
        <div class="row" style="margin-top:10px">Watts</div>
      </div>

    </div>

    <div class="col-sm-6">
      <div class="row">
        <AggBackoff @AggBackoffSelected="dataAggBackoffUpdate" :aggBackoff="dataAggBackoff"></AggBackoff>
      </div>

      <div class="row" style="border-bottom:solid 2px; border-top:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Frequency Assigned</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
        <div class="col-sm-2">Polarization</div>
      </div>

      <div class="row">
        <FreqAssigned @updateFrq="dataFreqUpdate" :freqAssigned="dataFreqAssigned"></FreqAssigned>
      </div>

    </div>
  </div>

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

      <div class="col-sm-4" style="text-align:left">
        <div class="row">C/I Up Adj. Sat (dB) (Key-in)</div>
        <div class="row">C/N (Uplink) (dB)</div>
        <div class="row">C/N (Downlink) (dB)</div>
        <div class="row">C/I (Intermodulation) (dB)</div>
        <div class="row">C/I (Co-Channel 20+ Xpol Iso.25) (dB)</div>
        <div class="row">C/I dn Adj. Sat (dB) (Key-in)</div>
        <div class="row">C/N TOTAL</div>
        <div class="row">Eb/No</div>
        <div class="row">Margin</div>
      </div>

      <CalculateCN @updateCalculateCN="dataCalculateCNUpdateAClear" :calculateCN="dataCalculateCNaClear"></CalculateCN>
      <CalculateCN :calculateCN="dataCalculateCNaUpfade"></CalculateCN>
      <CalculateCN :calculateCN="dataCalculateCNaDownfade"></CalculateCN>
      <CalculateCN @updateCalculateCN="dataCalculateCNUpdateABoth" :calculateCN="dataCalculateCNaBothfade"></CalculateCN>

    </div>
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

      <div class="col-sm-4" style="text-align:left">
        <div class="row">C/I Up Adj. Sat (dB) (Key-in)</div>
        <div class="row">C/N (Uplink) (dB)</div>
        <div class="row">C/N (Downlink) (dB)</div>
        <div class="row">C/I (Intermodulation) (dB)</div>
        <div class="row">C/I (Co-Channel 20+ Xpol Iso.25) (dB)</div>
        <div class="row">C/I dn Adj. Sat (dB) (Key-in)</div>
        <div class="row">C/N TOTAL</div>
        <div class="row">Eb/No</div>
        <div class="row">Margin</div>
      </div>

      <CalculateCN @updateCalculateCN="dataCalculateCNUpdateBClear" :calculateCN="dataCalculateCNbClear"></CalculateCN>
      <CalculateCN :calculateCN="dataCalculateCNbUpfade"></CalculateCN>
      <CalculateCN :calculateCN="dataCalculateCNbDownfade"></CalculateCN>
      <CalculateCN @updateCalculateCN="dataCalculateCNUpdateBBoth" :calculateCN="dataCalculateCNbBothfade"></CalculateCN>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Carrier Information</div>
        <!-- <div class="col-sm-2"></div> -->
        <div class="col-sm-3">A to B</div>
        <div class="col-sm-3">B to A</div>
        <div class="col-sm-2"></div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row" style="margin-top:8px">mod type & fec</div>
        <div class="row" style="margin-top:10px">info. rate (before FEC)</div>
        <div class="row" style="margin-top:10px">FEC Rate</div>
        <div class="row" style="margin-top:15px">Transmission Rate</div>
        <div class="row" style="margin-top:10px">BT Product</div>
        <div class="row" style="margin-top:10px">Threshold Eb/No (info. rate)</div>
        <div class="row" style="margin-top:10px">Symbol Rate</div>
        <div class="row" style="margin-top:5px">Occupied BW</div>
      </div>

      <!-- <div class="col-sm-2" style="text-align:center"></div> -->

      <div class="col-sm-3" style="text-align:center">
        <CarrierInfo @updateCarrierInfo="dataCarrierInfoUpdateA" :carrierInfo="dataCarrierInfoA"></CarrierInfo>
      </div>
      <div class="col-sm-3" style="text-align:center">
        <CarrierInfo @updateCarrierInfo="dataCarrierInfoUpdateB" :carrierInfo="dataCarrierInfoB"></CarrierInfo>
      </div>

      <div class="col-sm-2" style="text-align:center">
        <!-- <div class="row"></div> -->
        <div class="row" style="margin-top:42px">kbps</div>
        <!-- <div class="row"></div> -->
        <div class="row" style="margin-top:10px">kbps</div>
        <!-- <div class="row"></div> -->
        <div class="row" style="margin-top:83px">dB (Operating)</div>
        <div class="row" style="margin-top:12px">kbps</div>
        <div class="row" style="margin-top:5px">kHz</div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Satellite Information</div>
      </div>

      <SatInfo @updateSatInfo="dataSatInfoUpdate" :satInfo="dataSatInfo"></SatInfo>

      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-6"></div>
        <div class="col-sm-2">At ES A</div>
        <div class="col-sm-2">At ES B</div>
      </div>

      <div class="row">
        <div class="col-sm-4" style="margin-top:5px; text-align:left">
          <div class="row" style="margin-left:1px; margin-top:3px">G/T</div>
          <div class="row" style="margin-left:1px; margin-top:12px">SFD at max attenuation</div>
          <div class="row" style="margin-left:1px">Satellite BW</div>
          <div class="row" style="margin-left:1px; margin-top:10px">Satellite EIRP</div>
        </div>

        <div class="col-sm-2"></div>

        <div class="col-sm-2" style="margin-top:5px">
          <SatInfo_2 @updateSatInfo2="dataSatInfo2UpdateA" :satInfo_2="dataSatInfo_2A"></SatInfo_2>
        </div>

        <div class="col-sm-2" style="margin-top:5px">
          <SatInfo_2 @updateSatInfo2="dataSatInfo2UpdateB" :satInfo_2="dataSatInfo_2B"></SatInfo_2>
        </div>

        <div class="col-sm-2" style="margin-top:5px; text-align:center">
          <div class="row" style="margin-top:3px">dBi/K</div>
          <div class="row" style="margin-top:12px">dBW/m^2</div>
          <div class="row"></div>
          <div class="row" style="margin-top:35px">dBW</div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Earth Station A</div>
      </div>
      <div>
        <LocationInfo @updateLocationInfo="dataLocationInfoAUpdate" :selLocations="dataLocationInfoA"></LocationInfo>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Earth Station B</div>
      </div>
      <div>
        <LocationInfo @updateLocationInfo="dataLocationInfoBUpdate" :selLocations="dataLocationInfoB"></LocationInfo>
        <!-- <LocationInfo @locationObjSel="selectLocationB = $event" @updateLocationInfo="dataLocationInfoUpdate" :selLocations="dataLocationInfo.selectedLocationsB" :locationSelInfo="dataLocationInfo"></LocationInfo> -->
        <!-- {{selectLocationB}} -->
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Transmitted ES Loss</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"> A to B </div>
        <div class="col-sm-2"> B to A</div>
        <div class="col-sm-2"></div>
      </div>

      <div class="col-sm-6" style="text-align:left">
        <div class="row" style="margin-top:6px">WG and Feed Loss</div>
        <div class="row" style="margin-top:6px">Mispointing Loss</div>
        <div class="row" style="margin-top:6px">Other Loss (XPD & Axial Ratio)</div>
        <div class="row" style="margin-top:6px">Total Up ES Loss</div>
      </div>
      <!-- <div class="col-sm-2"></div> -->
      <div>
        <TransmitLoss @updateTransmitLoss="dataTransmitLossUpdateA" :txLoss="dataTransmitLossA"></TransmitLoss>
      </div>
      <div>
        <TransmitLoss @updateTransmitLoss="dataTransmitLossUpdateB" :txLoss="dataTransmitLossB"></TransmitLoss>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4">Received ES Loss</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"> A to B </div>
        <div class="col-sm-2"> B to A</div>
        <div class="col-sm-2"></div>
      </div>

      <div class="col-sm-6" style="text-align:left">
        <div class="row"></div>
        <div class="row" style="margin-top:6px">Mispointing Loss</div>
        <div class="row" style="margin-top:6px">Other Loss (XPD & Axial Ratio)</div>
        <div class="row" style="margin-top:6px">Total Up ES Loss</div>
      </div>
      <!-- <div class="col-sm-2"></div> -->
      <div>
        <ReceiveLoss @updateReceiveLoss="dataReceiveLossUpdateA" :rxLoss="dataReceiveLossA"></ReceiveLoss>
      </div>
      <div>
        <ReceiveLoss @updateReceiveLoss="dataReceiveLossUpdateB" :rxLoss="dataReceiveLossB"></ReceiveLoss>
      </div>
    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12" style="text-align:left">Earth Station A</div>
      </div>
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12" style="text-align:left">Azimuth-Elevation-Slant Range Calculation</div>
      </div>
      <div>
        <AzElRange @updateAzElRange="dataAzElRangeUpdateA" :azElRange="dataAzElRangeA"></AzElRange>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Earth Station B</div>
      </div>
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12" style="text-align:left">Azimuth-Elevation-Slant Range Calculation</div>
      </div>
      <div>
        <AzElRange @updateAzElRange="dataAzElRangeUpdateB" :azElRange="dataAzElRangeB"></AzElRange>
      </div>

    </div>
  </div>


  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-6" style="text-align:left">Uplink Loss Calculation</div>
        <div class="col-sm-2"> A to B </div>
        <div class="col-sm-2"> B to A</div>
      </div>

      <div class="col-sm-6" style="text-align:left">
        <div class="row">Xmitted EIRP</div>
        <div class="row">Power Density</div>
        <div class="row" style="margin-top:4px">Atmospheric Absorption</div>
        <div class="row" style="margin-top:4px">Spreading Loss & Atmospheric Absorption</div>
        <div class="row">Operating Flux Density</div>
        <div class="row">Gain of square meter</div>
      </div>

      <!-- <div class="col-sm-2"></div> -->

      <div>
        <UplinkLoss @updateUplinkLoss="dataUplinkLossUpdateA" :uplinkLoss="dataUplinkLossA"></UplinkLoss>
      </div>

      <div>
        <UplinkLoss @updateUplinkLoss="dataUplinkLossUpdateB" :uplinkLoss="dataUplinkLossB"></UplinkLoss>
      </div>

    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Downlink Loss Calculation</div>
        <div class="col-sm-2"> A to B<br />(Cl. Sky) </div>
        <div class="col-sm-2"> A to B<br />(Up fade) </div>
        <div class="col-sm-2"> B to A<br />(Cl. Sky) </div>
        <div class="col-sm-2"> B to A<br />(Up fade) </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Sat. Xmitted EIRP (dBW)</div>
        <div class="row">Path Loss (dB)</div>
        <div class="row">Atmospheric Absorption (dB)</div>
        <div class="row">Path Loss & Atmospheric Absorption (dB)</div>
        <div class="row">Receive Power (dBW)</div>
        <div class="row">Sat. Xmitted EIRPdn Density (dBW/Hz)</div>
      </div>

      <div>
        <DownlinkLoss @updateDownlinkLoss="dataDownlinkLossUpdateA_Clear" :downlinkLoss="dataDownlinkLossA_Clear"></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss @updateDownlinkLoss="dataDownlinkLossUpdateA_Upfade" :downlinkLoss="dataDownlinkLossA_Upfade"></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss @updateDownlinkLoss="dataDownlinkLossUpdateB_Clear" :downlinkLoss="dataDownlinkLossB_Clear"></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss @updateDownlinkLoss="dataDownlinkLossUpdateB_Upfade" :downlinkLoss="dataDownlinkLossB_Upfade"></DownlinkLoss>
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12" style="text-align:left">Uplink Noise Budget</div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Boltzman's Constant</div>
        <div class="row">Noise BW</div>
        <div class="row">C/N Up Cl. SKY</div>
        <div class="row">C/N Up (Upfade)</div>
        <div class="row">Operating Flux Density (Upfade)</div>
        <div class="row">Sat.Xmit EIRP (Upfade)</div>
        <div class="row">C/Ndo (Both fade)</div>
      </div>

      <div class="col-sm-2"></div>

      <div>
        <UplinkNoise @updateUplinkNoise="dataUplinkNoiseUpdateA" :uplinkNoise="dataUplinkNoiseA"></UplinkNoise>
        <!-- <UplinkNoise :uplinkNoise="dataUplinkNoiseA"></UplinkNoise> -->
      </div>

      <div>
        <UplinkNoise @updateUplinkNoise="dataUplinkNoiseUpdateB" :uplinkNoise="dataUplinkNoiseB"></UplinkNoise>
        <!-- <UplinkNoise :uplinkNoise="dataUplinkNoiseB"></UplinkNoise> -->
      </div>

      <div class="col-sm-2" style="text-align:left">
        <div class="row">dBW/K-Hz</div>
        <!-- <div class="row"></div> -->
        <div class="row" style="margin-top:25px">dBHz</div>
        <div class="row">dBH</div>
        <div class="row">dBW/m^2</div>
        <div class="row">dB</div>
        <div class="row">dB</div>
      </div>

    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Downlink Noise Budget</div>
        <div class="col-sm-2"> A to B<br />(Cl. Sky) </div>
        <div class="col-sm-2"> A to B<br />(Up fade) </div>
        <div class="col-sm-2"> B to A<br />(Cl. Sky) </div>
        <div class="col-sm-2"> B to A<br />(Up fade) </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Boltzman's Constant</div>
        <div class="row">Increased T (Rain) (Kelvins)</div>
        <div class="row">Noise BW (dBHz)</div>
        <div class="row">Noise Power (Cl. Sky) (dBW)</div>
        <div class="row">Noise Power Downfade (dBW)</div>
        <div class="row">C/Ndo (Downlink Cl. Sky) (dB)</div>
        <div class="row">C/Ndo Downfade (dB)</div>
        <div class="row">Noise Power Total (Cl. Sky) (dBW)</div>
      </div>

      <div>
        <DownlinkNoise @updateDownlinkNoise="dataDownlinkNoiseUpdateA_Clear" :downlinkNoise="dataDownlinkNoiseA_Clear"></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise @updateDownlinkNoise="dataDownlinkNoiseUpdateA_Upfade" :downlinkNoise="dataDownlinkNoiseA_Upfade"></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise @updateDownlinkNoise="dataDownlinkNoiseUpdateB_Clear" :downlinkNoise="dataDownlinkNoiseB_Clear"></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise @updateDownlinkNoise="dataDownlinkNoiseUpdateB_Upfade" :downlinkNoise="dataDownlinkNoiseB_Upfade"></DownlinkNoise>
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-6"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
      </div>


      <div class="col-sm-4" style="text-align:left">
        <div class="row">Key-In C/I adj. Up</div>
        <div class="row">Key-In C/I adj. Down</div>
      </div>
      <div class="col-sm-2"></div>

      <div>
        <!-- <CIadj @updatedataCiAdj="dataCiAdjUpUpdate" :ciAdj="dataCiAdjUp"></CIadj> -->
        <CIadj :ciAdj="dataCiAdjA"></CIadj>
      </div>

      <div>
        <!-- <CIadj @updatedataCiAdj="dataCiAdjDnUpdate" :ciAdj="dataCiAdjDn"></CIadj> -->
        <CIadj :ciAdj="dataCiAdjB"></CIadj>
      </div>

    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-6"></div>
        <div class="col-sm-2">Utilization</div>
        <div class="col-sm-1"></div>
        <div class="col-sm-2">Bandwidth</div>
        <div class="col-sm-1"></div>
      </div>

      <div class="col-sm-6" style="text-align:left">
        <div class="row">EIRP down @ Nonthaburi (A->B)</div>
        <div class="row">EIRP down @ Nonthaburi (B->A)</div>
      </div>

      <div>
        <EirpDn :eirpDown="dataEirpDown"></EirpDn>
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="margin-right:-2px">

      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">U/L Adj Sat Interference</div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-6">A->B</div>
            <div class="col-sm-6">B->A</div>
          </div>
        </div>
      </div>

      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4"></div>
        <div class="col-sm-8">
          <div class="row" style="font-size:14px; margin-bottom:2px;">
            <AdjName :adjName="dataAdjName"></AdjName>
            <AdjName :adjName="dataAdjName"></AdjName>
          </div>
        </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Topocentric Angle</div>
        <div class="row" style="margin-top:6px">Uplink Pdens (dBW/Hz)</div>
        <div class="row" style="margin-top:6px">Assumed Tx Intf. E/S in THAICOM G/T contour</div>
        <div class="row">Polarization Improvement</div>
        <div class="row" style="margin-top:8px">U/L Slidelobe improvement from 29-25log</div>
        <div class="row">C/I Uplink</div>
        <div class="row">C/I Uplink Total</div>
      </div>

      <div>
        <UplinkInt @updateUplinkInt="dataUplinkIntUpdateA1" :uplinkInt="dataUplinkIntA1"></UplinkInt>
        <UplinkInt @updateUplinkInt="dataUplinkIntUpdateA2" :uplinkInt="dataUplinkIntA2"></UplinkInt>
        <UplinkInt @updateUplinkInt="dataUplinkIntUpdateB1" :uplinkInt="dataUplinkIntB1"></UplinkInt>
        <UplinkInt @updateUplinkInt="dataUplinkIntUpdateB2" :uplinkInt="dataUplinkIntB2"></UplinkInt>

      </div>
      <div>
        <CiTotal @updateCiTotal="dataCiTotalUpUpdateA" :ciTotal="dataCiTotalUpA"></CiTotal>
        <CiTotal @updateCiTotal="dataCiTotalUpUpdateB" :ciTotal="dataCiTotalUpB"></CiTotal>
      </div>

    </div>
    <div class="col-sm-6" style="border-left:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">D/L Adj Sat Interference</div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-6">A->B</div>
            <div class="col-sm-6">B->A</div>
          </div>
        </div>
      </div>


      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4"></div>
        <div class="col-sm-8">
          <div class="row" style="font-size:14px; margin-bottom:2px;">
            <AdjName :adjName="dataAdjName"></AdjName>
            <AdjName :adjName="dataAdjName"></AdjName>
          </div>
        </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Topocentric Angle</div>
        <div class="row" style="margin-top:6px">Downlink EIRP density @peak (dBW/Hz)</div>
        <div class="row" style="margin-top:6px">GRR from Antenna Pattern (BO.1213)</div>
        <div class="row" style="margin-top:2px">Polarization Improvement</div>
        <div class="row" style="margin-top:12px">TC-5 Rx. E/S in Adj Sat D/L EIRP dx contour</div>
        <div class="row">C/I Downlink</div>
        <div class="row">C/I Downlink Total</div>
      </div>

      <div>
        <DownlinkInt @updateDownlinkInt="dataDownlinkIntUpdateA1" :downlinkInt="dataDownlinkIntA1"></DownlinkInt>
        <DownlinkInt @updateDownlinkInt="dataDownlinkIntUpdateA2" :downlinkInt="dataDownlinkIntA2"></DownlinkInt>
        <DownlinkInt @updateDownlinkInt="dataDownlinkIntUpdateB1" :downlinkInt="dataDownlinkIntB1"></DownlinkInt>
        <DownlinkInt @updateDownlinkInt="dataDownlinkIntUpdateB2" :downlinkInt="dataDownlinkIntB2"></DownlinkInt>
      </div>
      <div>
        <CiTotal @updateCiTotal="dataCiTotalDnUpdateA" :ciTotal="dataCiTotalDnA"></CiTotal>
        <CiTotal @updateCiTotal="dataCiTotalDnUpdateB" :ciTotal="dataCiTotalDnB"></CiTotal>
      </div>

    </div>
    <!-- {{this.paraData.selectedModCodeA}} -->


  </div>

</div>
</template>

<script>
import DesignParam from './DesignParam'
import UtilParam from './UtilParam'
import SatDesignParam from './SatDesignParam'
import CarrierOperation from './CarrierOperation'
import AdjustableLinkAva from './AdjustableLinkAva'
import AdjustableParam from './AdjustableParam'
import AggBackoff from './AggBackoff'
import FreqAssigned from './FreqAssigned'
import CalculateCN from './CalculateCN'
import CarrierInfo from './CarrierInfo'
import SatInfo from './SatInfo'
import SatInfo_2 from './SatInfo_2'
import LocationInfo from './LocationInfo'
import TransmitLoss from './TransmitLoss'
import ReceiveLoss from './ReceiveLoss'
import AzElRange from './AzElRange'
import UplinkLoss from './UplinkLoss'
import DownlinkLoss from './DownlinkLoss'
import UplinkNoise from './UplinkNoise'
import DownlinkNoise from './DownlinkNoise'
import CIadj from './CIadj'
import EirpDn from './EirpDn'
import AdjName from './AdjName'
import UplinkInt from './UplinkInt'
import DownlinkInt from './DownlinkInt'
import CiTotal from './CiTotal'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  props: ['paraData'],
  data() {
    return {

      bandwidthA: '',
      bandwidthB: '',
      allowBWA: '',
      allowBWB: '',
      numMCPC: '',
      aggHpaBoo: '',
      atten: '',
      antSizeA: '',
      antSizeB: '',
      allowIboClearA: '',
      iboCalA: '',
      oboCalA: '',
      tpGainA: '',
      iboUpfadeA: '',
      oboUpfadeA: '',
      allowIboClearB: '',
      iboCalB: '',
      oboCalB: '',
      tpGainB: '',
      iboUpfadeB: '',
      oboUpfadeB: '',
      sfdAttenA: '',
      allowFluxDenA: '',
      hpaPowerBothA: '',
      hpaMaxA: '',
      sfdAttenB: '',
      allowFluxDenB: '',
      hpaPowerBothB: '',
      hpaMaxB: '',
      aggBackoff: '',
      frqUp_A: '',
      frqUp_B: '',
      frqDn_A: '',
      frqDn_B: '',
      cnTotalA: '',
      cnTotalB: '',
      carrierInfoA: '',
      carrierInfoB: '',
      altitude: '',
      earthR: '',
      orbitPoint: '',
      sfdMaxA: '',
      gtSelA: '',
      eirpDnA: '',
      sfdMaxB: '',
      gtSelB: '',
      eirpDnB: '',
      locationInfoA: '',
      locationInfoB: '',
      totalLossUpA: '',
      totalLossUpB: '',
      totalLossDnA: '',
      totalLossDnB: '',
      longDiffA: '',
      centralAngleA: '',
      slantRangeA: '',
      azAngleA: '',
      elAngleA: '',
      longDiffB: '',
      centralAngleB: '',
      slantRangeB: '',
      azAngleB: '',
      elAngleB: '',
      eirpUpValA: '',
      powerDenA: '',
      atmosA: '',
      spreadLossA: '',
      opFluxDenA: '',
      gainSqrMA: '',
      eirpUpValB: '',
      powerDenB: '',
      atmosB: '',
      spreadLossB: '',
      opFluxDenB: '',
      gainSqrMB: '',
      eirpDnClearA_Clear: '',
      pathLossA_Clear: '',
      atmosA_Clear: '',
      pathLossAtmosA_Clear: '',
      receivePwrClearA_Clear: '',
      eirpDnDenClearA_Clear: '',
      eirpDnClearA_Upfade: '',
      receivePwrClearA_Upfade: '',
      eirpDnDenClearA_Upfade: '',
      eirpDnClearB_Clear: '',
      pathLossB_Clear: '',
      atmosB_Clear: '',
      pathLossAtmosB_Clear: '',
      receivePwrClearB_Clear: '',
      eirpDnDenClearB_Clear: '',
      eirpDnClearB_Upfade: '',
      receivePwrClearB_Upfade: '',
      eirpDnDenClearB_Upfade: '',
      boltzman: '',
      noiseBWA: '',
      cnUpClearA: '',
      cnUpUpfadeA: '',
      opFluxDenUpfadeA: '',
      eirpUpfadeA: '',
      cnBothfadeA: '',
      noiseBWB: '',
      cnUpClearB: '',
      cnUpUpfadeB: '',
      opFluxDenUpfadeB: '',
      eirpUpfadeB: '',
      cnBothfadeB: '',
      increaseTA_Clear: '',
      noisePwrClearA_Clear: '',
      noisePwrDnfadeA_Clear: '',
      cnDnClearA_Clear: '',
      cnDnfadeClearA_Clear: '',
      noisePwrTotalA_Clear: '',
      cnDnClearA_Upfade: '',
      cnDnfadeClearA_Upfade: '',
      increaseTB_Clear: '',
      noisePwrClearB_Clear: '',
      noisePwrDnfadeB_Clear: '',
      cnDnClearB_Clear: '',
      cnDnfadeClearB_Clear: '',
      noisePwrTotalB_Clear: '',
      cnDnClearB_Upfade: '',
      cnDnfadeClearB_Upfade: '',
      ciUpA1: '',
      ciUpA2: '',
      ciTotalUpA: '',
      ciUpB1: '',
      ciUpB2: '',
      ciTotalUpB: '',
      ciDnA1: '',
      ciDnA2: '',
      ciTotalDnA: '',
      ciDnB1: '',
      ciDnB2: '',
      ciTotalDnB: '',
      selectedModCodeA: '',
      upFadePercent: '',
      dnFadePercent: '',
      pwrUtilA: '',
      pwrUtilB: '',

    }
  },
  components: {
    DesignParam,
    UtilParam,
    SatDesignParam,
    CarrierOperation,
    AdjustableLinkAva,
    AdjustableParam,
    AggBackoff,
    FreqAssigned,
    CalculateCN,
    CarrierInfo,
    SatInfo,
    SatInfo_2,
    LocationInfo,
    TransmitLoss,
    ReceiveLoss,
    AzElRange,
    UplinkLoss,
    DownlinkLoss,
    UplinkNoise,
    DownlinkNoise,
    CIadj,
    EirpDn,
    AdjName,
    UplinkInt,
    DownlinkInt,
    CiTotal,
  },
  methods: {
    /////////////////////////////
    // Receive Data from Child //
    /////////////////////////////

    /////////////// DesignParam ///////////////
    dataDesignParamUpdateA(value) {
      this.bandwidthA = value.bandwidth;
      this.guardBandValA = value.guardBandVal;
      this.allowBWA = value.allowBW;
      this.numMCPC = value.numMCPC;
      this.aggHpaBoo = value.aggHpaBoo;
      this.$emit('calDesignParamA', {
        bandwidthA: this.bandwidthA,
        allowBWA: this.allowBWA,
        guardBandValA: this.guardBandValA,
        numMCPC: this.numMCPC,
        aggHpaBoo: this.aggHpaBoo,
      })
    },
    dataDesignParamUpdateB(value) {
      this.bandwidthB = value.bandwidth;
      this.guardBandValB = value.guardBandVal;
      this.allowBWB = value.allowBW;
      // this.numMCPC = value.numMCPC;
      // this.aggHpaBoo = value.aggHpaBoo;
      this.$emit('calDesignParamB', {
        bandwidthB: this.bandwidthB,
        guardBandValB: this.guardBandValB,
        allowBWB: this.allowBWB,
      })
    },
    /////////////// Utilization ///////////////
    dataUtilParamUpdate(value) {
      this.pwrUtilA = value.pwrUtilA;
      this.pwrUtilB = value.pwrUtilB;
      this.$emit('calUtilParam', {
        pwrUtilA: this.pwrUtilA,
        pwrUtilB: this.pwrUtilB,
      })
      // this.hpaPowerBothB = value.hpaPowerBoth;
    },
    /////////////// SatDesignParam ///////////////
    dataSatDesignParamUpdate(value) {
      this.atten = value.atten;
      this.antSizeA = value.antSizeA;
      this.antSizeB = value.antSizeB;
      this.$emit('calAnt', {
        atten: this.atten,
        antSizeA: this.antSizeA,
        antSizeB: this.antSizeB,
      })
    },
    /////////////// Carrier Operating Point ///////////////
    dataCarrierOperationUpdateA(value) {
      this.allowIboClearA = value.allowIboClear;
      this.iboCalA = value.iboCal;
      this.oboCalA = value.oboCal;
      this.tpGainA = value.tpGain;
      this.iboUpfadeA = value.iboUpfade;
      this.oboUpfadeA = value.oboUpfade;
    },
    dataCarrierOperationUpdateB(value) {
      this.allowIboClearB = value.allowIboClear;
      this.iboCalB = value.iboCal;
      this.oboCalB = value.oboCal;
      this.tpGainB = value.tpGain;
      this.iboUpfadeB = value.iboUpfade;
      this.oboUpfadeB = value.oboUpfade;
    },
    /////////////// AdjustableParam ///////////////
    dataAdjustableLinkAva(value) {
      this.upFadePercent = value.upFadePercent;
      this.dnFadePercent = value.dnFadePercent;
      this.avrFadePercent = value.avrFadePercent;
      this.$emit('calLinkAva', {
        upFadePercent: this.upFadePercent,
        dnFadePercent: this.dnFadePercent,
        avrFadePercent: this.avrFadePercent
      })
    },
    dataAdjustableParamUpdateA(value) {
      this.sfdAttenA = value.sfdAtten;
      this.allowFluxDenA = value.allowFluxDen;
      this.hpaPowerBothA = value.hpaPowerBoth;
      this.hpaMaxA = value.hpaMax;
      this.rainUpA = value.rainUp;
      this.rainDownA = value.rainDown;
      this.$emit('calAdjustableParamA', {
        hpaPowerBothA: this.hpaPowerBothA,
      })
    },
    dataAdjustableParamUpdateB(value) {
      this.sfdAttenB = value.sfdAtten;
      this.allowFluxDenB = value.allowFluxDen;
      this.hpaPowerBothB = value.hpaPowerBoth;
      this.hpaMaxB = value.hpaMax;
      this.rainUpB = value.rainUp;
      this.rainDownB = value.rainDown;
      this.$emit('calAdjustableParamB', {
        hpaPowerBothB: this.hpaPowerBothB,
      })
    },
    /////////////// AggBackoff ///////////////
    dataAggBackoffUpdate(value) {
      this.aggBackoff = value;
    },
    /////////////// Frequency Assigned ///////////////
    dataFreqUpdate(value) {
      this.frqUp_A = value.frqUpA;
      this.frqUp_B = value.frqUpB;
      this.frqDn_A = value.frqDnA;
      this.frqDn_B = value.frqDnB;
      this.$emit('calFreq', {
        frqUp_A: this.frqUp_A,
        frqUp_B: this.frqUp_B,
        frqDn_A: this.frqDn_A,
        frqDn_B: this.frqDn_B,
      })
    },
    /////////////// CalculateCN ///////////////
    dataCalculateCNUpdateAClear(value) {
      this.cnTotalA = value.cnTotal;
      this.ciUpTotalA = value.ciUpTotal;
      this.cnUpA = value.cnUp;
      this.cnDnA = value.cnDn;
      this.interModA = value.interMod;
      this.ciCochA = value.ciCoch;
      this.ciAdjA = value.ciAdj;
      this.ebNoA = value.ebNo;
      this.marginA = value.margin;
      this.$emit('calCNA', {
        ciUpTotalA: this.ciUpTotalA,
        cnUpA: this.cnUpA,
        cnDnA: this.cnDnA,
        interModA: this.interModA,
        ciCochA: this.ciCochA,
        ciAdjA: this.ciAdjA,
        cnTotalA: this.cnTotalA,
        ebNoA: this.ebNoA,
        marginA: this.marginA,
      })
    },
    dataCalculateCNUpdateBClear(value) {
      this.cnTotalB = value.cnTotal;
      this.ciUpTotalB = value.ciUpTotal;
      this.cnUpB = value.cnUp;
      this.cnDnB = value.cnDn;
      this.interModB = value.interMod;
      this.ciCochB = value.ciCoch;
      this.ciAdjB = value.ciAdj;
      this.ebNoB = value.ebNo;
      this.marginB = value.margin;
      this.$emit('calCNB', {
        ciUpTotalB: this.ciUpTotalB,
        cnUpB: this.cnUpB,
        cnDnB: this.cnDnB,
        interModB: this.interModB,
        ciCochB: this.ciCochB,
        ciAdjB: this.ciAdjB,
        cnTotalB: this.cnTotalB,
        ebNoB: this.ebNoB,
        marginB: this.marginB,
      })
    },
    dataCalculateCNUpdateABoth(value) {
      this.ebNoBothA = value.ebNo;
      this.$emit('calCNA_Both', {
        ebNoBothA: this.ebNoBothA,
      })
    },
    dataCalculateCNUpdateBBoth(value) {
      this.ebNoBothB = value.ebNo;
      this.$emit('calCNB_Both', {
        ebNoBothB: this.ebNoBothB,
      })
    },
    /////////////// Carrier Information ///////////////
    dataCarrierInfoUpdateA(value) {
      this.carrierInfoA = value;
      this.$emit('calCarrierA', {
        carrierInfoA: this.carrierInfoA,
      })
    },
    dataCarrierInfoUpdateB(value) {
      this.carrierInfoB = value;
      this.$emit('calCarrierB', {
        carrierInfoB: this.carrierInfoB,
      })
    },
    /////////////// SatInfo ///////////////
    dataSatInfoUpdate(value) {
      this.altitude = value.altitude;
      this.earthR = value.earthR;
      this.orbitPoint = value.orbitPoint;
    },
    /////////////// SatInfo_2 ///////////////
    dataSatInfo2UpdateA(value) {
      this.sfdMaxA = value.sfdMax;
      this.gtSelA = value.gt;
      this.eirpDnA = value.eirpdown;
    },
    dataSatInfo2UpdateB(value) {
      this.sfdMaxB = value.sfdMax;
      this.gtSelB = value.gt;
      this.eirpDnB = value.eirpdown;
    },
    /////////////// LocationInfo ///////////////
    dataLocationInfoAUpdate(value) {
      // console.log('The incoming value A is ' + JSON.stringify(value, undefined,2));
      this.locationInfoA = value;

      this.$emit('calLocationA', {
        cityA: this.locationInfoA.city,
        countryA: this.locationInfoA.country,
        eirpdownA: this.locationInfoA.eirpdown,
        gtA: this.locationInfoA.gt,
      })

    },
    dataLocationInfoBUpdate(value) {
      // console.log('The incoming value B is ' + JSON.stringify(value, undefined,2));
      this.locationInfoB = value;

      this.$emit('calLocationB', {
        cityB: this.locationInfoB.city,
        countryB: this.locationInfoB.country,
        eirpdownB: this.locationInfoB.eirpdown,
        gtB: this.locationInfoB.gt,
      })
    },
    dataTransmitLossUpdateA(value) {
      this.iflLoss = value.iflLoss;
      this.misAntUpA = value.misAntUpA;
      this.otherLoss = value.otherLoss;
      this.totalLossUpA = value.totalLossUp;
      this.$emit('calTransmitLossA', {
        iflLossA: this.iflLoss,
        totalLossUpA: this.totalLossUpA,
      })
    },
    dataTransmitLossUpdateB(value) {
      this.iflLoss = value.iflLoss;
      this.misAntUpA = value.misAntUpA;
      this.otherLoss = value.otherLoss;
      this.totalLossUpB = value.totalLossUp;
      this.$emit('calTransmitLossB', {
        iflLossB: this.iflLoss,
        totalLossUpB: this.totalLossUpB,
      })
    },
    dataReceiveLossUpdateA(value) {
      this.totalLossDnA = value.totalLossDn;
    },
    dataReceiveLossUpdateB(value) {
      this.totalLossDnB = value.totalLossDn;
    },
    dataAzElRangeUpdateA(value) {
      this.longDiffA = value.longDiff;
      this.centralAngleA = value.centralAngle;
      this.slantRangeA = value.slantRange;
      this.azAngleA = value.azAngle;
      this.elAngleA = value.elAngle;

      this.$emit('calDataA', {
        azAngleA: this.azAngleA,
        elAngleA: this.elAngleA,
      })
    },
    dataAzElRangeUpdateB(value) {
      this.longDiffB = value.longDiff;
      this.centralAngleB = value.centralAngle;
      this.slantRangeB = value.slantRange;
      this.azAngleB = value.azAngle;
      this.elAngleB = value.elAngle;

      this.$emit('calDataB', {
        azAngleB: this.azAngleB,
        elAngleB: this.elAngleB,
      })
    },
    dataUplinkLossUpdateA(value) {
      this.eirpUpValA = value.eirpUpVal;
      this.powerDenA = value.powerDen;
      this.atmosA = value.atmos;
      this.spreadLossA = value.spreadLoss;
      this.opFluxDenA = value.opFluxDen;
      this.gainSqrMA = value.gainSqrM;
    },
    dataUplinkLossUpdateB(value) {
      this.eirpUpValB = value.eirpUpVal;
      this.powerDenB = value.powerDen;
      this.atmosB = value.atmos;
      this.spreadLossB = value.spreadLoss;
      this.opFluxDenB = value.opFluxDen;
      this.gainSqrMB = value.gainSqrM;
    },

    dataDownlinkLossUpdateA_Clear(value) {
      this.eirpDnClearA_Clear = value.eirpDnClear;
      this.pathLossA_Clear = value.pathLoss;
      // this.atmos = value.atmos;
      this.pathLossAtmosA_Clear = value.pathLossAtmos;
      this.receivePwrClearA_Clear = value.receivePwrClear;
      this.eirpDnDenClearA_Clear = value.eirpDnDenClear;
    },
    dataDownlinkLossUpdateA_Upfade(value) {
      this.eirpDnClearA_Upfade = value.eirpDnClear;
      // this.pathLossA_Upfade = value.pathLoss;
      // this.atmos = value.atmos;
      // this.pathLossAtmosA_Upfade = value.pathLossAtmos;
      this.receivePwrClearA_Upfade = value.receivePwrClear;
      this.eirpDnDenClearA_Upfade = value.eirpDnDenClear;
    },
    dataDownlinkLossUpdateB_Clear(value) {
      this.eirpDnClearB_Clear = value.eirpDnClear;
      this.pathLossB_Clear = value.pathLoss;
      // this.atmos = value.atmos;
      this.pathLossAtmosB_Clear = value.pathLossAtmos;
      this.receivePwrClearB_Clear = value.receivePwrClear;
      this.eirpDnDenClearB_Clear = value.eirpDnDenClear;
    },
    dataDownlinkLossUpdateB_Upfade(value) {
      this.eirpDnClearB_Upfade = value.eirpDnClear;
      // this.pathLoss = value.pathLoss;
      // this.atmos = value.atmos;
      // this.pathLossAtmos = value.pathLossAtmos;
      this.receivePwrClearB_Upfade = value.receivePwrClear;
      this.eirpDnDenClearB_Upfade = value.eirpDnDenClear;
    },

    dataUplinkNoiseUpdateA(value) {
      this.boltzman = value.boltzman;
      this.noiseBWA = value.noiseBW;
      this.cnUpClearA = value.cnUpClear;
      this.cnUpUpfadeA = value.cnUpUpfade;
      this.opFluxDenUpfadeA = value.opFluxDenUpfade;
      this.eirpUpfadeA = value.eirpUpfade;
      this.cnBothfadeA = value.cnBothfade;
    },
    dataUplinkNoiseUpdateB(value) {
      // this.boltzman = value.boltzman;
      this.noiseBWB = value.noiseBW;
      this.cnUpClearB = value.cnUpClear;
      this.cnUpUpfadeB = value.cnUpUpfade;
      this.opFluxDenUpfadeB = value.opFluxDenUpfade;
      this.eirpUpfadeB = value.eirpUpfade;
      this.cnBothfadeB = value.cnBothfade;
    },

    dataDownlinkNoiseUpdateA_Clear(value) {
      this.increaseTA_Clear = value.increaseT;
      this.noisePwrClearA_Clear = value.noisePwrClear;
      this.noisePwrDnfadeA_Clear = value.noisePwrDnfade;
      this.cnDnClearA_Clear = value.cnDnClear;
      this.cnDnfadeClearA_Clear = value.cnDnfadeClear;
      this.noisePwrTotalA_Clear = value.noisePwrTotal;
    },
    dataDownlinkNoiseUpdateA_Upfade(value) {
      // this.increaseT = value.increaseT;
      // this.noisePwrClear = value.noisePwrClear;
      // this.noisePwrDnfadeA = value.noisePwrDnfade;
      this.cnDnClearA_Upfade = value.cnDnClear;
      this.cnDnfadeClearA_Upfade = value.cnDnfadeClear;
      // this.noisePwrTotal = value.noisePwrTotal;
    },
    dataDownlinkNoiseUpdateB_Clear(value) {
      this.increaseTB_Clear = value.increaseT;
      this.noisePwrClearB_Clear = value.noisePwrClear;
      this.noisePwrDnfadeB_Clear = value.noisePwrDnfade;
      this.cnDnClearB_Clear = value.cnDnClear;
      this.cnDnfadeClearB_Clear = value.cnDnfadeClear;
      this.noisePwrTotalB_Clear = value.noisePwrTotal;
    },
    dataDownlinkNoiseUpdateB_Upfade(value) {
      // this.increaseT = value.increaseT;
      // this.noisePwrClear = value.noisePwrClear;
      // this.noisePwrDnfadeB = value.noisePwrDnfade;
      this.cnDnClearB_Upfade = value.cnDnClear;
      this.cnDnfadeClearB_Upfade = value.cnDnfadeClear;
      // this.noisePwrTotal = value.noisePwrTotal;
    },
    dataUplinkIntUpdateA1(value) {
      this.ciUpA1 = value.ciUp;
    },
    dataUplinkIntUpdateA2(value) {
      this.ciUpA2 = value.ciUp;
    },
    dataCiTotalUpUpdateA(value) {
      this.ciTotalUpA = value.ciTotalCal
    },
    dataUplinkIntUpdateB1(value) {
      this.ciUpB1 = value.ciUp;
    },
    dataUplinkIntUpdateB2(value) {
      this.ciUpB2 = value.ciUp;
    },
    dataCiTotalUpUpdateB(value) {
      this.ciTotalUpB = value.ciTotalCal
    },
    dataDownlinkIntUpdateA1(value) {
      this.ciDnA1 = value.ciDn;
    },
    dataDownlinkIntUpdateA2(value) {
      this.ciDnA2 = value.ciDn;
    },
    dataCiTotalDnUpdateA(value) {
      this.ciTotalDnA = value.ciTotalCal
    },
    dataDownlinkIntUpdateB1(value) {
      this.ciDnB1 = value.ciDn;
    },
    dataDownlinkIntUpdateB2(value) {
      this.ciDnB2 = value.ciDn;
    },
    dataCiTotalDnUpdateB(value) {
      this.ciTotalDnB = value.ciTotalCal;
    },
    // dataCiAdjUpUpdate(value) {
    //   this.ciTotalUpA = value.ciTotalA;
    //   this.ciTotalUpB = value.ciTotalB;
    // },
    // dataCiAdjDnUpdate(value) {
    //   this.ciTotalDnA = value.ciTotalA;
    //   this.ciTotalDnB = value.ciTotalB;
    // },
  },

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  computed: {
    bwA() {
      if (this.paraData.selectedBwSel === 'Bandwidth') {
        return this.paraData.bandwidthValA;
      } else {
        return this.paraData.bandwidthValA * this.paraData.bt / this.paraData.selectedModCodeA.fec / this.paraData.selectedModCodeA.mod;
      }
    },
    infoA() {
      if (this.paraData.selectedBwSel === 'Information Rate') {
        return this.paraData.bandwidthValA;
      } else {
        return this.paraData.bandwidthValA * this.paraData.selectedModCodeA.fec * this.paraData.selectedModCodeA.mod / this.paraData.bt;
      }
    },
    bwB() {
      if (this.paraData.selectedBwSel === 'Bandwidth') {
        return this.paraData.bandwidthValB;
      } else {
        return this.paraData.bandwidthValB * this.paraData.bt / this.paraData.selectedModCodeB.fec / this.paraData.selectedModCodeB.mod;
      }
    },
    infoB() {
      if (this.paraData.selectedBwSel === 'Information Rate') {
        return this.paraData.bandwidthValB;
      } else {
        return this.paraData.bandwidthValB * this.paraData.selectedModCodeB.fec * this.paraData.selectedModCodeB.mod / this.paraData.bt;
      }
    },
    ///////////////////////////////////////////
    // Push Data to Design Parameter Section //
    ///////////////////////////////////////////
    dataDesignParamA() {
      return {
        bandwidthVal: this.bwA,
        hpaPowerBoth: this.hpaPowerBothA,
        hpaMax: this.hpaMaxA,
        info: this.carrierInfoA.info,
        bt: this.carrierInfoA.bt,
        fec: this.carrierInfoA.fec,
        mod: this.carrierInfoA.mod
      }
    },
    dataDesignParamB() {
      return {
        bandwidthVal: this.bwB,
        hpaPowerBoth: this.hpaPowerBothB,
        hpaMax: this.hpaMaxB,
        info: this.carrierInfoB.info,
        bt: this.carrierInfoB.bt,
        fec: this.carrierInfoB.fec,
        mod: this.carrierInfoB.mod
      }
    },

    /////////////////////////
    // Utilization Section //
    /////////////////////////
    dataUtilParam() {
      return {
        selectedTp: this.paraData.selectedTp,
        pwrVal: this.paraData.pwrValA,

        opFluxDenA: this.opFluxDenA,
        opFluxDenB: this.opFluxDenB,
        allowFluxDenA: this.allowFluxDenA,
        allowFluxDenB: this.allowFluxDenB,
        percentAllowBwA: this.aggBackoff.percentAllowBw_A,
        percentAllowBwB: this.aggBackoff.percentAllowBw_B,

        allowIboClearA: this.allowIboClearA,
        allowIboClearB: this.allowIboClearB,
        iboCalA: this.iboCalA,
        iboCalB: this.iboCalB,

        allowBWA: this.allowBWA,
        allowBWB: this.allowBWB,
      }
    },
    ////////////////////////////////////////
    // Satellite Design Parameter Sextion //
    ////////////////////////////////////////
    dataSatDesignParam() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedTp: this.paraData.selectedTp,
        atten: this.paraData.atten,

        antSizeA: this.paraData.antSizeA,
        antSizeB: this.paraData.antSizeB,
      }
    },
    /////////////////////////////////////
    // Carrier Operation Point Section //
    /////////////////////////////////////
    dataCarrierOperationA() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedTp: this.paraData.selectedTp,
        aggIbo: +this.aggBackoff.satIbo,
        aggObo: +this.aggBackoff.satObo,
        sfdAtten: +this.sfdAttenA,
        atten: +this.atten,

        sfdMax: +this.sfdMaxA,
        allowBW: +this.allowBWA,
        opFluxDen: +this.opFluxDenA,
        eirpDn: +this.eirpDnB,
        opFluxDenUpfade: +this.opFluxDenUpfadeA,
        rainUp: +this.rainUpA,
      }
    },
    dataCarrierOperationB() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedTp: this.paraData.selectedTp,
        aggIbo: this.aggBackoff.satIbo,
        aggObo: this.aggBackoff.satObo,
        sfdAtten: this.sfdAttenB,
        atten: this.atten,

        sfdMax: this.sfdMaxB,
        allowBW: this.allowBWB,
        opFluxDen: this.opFluxDenB,
        eirpDn: this.eirpDnA,
        opFluxDenUpfade: this.opFluxDenUpfadeB,
        rainUp: this.rainUpB,
      }
    },
    /////////////////////////////////
    // Adjustable Link Ava Section //
    /////////////////////////////////
    dataAdjustbleLinkAva() {
      return {
        upFadePercent: this.paraData.linkAvaVal,
        dnFadePercent: this.paraData.linkAvaVal
      }
    },
    ///////////////////////////////////
    // Adjustable Parameters Section //
    ///////////////////////////////////
    dataAdjustbleParamA() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedTp: this.paraData.selectedTp,
        aggIbo: this.aggBackoff.satIbo,
        numMCPC: this.numMCPC,
        aggHpaBoo: this.aggHpaBoo,
        atten: this.atten,

        sfdMax: this.sfdMaxA,
        hpaPowerBoth: this.hpaPowerBothA,
        pwrVal: this.paraData.pwrValA,
        // pwrUtil : this.pwrUtilA,
        opFluxDen: this.opFluxDenA,
        allowFluxDen: this.allowFluxDenA,
        percentAllowBw: this.aggBackoff.percentAllowBw_A,

        orbitalSlotSel: this.paraData.selectedSatellite.orbital_slot,


        latSelUp: this.locationInfoA.latSel,
        longSelUp: this.locationInfoA.longSel,

        frqUp: this.frqUp_A,
        upPol: this.paraData.selectedTp.uplink_pol,
        upFadePercent: this.upFadePercent,
        elAngleUp: this.elAngleA,
        antSizeUp: this.antSizeA,

        latSelDn: this.locationInfoB.latSel,
        longSelDn: this.locationInfoB.longSel,

        frqDn: this.frqDn_A,
        dnPol: this.paraData.selectedTp.downlink_pol,
        dnFadePercent: this.dnFadePercent,
        elAngleDn: this.elAngleB,
        antSizeDn: this.antSizeB,

      }
    },
    dataAdjustbleParamB() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedTp: this.paraData.selectedTp,
        aggIbo: this.aggBackoff.satIbo,
        numMCPC: this.numMCPC,
        aggHpaBoo: this.aggHpaBoo,
        atten: this.atten,

        sfdMax: this.sfdMaxB,
        hpaPowerBoth: this.hpaPowerBothB,
        pwrVal: this.paraData.pwrValB,
        // pwrUtil : this.pwrUtilB,
        opFluxDen: this.opFluxDenB,
        allowFluxDen: this.allowFluxDenB,
        percentAllowBw: this.aggBackoff.percentAllowBw_B,

        orbitalSlotSel: this.paraData.selectedSatellite.orbital_slot,


        latSelUp: this.locationInfoB.latSel,
        longSelUp: this.locationInfoB.longSel,

        frqUp: this.frqUp_B,
        upPol: this.paraData.selectedTp.uplink_pol,
        upFadePercent: this.upFadePercent,
        elAngleUp: this.elAngleB,
        antSizeUp: this.antSizeB,

        latSelDn: this.locationInfoA.latSel,
        longSelDn: this.locationInfoA.longSel,

        frqDn: this.frqDn_B,
        dnPol: this.paraData.selectedTp.downlink_pol,
        dnFadePercent: this.dnFadePercent,
        elAngleDn: this.elAngleA,
        antSizeDn: this.antSizeA,
      }
    },
    ////////////////////////
    // Aggregrate Section //
    ////////////////////////
    dataAggBackoff() {
      return {
        selectedTp: this.paraData.selectedTp,
        selectedBeam: this.paraData.selectedBeam,
        selectedCarrier: this.paraData.selectedCarrier,
        satObo: this.paraData.satObo,
        satIbo: this.paraData.satIbo,

        allowBWA: this.allowBWA,
        allowBWB: this.allowBWB,
      }
    },
    ////////////////////////////////
    // Frequency Assigned Section //
    ////////////////////////////////
    dataFreqAssigned() {
      return {
        selectedTp: this.paraData.selectedTp,
        frqDnA: this.paraData.selectedTp.downlink_cf,
        frqDnB: this.paraData.selectedTp.downlink_cf,
        selectedBeam: this.paraData.selectedBeam,
        upPol: this.paraData.selectedTp.uplink_pol,
        dnPol: this.paraData.selectedTp.downlink_pol,
      }
    },
    ///////////////////////////
    // Calculate C/N Section //
    ///////////////////////////
    dataCalculateCNaClear() {
      return {
        ciUpTotal: this.ciTotalUpA,
        cnUp: this.cnUpClearA,
        cnDn: this.cnDnClearA_Clear,
        interMod: this.paraData.interMod,
        ciCoch: 30,
        ciAdj: this.ciTotalDnA,
        infoValue: this.carrierInfoA.infoValue,
        bandwidth: this.bandwidthA,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoA.ebNo
      }
    },
    dataCalculateCNaUpfade() {
      return {
        ciUpTotal: this.ciTotalUpA,
        cnUp: this.cnUpUpfadeA,
        cnDn: this.cnDnClearA_Upfade,
        interMod: this.paraData.interMod,
        ciCoch: 30,
        ciAdj: this.ciTotalDnA,
        infoValue: this.carrierInfoA.infoValue,
        bandwidth: this.bandwidthA,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoA.ebNo
      }
    },
    dataCalculateCNaDownfade() {
      return {
        ciUpTotal: this.ciTotalUpA,
        cnUp: this.cnUpClearA,
        cnDn: this.cnDnfadeClearA_Clear,
        interMod: this.paraData.interMod,
        ciCoch: 30,
        ciAdj: this.ciTotalDnA,
        infoValue: this.carrierInfoA.infoValue,
        bandwidth: this.bandwidthA,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoA.ebNo
      }
    },
    dataCalculateCNaBothfade() {
      return {
        ciUpTotal: this.ciTotalUpA,
        cnUp: this.cnUpUpfadeA,
        cnDn: this.cnDnfadeClearA_Upfade,
        interMod: this.paraData.interMod,
        ciCoch: 30,
        ciAdj: this.ciTotalDnA,
        infoValue: this.carrierInfoA.infoValue,
        bandwidth: this.bandwidthA,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoA.ebNo
      }
    },
    dataCalculateCNbClear() {
      return {
        ciUpTotal: this.ciTotalUpB,
        cnUp: this.cnUpClearB,
        cnDn: this.cnDnClearB_Clear,
        interMod: this.paraData.interMod,
        ciCoch: 25,
        ciAdj: this.ciTotalDnB,
        infoValue: this.carrierInfoB.infoValue,
        bandwidth: this.bandwidthB,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoB.ebNo
      }
    },
    dataCalculateCNbUpfade() {
      return {
        ciUpTotal: this.ciTotalUpB,
        cnUp: this.cnUpUpfadeB,
        cnDn: this.cnDnClearB_Upfade,
        interMod: this.paraData.interMod,
        ciCoch: 25,
        ciAdj: this.ciTotalDnB,
        infoValue: this.carrierInfoB.infoValue,
        bandwidth: this.bandwidthB,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoB.ebNo
      }
    },
    dataCalculateCNbDownfade() {
      return {
        ciUpTotal: this.ciTotalUpB,
        cnUp: this.cnUpClearB,
        cnDn: this.cnDnfadeClearB_Clear,
        interMod: this.paraData.interMod,
        ciCoch: 25,
        ciAdj: this.ciTotalDnB,
        infoValue: this.carrierInfoB.infoValue,
        bandwidth: this.bandwidthB,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoB.ebNo
      }
    },
    dataCalculateCNbBothfade() {
      return {
        ciUpTotal: this.ciTotalUpB,
        cnUp: this.cnUpUpfadeB,
        cnDn: this.cnDnfadeClearB_Upfade,
        interMod: this.paraData.interMod,
        ciCoch: 25,
        ciAdj: this.ciTotalDnB,
        infoValue: this.carrierInfoB.infoValue,
        bandwidth: this.bandwidthB,
        // ebNoThreshold: this.ebNoThresholdA
        ebNoThreshold: this.carrierInfoB.ebNo
      }
    },
    /////////////////////////////////
    // Carrier Information Section //
    /////////////////////////////////
    dataCarrierInfoA() {
      return {
        selectedBwSel: this.paraData.selectedBwSel,
        selectedModCode: this.paraData.selectedModCodeA,
        mod: this.paraData.selectedModCodeA.mod,
        fec: this.paraData.selectedModCodeA.fec,
        bt: this.paraData.bt,
        bandwidth: this.bandwidthA,
        info: this.infoA
      }
    },
    dataCarrierInfoB() {
      return {
        selectedBwSel: this.paraData.selectedBwSel,
        selectedModCode: this.paraData.selectedModCodeB,
        mod: this.paraData.selectedModCodeB.mod,
        fec: this.paraData.selectedModCodeB.fec,
        bt: this.paraData.bt,
        bandwidth: this.bandwidthB,
        info: this.infoB
      }
    },
    ///////////////////////////////////
    // Satellite Information Section //
    ///////////////////////////////////
    dataSatInfo() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
      }
    },
    ///////////////////////////////////////
    // Satellite Information (2) Section //
    ///////////////////////////////////////
    dataSatInfo_2A() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedBeam: this.paraData.selectedBeam,
        selectedTp: this.paraData.selectedTp,

        selectLocation: this.locationInfoA,
        gt: this.locationInfoA.gt,
        eirpdown: this.locationInfoA.eirpdown,
      }
    },
    dataSatInfo_2B() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedBeam: this.paraData.selectedBeam,
        selectedTp: this.paraData.selectedTp,

        selectLocation: this.locationInfoB,
        gt: this.locationInfoB.gt,
        eirpdown: this.locationInfoB.eirpdown,
      }
    },
    //////////////////////////////////
    // Location Information Section //
    //////////////////////////////////
    dataLocationInfoA() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedLocations: this.paraData.selectedLocationsA,
        selectedBeam: this.paraData.selectedBeam,
        selectedTp: this.paraData.selectedTp,
        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeA,
        frqUp: this.frqUp_A,
        rxAntTempVal: this.paraData.rxAntTempVal,
        lossFeed: this.paraData.lossFeedA,
        lnaTempVal: this.paraData.lnaTempVal,
        dcGain: 0,
        iflLoss: 0,
      }
    },
    dataLocationInfoB() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        selectedLocations: this.paraData.selectedLocationsB,
        selectedBeam: this.paraData.selectedBeam,
        selectedTp: this.paraData.selectedTp,
        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeB,
        frqUp: this.frqUp_B,
        rxAntTempVal: this.paraData.rxAntTempVal,
        lossFeed: this.paraData.lossFeedA,
        lnaTempVal: this.paraData.lnaTempVal,
        dcGain: 0,
        iflLoss: 0,
      }
    },
    /////////////////////////////////
    // Transmitted ES Loss Section //
    /////////////////////////////////
    dataTransmitLossA() {
      return {
        iflLoss: this.paraData.iflLoss,
        misAntUpA: this.paraData.misAntUpA,
        otherLoss: this.paraData.otherLoss,
      }
    },
    dataTransmitLossB() {
      return {
        iflLoss: this.paraData.iflLoss,
        misAntUpA: this.paraData.misAntUpA,
        otherLoss: this.paraData.otherLoss,
      }
    },
    //////////////////////////////
    // Received ES Loss Section //
    //////////////////////////////
    dataReceiveLossA() {
      return {

        misAntDnB: this.paraData.misAntDnB,
        otherLoss: this.paraData.otherLoss,
      }
    },
    dataReceiveLossB() {
      return {

        misAntDnB: this.paraData.misAntDnB,
        otherLoss: this.paraData.otherLoss,
      }
    },
    // dataTransmitLossB() {
    //   return {
    //     iflLoss: this.paraData.iflLoss,
    //     misAntUpB: this.paraData.misAntUpB,
    //   }
    // },
    //////////////////////////////////////////////
    // Az, El & Slant Range Calculation Section //
    //////////////////////////////////////////////
    dataAzElRangeA() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        locationInfo: this.locationInfoA,

        altitude: this.altitude,
        earthR: this.earthR,
      }
    },
    dataAzElRangeB() {
      return {
        selectedSatellite: this.paraData.selectedSatellite,
        locationInfo: this.locationInfoB,

        altitude: this.altitude,
        earthR: this.earthR,
      }
    },
    /////////////////////////////////////
    // Uplink Loss Calculation Section //
    /////////////////////////////////////
    dataUplinkLossA() {
      return {
        celeritas: this.locationInfoA.celeritas,
        atmos: this.paraData.atmos,
        // atmos: this.atmos,

        antGainVal: this.locationInfoA.antGainVal,
        hpaPowerBoth: this.hpaPowerBothA,
        totalLossUp: this.totalLossUpA,
        bandwidth: this.bandwidthA,
        slantRange: this.slantRangeA,
        frqUp: this.frqUp_A,
      }
    },
    dataUplinkLossB() {
      return {
        celeritas: this.locationInfoB.celeritas,
        atmos: this.paraData.atmos,
        // atmos: this.atmos,

        antGainVal: this.locationInfoB.antGainVal,
        hpaPowerBoth: this.hpaPowerBothB,
        totalLossUp: this.totalLossUpB,
        bandwidth: this.bandwidthB,
        slantRange: this.slantRangeB,
        frqUp: this.frqUp_B,
      }
    },
    ///////////////////////////////////////
    // Downlink Loss Calculation Section //
    ///////////////////////////////////////
    dataDownlinkLossA_Clear() {
      return {
        celeritas: this.locationInfoA.celeritas,
        antGainReceive: this.locationInfoB.antGainReceive,
        eirpDn: this.eirpDnB,
        totalLossDn: this.totalLossDnA,
        bandwidth: this.bandwidthA,
        atmos: this.atmosA,
        slantRange: this.slantRangeB,
        frqDn: this.frqDn_A,
        obocal: this.oboCalA
      }
    },
    dataDownlinkLossA_Upfade() {
      return {
        celeritas: this.locationInfoA.celeritas,
        antGainReceive: this.locationInfoB.antGainReceive,
        eirpDn: this.eirpDnB,
        totalLossDn: this.totalLossDnA,
        bandwidth: this.bandwidthA,
        atmos: this.atmosA,
        slantRange: this.slantRangeB,
        frqDn: this.frqDn_A,
        obocal: this.oboUpfadeA
      }
    },
    dataDownlinkLossB_Clear() {
      return {
        celeritas: this.locationInfoB.celeritas,
        antGainReceive: this.locationInfoA.antGainReceive,
        eirpDn: this.eirpDnA,
        totalLossDn: this.totalLossDnB,
        bandwidth: this.bandwidthB,
        atmos: this.atmosB,
        slantRange: this.slantRangeA,
        frqDn: this.frqDn_B,
        obocal: this.oboCalB
      }
    },
    dataDownlinkLossB_Upfade() {
      return {
        celeritas: this.locationInfoB.celeritas,
        antGainReceive: this.locationInfoA.antGainReceive,
        eirpDn: this.eirpDnA,
        totalLossDn: this.totalLossDnB,
        bandwidth: this.bandwidthB,
        atmos: this.atmosB,
        slantRange: this.slantRangeA,
        frqDn: this.frqDn_B,
        obocal: this.oboUpfadeB
      }
    },
    //////////////////////////
    // Uplink Noise Section //
    //////////////////////////
    dataUplinkNoiseA() {
      return {
        bandwidth: this.bandwidthA,
        opFluxDen: this.opFluxDenA,
        gainSqrM: this.gainSqrMA,
        gtSel: this.gtSelA,
        eirpUpVal: this.eirpUpValA,
        spreadLoss: this.spreadLossA,
        eirpDn: this.eirpDnB,
        sfdAtten: this.sfdAttenA,
        receivePwrClear: this.receivePwrClearA_Clear,
        noisePwrDnfade: this.noisePwrDnfadeA_Clear,
        rainUp: this.rainUpA,
        rainDown: this.rainDownA
      }
    },
    dataUplinkNoiseB() {
      return {
        bandwidth: this.bandwidthB,
        opFluxDen: this.opFluxDenB,
        gainSqrM: this.gainSqrMB,
        gtSel: this.gtSelB,
        eirpUpVal: this.eirpUpValB,
        spreadLoss: this.spreadLossB,
        eirpDn: this.eirpDnA,
        sfdAtten: this.sfdAttenB,
        receivePwrClear: this.receivePwrClearB_Clear,
        noisePwrDnfade: this.noisePwrDnfadeB_Clear,
        rainUp: this.rainUpB,
        rainDown: this.rainDownB
      }
    },
    ////////////////////////////
    // Downlink Noise Section //
    ////////////////////////////
    dataDownlinkNoiseA_Clear() {
      return {
        bandwidth: this.bandwidthA,
        tsys: this.locationInfoA.tsys,
        receivePwrClear: this.receivePwrClearA_Clear,
        rainDown: this.rainDownA,
        cnTotal: this.cnTotalA
      }
    },
    dataDownlinkNoiseA_Upfade() {
      return {
        bandwidth: this.bandwidthA,
        tsys: this.locationInfoA.tsys,
        receivePwrClear: this.receivePwrClearA_Upfade,
        rainDown: this.rainDownA,
      }
    },
    dataDownlinkNoiseB_Clear() {
      return {
        bandwidth: this.bandwidthB,
        tsys: this.locationInfoB.tsys,
        receivePwrClear: this.receivePwrClearB_Clear,
        rainDown: this.rainDownB,
        cnTotal: this.cnTotalB
      }
    },
    dataDownlinkNoiseB_Upfade() {
      return {
        bandwidth: this.bandwidthB,
        tsys: this.locationInfoB.tsys,
        receivePwrClear: this.receivePwrClearB_Upfade,
        rainDown: this.rainDownB,
      }
    },
    ////////////////////////
    // Key-In C/I Section //
    ////////////////////////
    dataCiAdjA() {
      return {
        ciTotalUp: this.ciTotalUpA,
        ciTotalDn: this.ciTotalDnA,

      }
    },
    dataCiAdjB() {
      return {
        ciTotalUp: this.ciTotalUpB,
        ciTotalDn: this.ciTotalDnB,
      }
    },
    ///////////////////////
    // EIRP Down Section //
    ///////////////////////
    dataEirpDown() {
      return {
        // eirpDn: this.selectLocationA.data.value,
        oboCalA: this.oboCalA,
        oboCalB: this.oboCalB,
        aggObo: this.aggBackoff.satObo,
        allowBWA: this.allowBWA,
        allowBWB: this.allowBWA,
        eirpDn: this.eirpDnA,
      }
    },
    /////////////////////////////////////////
    // Uplink Adj Sat Interference Section //
    /////////////////////////////////////////
    dataAdjName() {
      return {
        adjSatName: this.paraData.adjSatDxContourA,
        selectedSatellite: this.paraData.selectedSatellite,
        selectedLocationsA: this.paraData.selectedLocationsA,
        selectedLocationsB: this.paraData.selectedLocationsB,
      }
    },
    dataUplinkIntA1() {
      return {
        // topo: 2.035,
        // ulPden: -55,
        // esInTcGt: -3,
        topo: this.paraData.adjInfo.topocentric1,
        ulPden: this.paraData.adjInfo.uplinkPdens1,
        esInTcGt: this.paraData.adjInfo.adjacent1,
        selectedSatellite: this.paraData.selectedSatellite,
        powerDen: this.powerDenA,
        antGainVal: this.locationInfoA.antGainVal,
        gtSel: this.gtSelA,
        polImp: 0,
        ulSidelobe: 0,
      }
    },
    dataUplinkIntA2() {
      return {
        // topo: 1.485,
        // ulPden: -55,
        // esInTcGt: -10,
        topo: this.paraData.adjInfo.topocentric2,
        ulPden: this.paraData.adjInfo.uplinkPdens2,
        esInTcGt: this.paraData.adjInfo.adjacent2,
        selectedSatellite: this.paraData.selectedSatellite,
        powerDen: this.powerDenA,
        antGainVal: this.locationInfoA.antGainVal,
        gtSel: this.gtSelA,
        polImp: 0,
        ulSidelobe: 0,
      }
    },
    dataCiTotalUpA() {
      return {
        powerDen: this.powerDenA,
        ci1: this.ciUpA1,
        ci2: this.ciUpA2,
      }
    },

    dataUplinkIntB1() {
      return {
        topo: this.paraData.adjInfo.topocentric1,
        ulPden: this.paraData.adjInfo.uplinkPdens1,
        esInTcGt: this.paraData.adjInfo.adjacent1,
        selectedSatellite: this.paraData.selectedSatellite,
        powerDen: this.powerDenB,
        antGainVal: this.locationInfoB.antGainVal,
        gtSel: this.gtSelB,
        polImp: 0,
        ulSidelobe: 0,
      }
    },
    dataUplinkIntB2() {
      return {
        topo: this.paraData.adjInfo.topocentric2,
        ulPden: this.paraData.adjInfo.uplinkPdens2,
        esInTcGt: this.paraData.adjInfo.adjacent2,
        selectedSatellite: this.paraData.selectedSatellite,
        powerDen: this.powerDenB,
        antGainVal: this.locationInfoB.antGainVal,
        gtSel: this.gtSelB,
        polImp: 0,
        ulSidelobe: 0,
      }
    },
    dataCiTotalUpB() {
      return {
        powerDen: this.powerDenB,
        ci1: this.ciUpB1,
        ci2: this.ciUpB2,
      }
    },

    ///////////////////////////////////////////
    // Downlink Adj Sat Interference Section //
    ///////////////////////////////////////////
    dataDownlinkIntA1() {
      return {
        topo: this.paraData.adjInfo.topocentric1,
        downlinkPdenSel: this.paraData.adjInfo.downlinkPdens1,
        polImp: 0,
        esAdj: -1.5,

        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeB,
        frqDnA: this.frqDn_A,
        frqDnB: this.frqDn_B,
        eirpDnDenClear: this.eirpDnDenClearA_Clear,

        selectedSatellite: this.paraData.selectedSatellite,
      }
    },
    dataDownlinkIntA2() {
      return {
        topo: this.paraData.adjInfo.topocentric2,
        downlinkPdenSel: this.paraData.adjInfo.downlinkPdens2,
        polImp: 0,
        esAdj: -20,

        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeB,
        frqDnA: this.frqDn_A,
        frqDnB: this.frqDn_B,
        eirpDnDenClear: this.eirpDnDenClearA_Clear,

        selectedSatellite: this.paraData.selectedSatellite,
      }
    },
    dataCiTotalDnA() {
      return {
        powerDen: this.powerDenA,
        ci1: this.ciDnA1,
        ci2: this.ciDnA2,
      }
    },

    dataDownlinkIntB1() {
      return {
        topo: this.paraData.adjInfo.topocentric1,
        downlinkPdenSel: this.paraData.adjInfo.downlinkPdens1,
        polImp: 0,
        esAdj: 0,

        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeA,
        frqDnA: this.frqDn_A,
        frqDnB: this.frqDn_B,
        eirpDnDenClear: this.eirpDnDenClearB_Clear,

        selectedSatellite: this.paraData.selectedSatellite,
      }
    },
    dataDownlinkIntB2() {
      return {
        topo: this.paraData.adjInfo.topocentric2,
        downlinkPdenSel: this.paraData.adjInfo.downlinkPdens2,
        polImp: 0,
        esAdj: -25,

        antEffVal: this.paraData.antEffVal,
        antSize: this.antSizeA,
        frqDnA: this.frqDn_A,
        frqDnB: this.frqDn_B,
        eirpDnDenClear: this.eirpDnDenClearB_Clear,

        selectedSatellite: this.paraData.selectedSatellite,
      }
    },
    dataCiTotalDnB() {
      return {
        powerDen: this.powerDenB,
        ci1: this.ciDnB1,
        ci2: this.ciDnB2,
      }
    },

  },
  watch: {
    'paraData' (newVal, oldVal) {

      // this.rxAntTempVal = newVal.rxAntTempVal;
      this.cityA = newVal.cityA;
      this.cityB = newVal.cityB;

      this.$emit('calData', {

        // selLocations: this.selLocations,
        cityA: this.locationInfoA.city,
        cityB: this.locationInfoB.city,

      })
    },
  }
}
</script>
