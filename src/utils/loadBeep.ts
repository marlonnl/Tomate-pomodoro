import endBeep from '../assets/audio/beep.mp3'

export function loadBeep() {
  const audio = new Audio(endBeep)
  audio.load()

  return () => audio.play()
}
