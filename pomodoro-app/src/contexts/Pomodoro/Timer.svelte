<script lang="ts">
	import { secondsToTime } from '../../utils/timer-utils'

	export let mainTime: number
</script>

<div class="timer">{secondsToTime(mainTime)}</div>

<style>
	.timer {
		font-size: 6rem;
		text-align: center;
	}

	@media (max-width: 360px) {
		.timer {
			font-size: 4rem;
		}
	}
</style>
