<template>
<div>
  <div class="col-sm-1">
    <select class="btn btn-default" @change="tpChanged($event.target.value)">
      <option value="">Select Transponder</option>
      <option v-for="transponder in tpOptions" :value="transponder.name">
        {{ transponder.name }}
      </option>
    </select>
  </div>

  <div class="col-sm-1"></div>


</div>
</template>

<script>
export default {
  props: ['beams'],
  data() {
    return {
      tpOptions: [],
    //   tpDatabase: [{
    //       beams: 'Standard-C',
    //       tpInfo: [{
    //           transponders: '1V',
    //           satelliteMode: 'FGM',
    //           tpBW: 36,
    //           defaultAtten: 9,
    //           eirpPeak: 40.53,
    //           downFrq: 3.72,
    //           upFrq: 5.945,
    //           singleIbo: 0,
    //           twoIbo: 1.8,
    //           multiIbo: 5.2,
    //           singleObo: 0,
    //           twoObo: 2.2,
    //           multiObo: 4.2,
    //           singleInt: 25,
    //           twoInt: 18.78,
    //           multiInt: 17.00
    //         },
    //         {
    //           transponders: '2V',
    //           satelliteMode: 'ALC',
    //           tpBW: 36,
    //           defaultAtten: 8,
    //           eirpPeak: 40.53,
    //           downFrq: 3.76,
    //           upFrq: 5.985,
    //           singleIbo: 0,
    //           twoIbo: 1.8,
    //           multiIbo: 5.2,
    //           singleObo: 0,
    //           twoObo: 2.2,
    //           multiObo: 4.2,
    //           singleInt: 25,
    //           twoInt: 18.78,
    //           multiInt: 17.00
    //         },
    //         {
    //           transponders: '3V',
    //           satelliteMode: 'FGM',
    //           tpBW: 36,
    //           defaultAtten: 8,
    //           eirpPeak: 40.53,
    //           downFrq: 3.8,
    //           upFrq: 6.025,
    //           singleIbo: 0,
    //           twoIbo: 1.8,
    //           multiIbo: 5.2,
    //           singleObo: 0,
    //           twoObo: 2.2,
    //           multiObo: 4.2,
    //           singleInt: 25,
    //           twoInt: 18.78,
    //           multiInt: 17.00
    //         }
    //       ]
    //     },
    //     {
    //       beams: 'C1',
    //       tpInfo: [{
    //           transponders: '1H',
    //           satelliteMode: 'FGM',
    //           tpBW: 36,
    //           defaultAtten: 9,
    //           eirpPeak: 41,
    //           downFrq: 3.72,
    //           upFrq: 5.945,
    //           singleIbo: 5.25,
    //           twoIbo: 1.5,
    //           multiIbo: 5.7,
    //           singleObo: 3,
    //           twoObo: 0.5,
    //           multiObo: 3.5,
    //           singleInt: 25,
    //           twoInt: 20,
    //           multiInt: 16.67
    //         },
    //         {
    //           transponders: '2H',
    //           satelliteMode: 'ALC',
    //           tpBW: 36,
    //           defaultAtten: 8,
    //           eirpPeak: 41,
    //           downFrq: 3.76,
    //           upFrq: 5.985,
    //           singleIbo: 5.25,
    //           twoIbo: 1.5,
    //           multiIbo: 5.7,
    //           singleObo: 3,
    //           twoObo: 0.5,
    //           multiObo: 3.5,
    //           singleInt: 25,
    //           twoInt: 20,
    //           multiInt: 16.67
    //         },
    //         {
    //           transponders: '3H',
    //           satelliteMode: 'FGM',
    //           tpBW: 36,
    //           defaultAtten: 8,
    //           eirpPeak: 41,
    //           downFrq: 3.8,
    //           upFrq: 6.025,
    //           singleIbo: 5.25,
    //           twoIbo: 1.5,
    //           multiIbo: 5.7,
    //           singleObo: 3,
    //           twoObo: 0.5,
    //           multiObo: 3.5,
    //           singleInt: 25,
    //           twoInt: 20,
    //           multiInt: 16.67
    //         }
    //       ]
    //     }
    //   ],
    }
  },
  // computed: {
  //   tpOptions() {
  //     let result = this.tpDatabase.find(x => x.beams === this.beams);
  //     return result ? result.tpInfo : [];
  //   }
  // },
  methods: {
    tpChanged(value) {
      // console.log(JSON.stringify(value, undefined, 2));
      //
      // // var tpObj = this.tpOptions.transponders.find(x => x.transponders === value);
      let dataTp = this.tpOptions.find(x => value === x.name)
      console.log(dataTp);
      this.$emit('tpSelected', dataTp);
    }
    },
    watch: {
      'beams' (newVal) {
        this.$http.post('transponders', {'beam':newVal}).then(response => {
          this.tpOptions = response.body.transponders;
          console.log(response);
        }).catch((e) => {
          console.log(e);
        })
      }
    }

}
</script>
