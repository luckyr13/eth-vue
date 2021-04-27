<template>
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
import Modal from './Modal.vue';

export default defineComponent({
	props: {
		showModalInit: Boolean
	},
	components: {
		'modal': Modal
	},
	setup(props) {
		const showModal = ref(props.showModalInit);
		return {
			showModal
		}
	}
});
</script>

<style scoped>
</style>