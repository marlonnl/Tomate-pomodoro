export function getNextCycle(currentCycle: number) {
  return currentCycle === 8 ? 1 : currentCycle + 1
  // return currentCycle === 8 || currentCycle === 0 ? 1 : currentCycle + 1
}
