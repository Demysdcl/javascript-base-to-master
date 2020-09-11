interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement
  playButton: HTMLButtonElement
  stopButton: HTMLButtonElement
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

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }

  playToggle(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
  initEvents(): void {
    throw new Error("Method not implemented.");
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop')  as HTMLButtonElement
})
