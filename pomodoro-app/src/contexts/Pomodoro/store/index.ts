import { writable } from 'svelte/store'
import type { PomodoroType } from '../PomodoroType'

const initial: PomodoroType = {
	pomodoroTime: 1500,
	shortRestTime: 300,
	longRestTime: 900,
	cycles: 4,
	status: 'stopped',
}

const configItem = localStorage.getItem('config')

export const pomodoroConfig = writable(
	configItem ? JSON.parse(configItem) : initial,
)

export const updateConfig = (item: PomodoroType): void => {
	localStorage.setItem('config', JSON.stringify(item))
	pomodoroConfig.update(() => item)
}
