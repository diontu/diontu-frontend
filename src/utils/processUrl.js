export default function (contextPath, value) {
    return `${contextPath}/${value.trim().replaceAll(" ", "-").toLowerCase()}`
}