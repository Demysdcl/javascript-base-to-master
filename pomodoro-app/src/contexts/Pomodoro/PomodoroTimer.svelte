<script lang="ts">
  import Progress from '../../components/Progress.svelte'
  import SButton from '../../components/SButton.svelte'
  import ConfigModal from './ConfigModal.svelte'
  import Details from './Details.svelte'
  import { pomodoroConfig } from './store'
  import Timer from './Timer.svelte'

  let mainTime = $pomodoroConfig.pomodoroTime
  let progressTime = $pomodoroConfig.pomodoroTime
  let pomodoroManager = 4
  let cycleManager = 0
  let interval: number
  let playing = false
  let show = false

  const counters = {
    completedCycles: 0,
    completedPomodoros: 0,
    workedTime: 0,
    restedTime: 0,
  }

  const createAudioPlayer = (src: string) => {
    const audioPlayer = document.createElement('audio') as HTMLAudioElement
    audioPlayer.src = src
    return audioPlayer
  }

  const bellFinish = createAudioPlayer('./assets/sounds/bell-finish.mp3')
  const bellStart = createAudioPlayer('./assets/sounds/bell-start.mp3')

  const configTimer = (seconds: number) => {
    mainTime = seconds
    progressTime = seconds
    console.log()
  }

  const working = () => {
    clearAndCreateInterval()
    $pomodoroConfig.status = 'working'
    configTimer($pomodoroConfig.pomodoroTime)
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
    $pomodoroConfig.status = 'resting'
    bellFinish.play()
    configTimer(
      long ? $pomodoroConfig.longRestTime : $pomodoroConfig.shortRestTime
    )

    if (long) {
      counters.completedCycles++
      cycleManager++
    }
    clearAndCreateInterval()
  }

  const clearAndCreateInterval = () => {
    clearInterval(interval)

    if ($pomodoroConfig.cycles === cycleManager) {
      configTimer($pomodoroConfig.pomodoroTime)
      $pomodoroConfig.status = 'stopped'
      cycleManager = 0
      return
    }

    interval = setInterval(() => {
      if (mainTime > 0) {
        mainTime--
        countWorkOrRest()
      } else {
        switchWorkOrRest()
      }
    }, 1000)
    playing = true
  }

  const switchWorkOrRest = () => {
    if ($pomodoroConfig.status === 'working') {
      counters.completedPomodoros++
      configResting()
    } else {
      working()
    }
  }

  const countWorkOrRest = () => {
    if ($pomodoroConfig.status === 'working') {
      counters.workedTime++
    } else {
      counters.restedTime++
    }
  }

  const configResting = () => {
    if (pomodoroManager > 1) {
      pomodoroManager--
      resting(false)
    } else {
      resting(true)
      pomodoroManager = 4
    }
  }

  const openModal = () => {
    show = true
    $pomodoroConfig.status = 'stopped'
    clearInterval(interval)
  }

  const closeModal = () => {
    configTimer($pomodoroConfig.pomodoroTime)
  }
</script>

<div class="pomodoro-container">
  <div class="pomodoro">
    <h1>Pomodoro Timer</h1>
    <i class="material-icons-outlined" on:click={openModal}>settings</i>
    <img src="./assets/images/pomodoro-timer.png" alt="pomodoro timer" />

    <h2>You are: {$pomodoroConfig.status}</h2>

    <Timer {mainTime} />

    <Progress
      max={progressTime}
      bind:value={mainTime}
      working={$pomodoroConfig.status === 'working'} />

    <div class="controls">
      <SButton
        title="work"
        icon
        className={$pomodoroConfig.status}
        on:click={working} />

      <SButton
        icon
        title="hotel"
        className={$pomodoroConfig.status}
        on:click={() => resting(false)} />

      <SButton
        icon
        title={playing ? 'pause' : 'play_arrow'}
        className={$pomodoroConfig.status}
        on:click={pause}
        style="display: {$pomodoroConfig.status === 'stopped' ? 'none' : 'block'}" />
    </div>

    <Details {...counters} />
  </div>
</div>

<ConfigModal bind:show on:close={closeModal} />

<style>
  .pomodoro-container {
    width: 100%;
    height: 100%;
  }

  .pomodoro {
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    border-radius: 4px;
    max-width: 640px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
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
    width: 50%;
    height: 45%;
  }

  i {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  i:hover {
    transform: rotate(360deg) scale(1.2, 1.2);
  }

  @media (max-width: 650px) {
    .pomodoro {
      max-width: 85%;
    }

    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    i {
      top: 10px;
      right: 10px;
    }
  }
</style>
