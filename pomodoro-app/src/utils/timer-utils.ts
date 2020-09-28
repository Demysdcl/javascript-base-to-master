export function secondsToTime(seconds: number): string {
	return Array.of(Math.floor(seconds / 60), seconds % 60)
		.map((n) => n.toString().padStart(2, '0'))
		.join(':')
}
