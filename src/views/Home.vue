<template>
  <div v-if="!mainAccount" class="container text-center">
    <img class="ether-logo" :src="ethereumLogo">
    <button 
      @click="requestAccounts()"
      class="default-button">Connect wallet</button>
  </div>
  <div v-else class="container text-center">
    <h2>Welcome {{ mainAccount }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ethereumGif from '../assets/img/ethereum-animated.gif';
import { Web3Provider } from '../web3';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default defineComponent({
  // type inference enabled
  components: {
  },
  setup() {
    let mainAccount = ref('');

    // Init web3 component
    const requestAccounts = async () => {
      try {
        const web3 = new Web3Provider();
        await web3.setWeb3();
        mainAccount.value = await web3.requestAccounts();

        createToast(
          `Welcome!`,
          {
            position: 'bottom-center',
            type: 'success'
          }
        );

      } catch (error) {
        createToast(
          `Error: ${error.message}`,
          {
            position: 'bottom-center',
            type: 'danger'
          }
        );
      }
    };


    return {
      ethereumLogo: ethereumGif,
      mainAccount: mainAccount,
      requestAccounts
    }
  }
})

</script>

<style scoped>
.main-title{
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
}
.ether-logo {
  width: 240px;
  display: block;
  margin: 0 auto;
}

.container {
  width: 800px;
  margin: 0 auto;
  min-height: 400px;
  margin-top: 20px;
}

.default-button {
  margin-top: 1rem;
  padding: 12px;
  font-size: 18px;
  background-color: #9495EB;
  color: #FFF;
  cursor: pointer;

}
</style>