/**
 *
 * Utils to return the current date in UTC format
 *
 */

const addZeroToDateAndTime = (number: number): string | number => {
  if (number < 10) {
    const formattedNumber = `0${+number}`
    return formattedNumber
  }

  return number
}

const currentDateUTCFormatted = `${new Date().getFullYear()}-${addZeroToDateAndTime(
  new Date().getMonth() + 1
)}-${addZeroToDateAndTime(new Date().getDate())}`

export default currentDateUTCFormatted
