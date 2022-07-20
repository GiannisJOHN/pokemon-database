function changeLimitOfUrl(url, limit) {
    let lastIndexOfLimit = url.lastIndexOf('limit')
    let slicedUrl = url.slice(0, lastIndexOfLimit)
    let modifiedUrl = `${slicedUrl}limit=${limit}`
    return modifiedUrl
}

export default changeLimitOfUrl