/**
 * Returns the path parsed Url.
 * @param {String} contextPath 
 * @param {String} value 
 */
export const processUrl = (contextPath, value) => {
    return `${contextPath}/${value.trim().replaceAll(" ", "-").toLowerCase()}`
}

/**
 * Returns the date in the format "2003-03-21".
 * @param {String} dateString
 */
export const dateParser = (dateString) => {
    const date = new Date(dateString)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return year + "-" + month + "-" + day
}