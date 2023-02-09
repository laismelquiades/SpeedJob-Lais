function render(array) {
    const frontUl = document.querySelector(".list__front")
    const backUl = document.querySelector(".list__back")
console.log(frontUl)
console.log(frontUl)
  
    for(let i = 0; i < array.length; i++) {
      const element = array[i]
  
      const card = createCard(element)
  console.log(card)
      if(array[i].type === 'Front') {
        frontUl.appendChild(card)
      } else {
        backUl.appendChild(card)
      }
    }
  }

function createCard(element) {
    const cardContainer = document.createElement('li')
    const cardSpanLogo = document.createElement('span')
    const cardLogo = document.createElement('p')
    const cardH2 = document.createElement('h2')
    const cardLocation = document.createElement('p')
    const cardDescription = document.createElement('p')
    const cardDiv = document.createElement('div')
    const cardModality = document.createElement('p')
    
    cardContainer.classList.add('card__container')
    cardLogo.classList.add('logo')
    cardH2.classList.add('title__cards')
    cardContainer.classList.add('card__container')
    cardLocation.classList.add('location')
    cardContainer.classList.add('card__container')
    cardDescription.classList.add('description')
    cardModality.classList.add('modality')

   
    cardContainer.append(cardSpanLogo, cardH2, cardLocation, cardDescription, cardDiv)
    cardSpanLogo.appendChild(cardLogo)
    cardDiv.appendChild(cardModality)

    cardLogo.innerText = 'G'
    cardH2.innerText =  element.title
    cardLocation.innerText = 'Curitiba-Paraná'
    cardDescription.innerText = element.descrription
    cardModality.innerText = element.modality

return cardContainer
}

render(frontEndJobs)
render(backEndJobs)
