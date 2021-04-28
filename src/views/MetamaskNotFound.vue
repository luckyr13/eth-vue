<template>
  <div class="text-center">
    <h1 class="main-title">ERROR</h1>
    <img class="metamask-logo" :src="metamaskLogo">
    <h2 class="text-center">Metamask not found</h2>
    <div class="text-center">
      Please install Metamask to continue!
    </div>
    <a href="https://metamask.io">
      https://metamask.io
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import metamaskImg from '../assets/img/metamask.png';

export default defineComponent({
  setup() {
    return { metamaskLogo: metamaskImg };
  }
});

</script>

<style scoped>
.container {

}

.main-title{
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
}

.metamask-logo {
  width: 200px;
  margin-bottom: 20px;
}

a {
  color: #090D45;
}

</style>