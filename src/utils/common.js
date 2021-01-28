export const processUrl = (contextPath, value) => {
    return `${contextPath}/${value.trim().replaceAll(" ", "-").toLowerCase()}`
}

export const dateParser = (date) => {
    return date.toDateString().split(' ').slice(1).join(' ')
}