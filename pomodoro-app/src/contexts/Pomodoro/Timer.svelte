<script lang="ts">
	import { secondsToTime } from '../../utils/timer-utils'

	export let mainTime: number
</script>

<style>
	.timer {
		font-size: 6rem;
		text-align: center;
	}
</style>

<div class="timer">{secondsToTime(mainTime)}</div>
