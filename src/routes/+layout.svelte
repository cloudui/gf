<script>
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->
	<slot />

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
