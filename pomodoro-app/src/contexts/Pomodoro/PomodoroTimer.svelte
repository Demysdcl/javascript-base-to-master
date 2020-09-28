<script lang="ts">
	import SButton from '../../components/SButton.svelte'
	import Timer from './Timer.svelte'

	export let defaultPomodoroTimer: number
	/* export let shortRestTime = 300
	export let longRestTime = 900
	export let cycles = 4 */
	export let status: 'working' | 'interval'
	let mainTime = defaultPomodoroTimer
	let interval: number

	const resume = () => {
		interval = setInterval(() => mainTime--, 1000)
		status = 'working'
	}

	const pause = () => {
		clearInterval(interval)
		status = 'interval'
	}

	const reset = () => (mainTime = defaultPomodoroTimer)
</script>

<style>
	.pomodoro {
		background-color: #fff;
		margin: 50px auto;
		padding: 20px;
		border-radius: 4px;
		max-width: 640px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	h2 {
		font-size: 24px;
		text-align: center;
	}

	.controls {
		display: flex;
		justify-content: space-evenly;
	}

	.details {
		margin: 20px 0;
	}
</style>

<div class="pomodoro">
	<h2>You are: {status}</h2>

	<Timer {mainTime} />

	<div class="controls">
		<SButton title="Resume" className={status} on:click={resume} />

		<SButton title="Pause" className={status} on:click={pause} />

		<SButton title="Reset" className={status} on:click={reset} />
	</div>

	<div class="details">
		<p />
		<p />
		<p />
		<p />
	</div>
</div>
