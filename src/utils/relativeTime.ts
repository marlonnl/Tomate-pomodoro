export function getRelativeSeconds(remaining: number, totalSeconds: number) {
  const calc = (remaining * 100) / totalSeconds
  return calc
}
