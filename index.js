const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  
  const boldedName = document.createElement('strong')
  boldedName.textContent = name

  details.appendChild(boldedName)
}

personForm.addEventListener('submit', handleSubmit)
