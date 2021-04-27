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
    const mainImage = computed(() => ethereum);
    return {
      mainImage
    }
  },
})

</script>

<style scoped>
.main-toolbar {
  background-image: linear-gradient(to bottom right, #D3D7FC, #9495EB);
  text-align: center;
}

.main-toolbar img {
  width: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.toolbar-spacer {
  flex: 1 1 auto;
}
</style>