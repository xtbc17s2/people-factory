const personForm = document.querySelector('#personForm')

function renderColor(color) {
  const div = document.createElement('div')
  div.style.backgroundColor = color
  div.style.width = '100px'
  div.style.height = '50px'

  return div
}

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.textContent = `${label}: ${value}`

  return item
}

function renderList(personData) {
  const list = document.createElement('ul')

  // ['name', 'favoriteColor', 'age']
  Object.keys(personData).map(function(label) {
    const item = renderListItem(label, personData[label])
    list.appendChild(item)
  })

  return list
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  const person = {
    name: f.personName.value,
    favoriteColor: f.favoriteColor.value,
    age: f.age.value,
  }
  
  const list = renderList(person)
  details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)
