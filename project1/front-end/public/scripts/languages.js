const mainContent = document.querySelector('#main-content')

const renderLanguages = async () => {
   const response = await fetch ('/languages')
   const data = await response.json()

   const mainContent = document.getElementById('main-content')

   if (data){
    data.map(language => {
        const card = document.createElement('div')
        card.classList.add('card')

        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
        topContainer.style.backgroundImage = `url(${language.image})`

        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')
        
        const name = document.createElement('h3')
        name.textContent = language.name
        bottomContainer.appendChild(name)

        const creator = document.createElement('h4')
        creator.textContent = language.creator
        bottomContainer.appendChild(creator)

        const yearCreated = document.createElement('p')
        yearCreated.textContent = 'Created: ' + language.yearCreated
        bottomContainer.appendChild(yearCreated)

        const description = document.createElement('p')
        description.textContent =  language.description
        bottomContainer.appendChild(description)

        const link = document.createElement('a')
        link.textContent = 'Read More >'
        link.setAttribute('role', 'button')
        link.href = `/languages/${language.id}`
        bottomContainer.appendChild(link)

        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
        mainContent.appendChild(card)
    })
   } else {
    const message = document.createElement('h2')
    message.textContent = 'No Terms Available 😞'
    mainContent.appendChild(message)
   }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
} else {
    renderLanguages()
}