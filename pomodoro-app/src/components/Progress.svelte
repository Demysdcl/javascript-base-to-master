<script lang="ts">
	export let max: number
	export let value: number
	export let working: boolean = false

	$: percent = (value / max) * 100
</script>

<style>
	.progress {
		background-color: #fff;
		border: 0.7px solid #000;
		height: 10px;
		border-radius: 10px;
		transition: all 300ms;
	}

	.progress div {
		transition: all 0.3s linear;
		background-color: var(--primary-color);
		height: 100%;
		border-radius: 10px;
		position: relative;
	}

	.progress div::after {
		content: '';
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 0.5px solid #000;
		background-color: var(--primary-color);
		position: absolute;
		right: -10px;
		top: -60%;
		transition: all 150ms linear;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}

	.working {
		background-color: var(--secondary-color) !important;
	}

	.working::after {
		background-color: var(--secondary-color) !important;
	}
</style>

<div class="progress">
	<div style="width:{percent}%" class:working />
</div>
