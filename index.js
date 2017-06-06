const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value

  const colorDiv = `
    <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
  `
  
  // const boldedName = document.createElement('strong')
  // boldedName.textContent = name
  // details.appendChild(boldedName)

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`

  const colorItem = document.createElement('li')
  colorItem.innerHTML = `Favorite Color: ${colorDiv}`

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`

  const list = document.createElement('ul')
  list.appendChild(nameItem)
  list.appendChild(colorItem)
  list.appendChild(ageItem)

  details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)
