const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value
  
  // details.innerHTML = `<em>${name}</em>`

  // const em = document.createElement('em')
  // em.textContent = name
  // details.appendChild(em)

  details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${favoriteColor}</li>
      <li>Age: ${age}</li>
    </ul>
  `
}

personForm.addEventListener('submit', handleSubmit)