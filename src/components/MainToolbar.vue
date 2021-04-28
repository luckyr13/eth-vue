<template>
  <div class="main-toolbar">
  	<img :src="mainImage">
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ethereum from '../assets/img/ethereum.png';

export default defineComponent({
  // type inference enabled
  setup() {
    return {
      mainImage: ethereum
    }
  },
})

</script>

<style scoped>
.main-toolbar {
  background-image: linear-gradient(to bottom right, #D3D7FC, #9495EB);
  text-align: center;
  box-shadow: 0px 5px 10px  #888888;
}

.main-toolbar img {
  width: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.toolbar-spacer {
  flex: 1 1 auto;
}
</style>