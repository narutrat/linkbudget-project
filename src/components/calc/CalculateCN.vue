<template>
<div>
  <div class="row" style="border-bottom:solid 2px; padding:5px; font-weight:bold; font-size:14px; background-color: #337AB7; color: white; text-shadow:1px 1px black">
    <div class="col-sm-4" style="text-align:left">CALCULATE C/N TOTAL</div>
    <div class="col-sm-2">Cl.sky</div>
    <div class="col-sm-2">Up Fade</div>
    <div class="col-sm-2">Down Fade</div>
    <div class="col-sm-2">Both Fade</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">C/I Up Adj. Sat (dB) (Key-in)</div>
    <div class="col-sm-2">ciUpTotal</div>
    <div class="col-sm-2">ciUpTotal</div>
    <div class="col-sm-2">ciUpTotal</div>
    <div class="col-sm-2">ciUpTotal</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">C/N (Uplink) (dB)</div>
    <div class="col-sm-2">cnUpClear</div>
    <div class="col-sm-2">cnUpUpfade</div>
    <div class="col-sm-2">cnUpClear</div>
    <div class="col-sm-2">cnUpUpfade</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">C/N (Downlink) (dB)</div>
    <div class="col-sm-2">cnDnClear</div>
    <div class="col-sm-2">cnDnUpfade</div>
    <div class="col-sm-2">cnDnfadeClear</div>
    <div class="col-sm-2">cnDnfadeUpfade</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">C/I (Intermodulation) (dB)</div>
    <div class="col-sm-2">interMod</div>
    <div class="col-sm-2">interMod</div>
    <div class="col-sm-2">interMod</div>
    <div class="col-sm-2">interMod</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">C/I (Co-Channel 20+ Xpol Iso.25) (dB)</div>
    <div class="col-sm-2">ciCoch</div>
    <div class="col-sm-2">ciCoch</div>
    <div class="col-sm-2">ciCoch</div>
    <div class="col-sm-2">ciCoch</div>
  </div>

  <div class="row" style="padding:5px; border-bottom:solid 1px">
    <div class="col-sm-4" style="text-align:left">C/I dn Adj. Sat (dB) (Key-in)</div>
    <div class="col-sm-2">ciDnTotal</div>
    <div class="col-sm-2">ciDnTotal</div>
    <div class="col-sm-2">ciDnTotal</div>
    <div class="col-sm-2">ciDnTotal</div>
  </div>

  <div class="row" style="padding:5px; border-bottom:solid 1px">
    <div class="col-sm-4" style="text-align:left">C/N TOTAL</div>
    <div class="col-sm-2">cnTotalClear</div>
    <div class="col-sm-2">cnTotalUpfade</div>
    <div class="col-sm-2">cnTotalDnfade</div>
    <div class="col-sm-2">cnTotalBothfade</div>
  </div>

  <div class="row" style="padding:5px; border-bottom:solid 1px">
    <div class="col-sm-4" style="text-align:left">Eb/No</div>
    <div class="col-sm-2">ebnoClear</div>
    <div class="col-sm-2">ebnoUpfade</div>
    <div class="col-sm-2">ebnoDnfade</div>
    <div class="col-sm-2">ebnoBothfade</div>
  </div>

  <div class="row" style="padding:5px">
    <div class="col-sm-4" style="text-align:left">Margin</div>
    <div class="col-sm-2">marginClear</div>
    <div class="col-sm-2">marginUpfade</div>
    <div class="col-sm-2">marginDnfade</div>
    <div class="col-sm-2">marginBothfade</div>
  </div>
</div>
</template>
