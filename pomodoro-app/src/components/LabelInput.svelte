<script lang="ts">
	export let title: string
	export let value: number
</script>

<label> <strong>{title}</strong> <input type="number" bind:value /> </label>

<style>
	label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px 0;
		width: 100%;
	}

	input {
		padding: 5px;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		width: 100%;
	}
</style>
