<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import LabelInput from '../../components/LabelInput.svelte'
	import SButton from '../../components/SButton.svelte'
	import type { PomodoroType } from './PomodoroType'
	import { pomodoroConfig, updateConfig } from './store'

	export let show: boolean = false

	const editable: PomodoroType = { ...$pomodoroConfig }

	const dispatcher = createEventDispatcher()

	const handleSave = () => {
		show = false
		updateConfig(editable)
		dispatcher('close')
	}

	const handleClose = () => {
		show = false
		dispatcher('close')
	}
</script>

<style>
	.config-modal {
		display: none;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 10;
	}

	.show {
		display: flex;
	}

	.config-modal > .modal-content {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding: 20px 40px;
		border-radius: 10px;
		width: 350px;
	}

	h2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.close {
		cursor: pointer;
		transition: transform 0.3s;
	}

	.close:hover {
		transform: scale(1.5, 1.5);
	}

	.modal-content :global(button) {
		width: 100%;
	}

	@media (max-width: 360px) {
		.modal-content {
			width: 100%;
		}
	}
</style>

<div class="config-modal" class:show>
	<form class="modal-content" on:submit|preventDefault={handleSave}>
		<h2>
			<i class="material-icons-outlined">settings</i>
			Configuration
			<i class="material-icons-outlined close" on:click={handleClose}>close</i>
		</h2>

		<span>Values in seconds</span>

		<LabelInput title="Pomodoro time" bind:value={editable.pomodoroTime} />

		<LabelInput title="Short rest time" bind:value={editable.shortRestTime} />

		<LabelInput title="Long rest time" bind:value={editable.longRestTime} />

		<LabelInput title="Cycles" bind:value={editable.cycles} />

		<SButton type="submit" title="Save" />
	</form>
</div>
