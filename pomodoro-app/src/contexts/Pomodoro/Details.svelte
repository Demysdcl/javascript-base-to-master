<script lang="ts">
	import { secondsToFullTime } from '../../utils/timer-utils'

	export let completedCycles = 0
	export let completedPomodoros = 0
	export let workedTime = 0
	export let restedTime = 0
</script>

<div class="details">
	<p><strong>Completed pomodoros:</strong> {completedPomodoros}</p>
	<p><strong>Worked time:</strong> {secondsToFullTime(workedTime)}</p>
	<p><strong>Rested time:</strong> {secondsToFullTime(restedTime)}</p>
	<p><strong>Completed cycles:</strong> {completedCycles}</p>
</div>

<style>
	.details {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
