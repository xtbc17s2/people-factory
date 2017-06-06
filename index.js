const personForm = document.querySelector('form#personForm')

function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '100px'
  colorDiv.style.height = '50px'

  return colorDiv
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value

  details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${renderColor(favoriteColor).outerHTML}</li>
      <li>Age: ${age}</li>
    </ul>
  `
}

personForm.addEventListener('submit', handleSubmit)