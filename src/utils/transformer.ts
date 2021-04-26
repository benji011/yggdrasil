/**
 * Transforms seconds to Date
 *
 * @param seconds A number value representing date in seconds
 * @returns
 */
export const transformSecondsToDate = (seconds: number): string => {
  if (!seconds) {
    return new Date().toString()
  }
  const epochTime: Date = new Date(1970, 0, 1)
  // Transform as date object
  const dateObj: Date = new Date(epochTime.setSeconds(seconds))
  // Dates
  const month: number = dateObj.getMonth()
  const day: number = dateObj.getDate()
  const year: number = dateObj.getFullYear()
  // Time
  const hours: number = dateObj.getHours()
  const minutes: number = dateObj.getMinutes()
  const secs: number = dateObj.getMinutes()
  return `${year}-${month}-${day} ${hours}:${minutes}:${secs}`
}

/**
 * Transforms seconds to Date for thread header
 *
 * @param seconds A number value representing date in seconds
 * @returns
 */
export const transformThreadDate = (seconds: number): string => {
  return `Created at: ${transformSecondsToDate(seconds).split(' ')[0]}`
}
