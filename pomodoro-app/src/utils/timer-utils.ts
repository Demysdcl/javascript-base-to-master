export function secondsToTime(seconds: number): string {
	return Array.of(Math.floor(seconds / 60), seconds % 60)
		.map((n) => n.toString().padStart(2, '0'))
		.join(':')
}

export function secondsToFullTime(seconds: number) {
	return Array.of(
		Math.floor(seconds / 3600),
		Math.floor((seconds % 3600) / 60),
		(seconds % 3600) % 60,
	)
		.map((n) => n.toString().padStart(2, '0'))
		.join(':')
}
