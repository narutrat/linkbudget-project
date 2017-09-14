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
        <div class="col-sm-2"></div>
      </div>

      <div class="row" style="padding:10px">

        <div class="col-sm-4" style="text-align:left">
          <div class="row">HPA Backoff per Carrier</div>
          <div class="row">Occupied Bandwidth</div>
          <div class="row">Guard Band</div>
          <div class="row">Allowcated Bandwidth</div>
          <div class="row">Aggregrated HPA BOo</div>
          <div class="row">Number of MCPC Carrier</div>
        </div>

        <div class="col-sm-2" style="text-align:left"></div>

        <DesignParam :bandwidthData="paraBW_A"></DesignParam>

        <DesignParam :bandwidthData="paraBW_B"></DesignParam>

        <div class="col-sm-2" style="text-align:center">
          <div class="row">dB</div>
          <div class="row">kHz</div>
          <div class="row">%</div>
          <div class="row">kHz</div>
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

      <div class="col-sm-4" style="text-align:left; padding:10px">
        <div class="row">Power Utilization</div>
        <div class="row">BW Utilization</div>
        <div class="row">Case</div>
      </div>

      <UtilParam style="padding:10px"></UtilParam>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="text-align:left; border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        Satellite Design Parameter
      </div>

      <SatDesignParam></SatDesignParam>

    </div>

    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Carrier Operating Point</div>
        <div class="col-sm-2">A to B<br/>(Cl. Sky)</div>
        <div class="col-sm-2">A to B<br/>(Up fade)</div>
        <div class="col-sm-2">B to A<br/>(Cl. Sky)</div>
        <div class="col-sm-2">B to A<br/>(Up fade)</div>
      </div>
      <CarrierOperation></CarrierOperation>
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

      <AdjustableParam></AdjustableParam>
    </div>

    <div class="col-sm-6">
      <div class="row">
        <AggBackoff></AggBackoff>
      </div>

      <div class="row" style="border-bottom:solid 2px; border-top:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Frequency Assigned</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
        <div class="col-sm-2">Polarization</div>
      </div>

      <div class="row">
        <FreqAssigned></FreqAssigned>
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12"> A to B </div>
      </div>

      <CalculateCN></CalculateCN>

    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12"> B to A </div>
      </div>

      <CalculateCN></CalculateCN>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Carrier Information</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2">A to B</div>
        <div class="col-sm-2">B to A</div>
        <div class="col-sm-2"></div>
      </div>

      <div class="col-sm-4" style="text-align:center">
        <div class="row">mod type PSK(1) QPSK(2)</div>
        <div class="row">info. rate (before FEC)</div>
        <div class="row">FEC Rate</div>
        <div class="row">Transmission Rate</div>
        <div class="row">BT Product</div>
        <div class="row">Threshold Eb/No (info. rate)</div>
        <div class="row">Symbol Rate</div>
        <div class="row">Occupied BW</div>
      </div>

      <div class="col-sm-2" style="text-align:center"></div>

      <div class="col-sm-2" style="text-align:center">
        <CarrierInfo></CarrierInfo>
      </div>
      <div class="col-sm-2" style="text-align:center">
        <CarrierInfo></CarrierInfo>
      </div>

      <div class="col-sm-2" style="text-align:center">
        <div class="row"></div>
        <div class="row">kbps</div>
        <div class="row"></div>
        <div class="row">kbps</div>
        <div class="row"></div>
        <div class="row">dB (Operating)</div>
        <div class="row">kbps</div>
        <div class="row">kHz</div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Satellite Information</div>
      </div>

      <SatInfo></SatInfo>

      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-6"></div>
        <div class="col-sm-2">At ES A</div>
        <div class="col-sm-2">At ES B</div>
      </div>

      <div class="row">
        <div class="col-sm-4" style="margin-left:10px; text-align:left">
          <div class="row">G/T</div>
          <div class="row">SFD at max attenuation</div>
          <div class="row">Satellite BW</div>
          <div class="row">Satellite EIRP</div>
        </div>

        <div class="col-sm-2"></div>
        <div class="col-sm-2">
          <SatInfo_2></SatInfo_2>
        </div>
        <div class="col-sm-2">
          <SatInfo_2></SatInfo_2>
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
        <LocationInfo></LocationInfo>
      </div>
    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Earth Station B</div>
      </div>
      <div>
        <LocationInfo></LocationInfo>
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

      <div class="col-sm-4" style="text-align:left">
        <div class="row">WG and Feed Loss</div>
        <div class="row">Mispointing Loss</div>
        <div class="row">Other Loss (XPD & Axial Ratio)</div>
        <div class="row">Total Up ES Loss</div>
      </div>
      <div class="col-sm-2"></div>
      <div>
        <TransmitLoss></TransmitLoss>
      </div>
      <div>
        <TransmitLoss></TransmitLoss>
      </div>
    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4">Received ES Loss</div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"> A to B </div>
        <div class="col-sm-2"> B to A</div>
        <div class="col-sm-2"></div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row"></div>
        <div class="row">Mispointing Loss</div>
        <div class="row">Other Loss (XPD & Axial Ratio)</div>
        <div class="row">Total Up ES Loss</div>
      </div>
      <div class="col-sm-2"></div>
      <div>
        <ReceiveLoss></ReceiveLoss>
      </div>
      <div>
        <ReceiveLoss></ReceiveLoss>
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
        <AzElRange></AzElRange>
      </div>
    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-4" style="text-align:left">Earth Station B</div>
      </div>
      <div class="row" style="border-bottom:solid 1px; padding:5px; font-weight:bold; font-size:16px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
        <div class="col-sm-12" style="text-align:left">Azimuth-Elevation-Slant Range Calculation</div>
      </div>
      <div>
        <AzElRange></AzElRange>
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

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Xmitted EIRP</div>
        <div class="row">Power Density</div>
        <div class="row">Atmospheric Absorption</div>
        <div class="row">Spreading Loss & Atmospheric Absorption</div>
        <div class="row">Operating Flux Density</div>
        <div class="row">Gain of square meter</div>
      </div>

      <div class="col-sm-2"></div>

      <div>
        <UplinkLoss></UplinkLoss>
      </div>

      <div>
        <UplinkLoss></UplinkLoss>
      </div>

    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
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
        <DownlinkLoss></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss></DownlinkLoss>
      </div>

      <div>
        <DownlinkLoss></DownlinkLoss>
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
        <UplinkNoise></UplinkNoise>
      </div>

      <div>
        <UplinkNoise></UplinkNoise>
      </div>

      <div class="col-sm-2" style="text-align:left">
        <div class="row">dBW/K-Hz</div>
        <div class="row">...</div>
        <div class="row">dBHz</div>
        <div class="row">dBH</div>
        <div class="row">dBW/m^2</div>
        <div class="row">dB</div>
        <div class="row">dB</div>
      </div>

    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
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
        <DownlinkNoise></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise></DownlinkNoise>
      </div>

      <div>
        <DownlinkNoise></DownlinkNoise>
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
        <CIadj></CIadj>
      </div>

      <div>
        <CIadj></CIadj>
      </div>

    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
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
        <EirpDn></EirpDn>
      </div>

    </div>
  </div>

  <div class="row" style="margin-left:10px; text-align:center; border-left:solid 2px; border-right:solid 2px; border-bottom:solid 2px">
    <div class="col-sm-6" style="border-right:solid 2px">

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
              <AdjName></AdjName>
              <AdjName></AdjName>
          </div>
        </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Topocentric Angle</div>
        <div class="row">Uplink Pdens (dBW/Hz)</div>
        <div class="row">Assumed Tx Intf. E/S in THAICOM G/T contour</div>
        <div class="row">Polarization Improvement</div>
        <div class="row">U/L Slidelobe improvement from 29-25log</div>
        <div class="row">C/I Uplink</div>
        <div class="row">C/I Uplink Total</div>
      </div>

      <div>
        <UplinkInt></UplinkInt>
        <UplinkInt></UplinkInt>
      </div>
      <div>
        <CiTotal></CiTotal>
        <CiTotal></CiTotal>
      </div>

    </div>
    <div class="col-sm-6" style="border-right:solid 2px">
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
            <AdjName></AdjName>
            <AdjName></AdjName>
          </div>
        </div>
      </div>

      <div class="col-sm-4" style="text-align:left">
        <div class="row">Topocentric Angle</div>
        <div class="row">Downlink EIRP density @peak (dBW/Hz)</div>
        <div class="row">GRR from Antenna Pattern (BO.1213)</div>
        <div class="row">Polarization Improvement</div>
        <div class="row">TC-5 Rx. E/S in Adj Sat D/L EIRP dx contour</div>
        <div class="row">C/I Downlink</div>
        <div class="row">C/I Downlink Total</div>
      </div>

      <div>
        <DownlinkInt></DownlinkInt>
        <DownlinkInt></DownlinkInt>
      </div>
      <div>
        <CiTotal></CiTotal>
        <CiTotal></CiTotal>
      </div>

    </div>
  </div>
<!-- {{this.paraData.selectedSatellite}}
{{this.paraData.selectedModem.modSpec}} -->

</div>
</template>
<!-- <div class="col-sm-2">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
</div> -->
<script>
import DesignParam from './DesignParam'
import UtilParam from './UtilParam'
import SatDesignParam from './SatDesignParam'
import CarrierOperation from './CarrierOperation'
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
      hpaBackoff_A: '',
      hpaBackoff_B: '',
      bandwidthVal: '',
      guardBandVal: '',
      // updatePara: [],

    }
  },
  components: {
    DesignParam,
    UtilParam,
    SatDesignParam,
    CarrierOperation,
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
    CiTotal

  },
  methods: {
    updatePara(paraData) {
      this.bandwidthVal = paraData.bandwidthVal;
      this.guardBandVal = paraData.guardBandVal;
    }
  },
  computed: {
    paraBW_A() {
      return {
      bandwidthVal: this.paraData.bandwidthValA,
      // selectedBwSel: this.paraData.selectedBwSel
      }
    },
    paraBW_B() {
      return {
      bandwidthVal: this.paraData.bandwidthValB,
      }
    },
  }
}
</script>
