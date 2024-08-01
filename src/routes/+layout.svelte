<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->
	<main>
		<slot />
	</main>

</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
		height: 100vh;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
