/**
 * Returns the path parsed Url.
 * @param {String} contextPath 
 * @param {String} value 
 */
export const processUrl = (contextPath, value) => {
    return `${contextPath}/${value.trim().replaceAll(" ", "-").toLowerCase()}`
}

/**
 * Returns the date in the format "Jan 12 2003".
 * @param {Date} date 
 */
export const dateParser = (date) => {
    return date.toDateString().split(' ').slice(1).join(' ')
}