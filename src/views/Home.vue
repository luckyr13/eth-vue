<template>
  <h1 class="main-title">Welcome!</h1>
  <modal-button :showModalInit="false"></modal-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalButton from '../components/ModalButton.vue';

export default defineComponent({
  // type inference enabled
  components: {
  	'modal-button': ModalButton
  },
})

</script>

<style scoped>
.main-title{
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
}
</style>