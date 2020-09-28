export class Chronometer {
  private let timerId: number
  private let start: Date
  private let remaing = this.delay

  constructor(public callback: CallableFunction, public delay: number) {}

  pause() {
    clearTimeout(this.timerId)
    this.remaining -= new Date() - this.start;
    console.log(this.remaing)
  }

	resume() {
    this.start = new Date()
		this.timerId = setTimeout(() => {
      this.remaing = this.delay
			this.resume()
			this.callback()
		}, this.delay)
  }

  reset() {
    this.remaing = this.delay
  }

}
