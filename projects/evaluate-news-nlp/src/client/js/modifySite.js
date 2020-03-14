
function printHashtags(hashtagArray) {
    console.log(hashtagArray)
    const tags = hashtagArray.hashtags
    for (tag in tags) {
        document.getElementById("results").innerHTML = `<div><h3>{$tag}</h3></div>`
    }
}

export { printHashtags }