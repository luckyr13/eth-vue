<template>
  <app-main-toolbar></app-main-toolbar>
  <app-home></app-home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './views/Home.vue';
import MainToolbar from './components/MainToolbar.vue';

export default defineComponent({
  // type inference enabled
  components: {
  	'app-home': Home,
  	'app-main-toolbar': MainToolbar
  }
  
})

</script>

<style>
* {
	margin: 100 !important;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: #090D45;
  color: #FFF;
}
</style>