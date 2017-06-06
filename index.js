const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  
  // details.innerHTML = `<em>${name}</em>`

  const em = document.createElement('em')
  em.textContent = name
  details.appendChild(em)
}

personForm.addEventListener('submit', handleSubmit)