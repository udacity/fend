import { getInfo } from './getAPI'

function handleSubmit(event) {
//    const baseURL = 'https://api.aylien.com/api/v1/hashtags?language=en&input='
    event.preventDefault()


    //    https://api.aylien.com/api/v1/hashtags?language=en&input=https%3A%2F%2Fwww.nytimes.com%2F2020%2F03%2F11%2Fbusiness%2Feconomy%2Fmarkets-plunge-coronavirus.html&url=https%3A%2F%2Fwww.nytimes.com%2F2020%2F03%2F11%2Fbusiness%2Feconomy%2Fmarkets-plunge-coronavirus.html&
    // check what text was put into the form field

    let formText = document.getElementById('name').value
    const aylienInfo = Client.getInfo(formText)
    console.log(aylienInfo)
//    const returned = aylienInfo.hashtags
    const hashtagArray = JSON.stringify(aylienInfo)

    Client.printHashtags(hashtagArray)

    console.log("::: Form Submitted :::")


/*    fetch('http://localhost:3001/test')
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    }) */
//    document.getElementById('results').innerHTML = 'Yo'

}

export { handleSubmit }
