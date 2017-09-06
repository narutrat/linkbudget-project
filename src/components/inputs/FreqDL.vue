<template>
  <span :value="freqdownlink">
    Frequency: {{ freqdownlink }}
  </span>
</template>

<script>
  export default{
    props: ['transponders'],
    data(){
      return {
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
      }
    },
    computed: {
      freqdownlink() {
        let result = this.tpConfigDatabase.find(x => x.transponders === this.transponders);
        return result ? result.downFrq : [];
      }
    },
    // methods: {
    //   freqdownlink(value) {
    //     this.$emit('tpFreq', value);
    //   }
    // }
  }
</script>
