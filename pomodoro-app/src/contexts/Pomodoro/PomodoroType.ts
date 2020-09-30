export type PomodoroType = {
	pomodoroTime: number
	shortRestTime: number
	longRestTime: number
	cycles: number
	status: 'working' | 'resting' | 'stopped'
}
