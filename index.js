const peopleFactory = {
  init: function(formSelector) {
    const personForm = document.querySelector(formSelector)
    personForm.addEventListener('submit', this.handleSubmit.bind(this))
  },

  renderColor: function(color) {
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div
  },

  renderListItem: function(label, value) {
    const item = document.createElement('li')
    const dt = document.createElement('dt')
    const dd = document.createElement('dd')
    dt.textContent = label
    dd.innerHTML = value
    item.appendChild(dt)
    item.appendChild(dd)
    return item
  },

  renderList: function(personData) {
    const list = document.createElement('dl')

    // ['name', 'favoriteColor', 'age']
    Object.keys(personData).map((label) => {
      const item = this.renderListItem(label, personData[label])
      list.appendChild(item)
    })

    return list
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')

    const person = {
      name: f.personName.value,
      favoriteColor: this.renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    }
    
    const list = this.renderList(person)
    details.appendChild(list)
  },
}

peopleFactory.init('#personForm')
