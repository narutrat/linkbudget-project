<template>
<select class="btn btn-default" @change="modCodeChanged($event.target.value)">
    <option>Select Modulation Code</option>
    <option v-for="mcg in mcgs" :value="mcg.name">
      {{mcg.name}}
    </option>
  </select>
</template>

<script>
export default {
  props: ['mcgs'], // Get the satellite name from parent to create beam options
  data() {
    return {
      // modCode: [],
    }
  },
  // computed: {
  //   modOptions() {
  //     let result = this.modemDatabase.find(x => x.label === this.modem);
  //     return result ? result.modSpec : [];
  //   }
  // },
  methods: {
    modCodeChanged(value) {
      console.log(typeof value);
      console.log(JSON.stringify(value, undefined, 2));

      var modCodeObj = this.mcgs.find(x => x.name === value);
      this.$emit('modCodeSelected', modCodeObj);
    }
  }
}
</script>
