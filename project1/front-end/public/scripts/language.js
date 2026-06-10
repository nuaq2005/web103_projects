const renderLanguage = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/languages')
    const data = await response.json()
    const languageContent = document.getElementById('language-content')
    let language
    if(data){
        language = data.find(language => language.id === requestedID)
        document.getElementById('image').src = language.image
        document.getElementById('name').textContent = language.name
        document.getElementById('creator').textContent = 'Creator: ' + language.creator
        document.getElementById('yearCreated').textContent = 'Created: ' + language.yearCreated
        document.getElementById('description').textContent = language.description
        document.title = `Language Learner - ${language.name}`
    } else{
        const message = document.createElement('h2')
        message.textContent = 'Not Available 😞'
        languageContent.appendChild(message)
    }
}

renderLanguage()