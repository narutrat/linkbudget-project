<template>
<div>
  <Jrf :jrfPrint="jrfPrint"></Jrf>

  <!-- {{Test}} -->
</div>
</template>

<script>
import Jrf from './Jrf'

export default {
  data () {
    return {
      jrfPrint: {}
    }
  },
  components: {
    Jrf
  },
  mounted () {
    this.jrfPrint = this.$session.get('jrfData')
  },
  computed: {
    Test() {
      return this.$session.get('jrfData')
    }
  }
}
</script>
