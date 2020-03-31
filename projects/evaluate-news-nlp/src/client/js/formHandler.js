import sdkGet from {sdkAPI}

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value

    const hashtags = sdkGet(formText)

    const getData = async () => {
        const res = await sdkGet(formText)
        try {
            const data = await hashtags.json()
            return data
        } catch (error) {
            console.log("error", error)
        }
        return res
    }

    getData(data)
    
}

export { handleSubmit }
