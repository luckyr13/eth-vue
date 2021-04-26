<template>
  <h1>Welcome!</h1>
  <app-home greeting="Hi!"></app-home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './views/Home.vue';

export default defineComponent({
  // type inference enabled
  components: {
  	'app-home': Home
  }
  
})

</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	body {
		height: 100%;

	}
</style>