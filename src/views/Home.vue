<template>
  <h1 class="main-title">Welcome!</h1>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
  </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Modal from '../components/Modal.vue';

export default defineComponent({
  // type inference enabled
  components: {
  	'modal': Modal
  },
	setup() {
		const showModal = ref(false);
		return {
			showModal
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
</style>