<script lang="ts">
	import PomodoroTimer from './contexts/Pomodoro/PomodoroTimer.svelte'

	let status: 'working' | 'resting' | 'stopped' = 'stopped'
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		height: 100%;
		background-color: #41e1ba;
		line-height: 1.5;
		transition: background-color 300ms ease-in-out;
	}

	.working {
		background-color: #ef5d50;
	}

	.hidden {
		display: none;
	}
</style>

<main class={status}>
	<PomodoroTimer
		pomodoroTimer={1500}
		shortRestTime={300}
		longRestTime={900}
		cycles={4}
		bind:status />
</main>
