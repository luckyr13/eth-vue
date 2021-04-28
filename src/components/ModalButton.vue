<template>
	<button 
		class="default-button"
		id="show-modal" 
		@click="showModal = true">{{ title }}</button>
  <!-- use the modal component, pass in the prop -->
  <modal 
  	v-if="showModal" 
  	@close="showModal = false">
    <template v-slot:header>
      <h3>{{ title }}</h3>
    </template>
  </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Modal from './Modal.vue';

export default defineComponent({
	props: {
		showModalInit: Boolean,
		title: String
	},
	components: {
		'modal': Modal
	},
	setup(props) {
		const showModal = ref(props.showModalInit);
		const title = ref(props.title);

		return {
			showModal,
			title
		}
	}
});
</script>

<style scoped>
.default-button {
  margin-top: 1rem;
  padding: 6px;
  font-size: 14px;
  background-color: #9495EB;
  color: #000;
}

</style>