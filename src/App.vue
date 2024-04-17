<template>
	<img alt="Vue logo" class="logo" src="./assets/vue.svg" />
	<img alt="Vite logo" class="logo" src="/vite.svg" />
  <HeaderComponent></HeaderComponent>
	<router-view></router-view>
</template>

<script>

import HeaderComponent from "./components/HeaderComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",

	components: {
		HeaderComponent
	},
	
};
</script>
<style scoped>
.logo {
	height: 6em;
	will-change: filter;
	transition: filter 300ms;
}
</style>
