interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement
  playButton: HTMLButtonElement
  stopButton: HTMLButtonElement
  fullscreenSpan: HTMLSpanElement
}

interface VideoPlayerProtocol {
  playToggle(): void
  stop(): void
  initEvents(): void
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement
  private playButton: HTMLButtonElement
  private stopButton: HTMLButtonElement
  private fullscreenSpan: HTMLSpanElement

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
    this.fullscreenSpan = videoPlayerElements.fullscreenSpan
  }

  initEvents(): void {

    this.playButton.addEventListener('click', () => {
      this.playToggle()
    })

    this.stopButton.addEventListener('click', () => {
      this.stop()
    })

    this.fullscreenSpan.addEventListener('click', () => {
      this.videoPlayer.requestFullscreen()
    })
  }

  playToggle(): void {
    if(this.videoPlayer.paused) {
      this.videoPlayer.play()
      this.playButton.innerText = 'Pause'
    } else {
      this.videoPlayer.pause()
      this.playButton.innerText = 'Play'
    }
  }
  stop(): void {
    this.videoPlayer.pause()
    this.videoPlayer.currentTime = 0
    this.playButton.innerText = 'Play'
  }

}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop')  as HTMLButtonElement,
  fullscreenSpan: document.querySelector('.fullscreen') as HTMLSpanElement
})

videoPlayer.initEvents()
