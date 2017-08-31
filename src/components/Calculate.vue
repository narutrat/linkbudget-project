<template>
<div id="app">

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
