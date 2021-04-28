<template>
  <app-main-toolbar></app-main-toolbar>
  <app-home v-if="metamaskDetected"></app-home>
  <app-metamask-not-found v-else></app-metamask-not-found>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Web3Provider } from './web3';
import Home from './views/Home.vue';
import MetamaskNotFound from './views/MetamaskNotFound.vue';
import MainToolbar from './components/MainToolbar.vue';

export default defineComponent({
  // type inference enabled
  components: {
  	'app-home': Home,
  	'app-main-toolbar': MainToolbar,
    'app-metamask-not-found': MetamaskNotFound
  },
  setup() {
    let metamaskDetected = ref(false);
    
    // Init web3 component
    onMounted(async () => {
      try {
        const web3 = new Web3Provider();
        await web3.setWeb3();
        metamaskDetected.value = true;

      } catch (error) {
        console.log(`Error: ${error}`)
      }
    });

    return {
      metamaskDetected
    };
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

.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
</style>