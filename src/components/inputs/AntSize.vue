
<template>
  <input v-model="antSize" style="text-align:center" @input="antSizeChanged($event.target.value)"/>
</template>

<script>
// import DesignParam from './calc/DesignParam'

export default {
  // props: ['satelliteName'], // Get the satellite name from parent to create beam options
  data() {
    return {
      antSize: '',
      iflLoss: '',
      misAntUpA: '',
      misAntDnA: ''

    }
  },
  methods: {
    antSizeChanged() {
      // let deepInVal = this.deepIn;
      if (this.antSize <= 3.8) {
        this.iflLoss = 2;
        this.misAntUpA = 0.2;
        this.misAntDnA = 0.2;
      } else if (this.antSize > 3.8 && this.antSize <= 6.1) {
        this.iflLoss = 2.5;
        this.misAntUpA = 0.3;
        this.misAntDnA = 0.3;
      } else {
        this.iflLoss = 3;
        this.misAntUpA = 0.3;
        this.misAntDnA = 0.3;
      }
      this.$emit('antSizeSelected', {
        antSize: this.antSize,
        iflLoss: this.iflLoss,
        misAntUpA: this.misAntUpA,
        misAntDnA: this.misAntDnA,

      });

    },
    // lossValueA(value) {
    //   if (this.antSizeA <= 3.8) {
    //     this.iflLoss = 2;
    //     this.misAntUpA = 0.2;
    //     this.misAntDnA = 0.2;
    //   } else if (this.antSizeA > 3.8 && this.antSizeA <= 6.1) {
    //     this.iflLoss = 2.5;
    //     this.misAntUpA = 0.3;
    //     this.misAntDnA = 0.3;
    //   } else {
    //     this.iflLoss = 3;
    //     this.misAntUpA = 0.3;
    //     this.misAntDnA = 0.3;
    //   }
    // },
  }
}
</script>
