<script lang="ts">
	export let title = 'Insert title'
	export let className = ''
</script>

<style>
	button {
		background-color: #41e1ba;
		border: none;
		cursor: pointer;
		padding: 10px 25px;
		color: #000;
		transition: background-color 300ms ease-in-out;
		margin: 20px auto;
	}

	.working {
		background-color: #ef5d50;
		color: #fff;
	}
</style>

<button class={className} on:click>{title}</button>
