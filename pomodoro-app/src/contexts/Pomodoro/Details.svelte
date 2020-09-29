<script lang="ts">
	import { secondsToFullTime } from '../../utils/timer-utils'

	export let completedCycles = 0
	export let completedPomodoros = 0
	export let workedTime = 0
	export let restedTime = 0
</script>

<style>
	.details {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>

<div class="details">
	<p><strong>Completed pomodoros:</strong> {completedCycles}</p>
	<p><strong>Worked time:</strong> {secondsToFullTime(workedTime)}</p>
	<p><strong>Rested time:</strong> {secondsToFullTime(restedTime)}</p>
	<p><strong>Completed cycles:</strong> {completedPomodoros}</p>
</div>
