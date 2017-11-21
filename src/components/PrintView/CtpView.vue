<template>
<div>
  <!-- <router-view></router-view> -->
  <Ctp :ctpPrint="ctpPrint"></Ctp>

  <!-- {{Test}} -->
  <!-- {{Test.satAndBeam}} -->
</div>
</template>

<script>
import Ctp from './Ctp'

export default {
  data () {
    return {
      ctpPrint: {}
    }
  },
  components: {
    Ctp
  },
  mounted () {
    this.ctpPrint = this.$session.get('saveData')
  },
  computed: {
    Test() {
      return this.$session.get('saveData')
    }
  }
}
</script>
