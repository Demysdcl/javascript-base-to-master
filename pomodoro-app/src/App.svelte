<script lang="ts">
	import PomodoroTimer from './contexts/Pomodoro/PomodoroTimer.svelte'
	import { pomodoroConfig } from './contexts/Pomodoro/store'
</script>

<style>
	main {
		text-align: center;
		width: 100%;
		padding-top: 70px;
		height: 100%;
		background-color: var(--primary-color);
		line-height: 1.5;
		transition: background-color 300ms ease-in-out;
	}

	.working {
		background-color: var(--secondary-color);
	}

	.hidden {
		display: none;
	}

	@media (max-width: 520px) {
		main {
			padding-top: 10px;
		}
	}
</style>

<main class={$pomodoroConfig.status}>
	<PomodoroTimer />
</main>
