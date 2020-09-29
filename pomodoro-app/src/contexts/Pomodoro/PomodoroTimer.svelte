<script lang="ts">
	import Progress from '../../components/Progress.svelte'
	import SButton from '../../components/SButton.svelte'
	import Details from './Details.svelte'
	import Timer from './Timer.svelte'

	export let pomodoroTimer: number
	export let shortRestTime = 300
	export let longRestTime = 900
	export let cycles = 4
	export let status: 'working' | 'resting' | 'stopped'

	const createAudioPlayer = (src: string) => {
		const audioPlayer = document.createElement('audio') as HTMLAudioElement
		audioPlayer.src = src
		return audioPlayer
	}

	const bellFinish = createAudioPlayer('./assets/sounds/bell-finish.mp3')
	const bellStart = createAudioPlayer('./assets/sounds/bell-start.mp3')

	let mainTime = pomodoroTimer
	let progressTime = pomodoroTimer
	let interval: number
	let playing = false
	let cycleManager = cycles

	const counters = {
		completedCycles: 0,
		completedPomodoros: 0,
		workedTime: 0,
		restedTime: 0,
	}

	const working = () => {
		clearAndCreateInterval()
		status = 'working'
		mainTime = pomodoroTimer
		progressTime = pomodoroTimer
		bellStart.play()
	}

	const pause = () => {
		if (playing) {
			clearInterval(interval)
			playing = false
		} else {
			clearAndCreateInterval()
		}
	}

	const resting = (long: boolean) => {
		status = 'resting'
		bellFinish.play()
		const getRestinValue = () => (long ? longRestTime : shortRestTime)
		mainTime = getRestinValue()
		progressTime = getRestinValue()
		long && counters.completedPomodoros++
		clearAndCreateInterval()
	}

	const clearAndCreateInterval = () => {
		clearInterval(interval)
		interval = setInterval(() => {
			if (mainTime > 0) {
				mainTime--
				if (status === 'working') {
					counters.workedTime++
				} else {
					counters.restedTime++
				}
			} else {
				if (status === 'working') {
					counters.completedCycles++
					configResting()
				} else {
					working()
				}
			}
		}, 1000)
		playing = true
	}

	const configResting = () => {
		if (cycleManager > 1) {
			cycleManager--
			resting(false)
		} else {
			resting(true)
			cycleManager = cycles
		}
	}
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

	img {
		width: 250px;
		height: 150px;
	}
</style>

<div class="pomodoro">
	<h1>Pomodoro Timer</h1>
	<img src="./assets/images/pomodoro-timer.png" alt="pomodoro timer" />

	<h2>You are: {status}</h2>

	<Timer {mainTime} />

	<Progress
		max={progressTime}
		bind:value={mainTime}
		color={status === 'working' ? '#ef5d50' : '#41e1ba'} />

	<div class="controls">
		<SButton title="work" className={status} on:click={working} />

		<SButton title="Rest" className={status} on:click={() => resting(false)} />

		<SButton
			title={playing ? 'Pause' : 'Play'}
			className={status}
			on:click={pause}
			style="display: {status === 'stopped' ? 'none' : 'block'}" />
	</div>

	<Details {...counters} />
</div>
