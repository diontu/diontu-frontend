/**
 * Returns the path parsed Url.
 * @param {String} contextPath
 * @param {String} value
 */
export const processUrl = (contextPath, value) => {
  return `${contextPath}/${value.trim().replaceAll(" ", "-").toLowerCase()}`
}

/**
 * Returns the date in the format "YYYY-MMM-DD" (e.g. 1998-Jan-21). 
 * @param {String} dateString
 */
export const dateParser = (dateString) => {
  const date = new Date(dateString)
  let year = date.getFullYear()
  let monthIndex = date.getMonth()
  let day = date.getDate()
  let month

  switch (monthIndex) {
    case 0: 
      month = "Jan"
      break
    case 1: 
      month = "Feb"
      break
    case 2: 
      month = "Mar"
      break
    case 3: 
      month = "Apr"
      break
    case 4: 
      month = "May"
      break
    case 5: 
      month = "Jun"
      break
    case 6: 
      month = "Jul"
      break
    case 7: 
      month = "Aug"
      break
    case 8: 
      month = "Sep"
      break
    case 9: 
      month = "Oct"
      break
    case 10: 
      month = "Nov"
      break
    case 11: 
      month = "Dec"
      break
    default:
      break
  }
  return month + " " + day + ", " + year;
}
