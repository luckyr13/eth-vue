<template>
  <p>World! {{ greeting }} </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // type inference enabled
  data () {
  	return {

  	}
  },
  props: {
  	greeting: String
  }
})

</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>