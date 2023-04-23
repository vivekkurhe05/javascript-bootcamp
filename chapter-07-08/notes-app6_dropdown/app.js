const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.getElementById('notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.getElementById('notes').append(noteEl)
    })
}

renderNotes(notes, filters)

const searchbox = document.getElementById('search-text')
searchbox.setAttribute('placeholder', 'Filter todos')
searchbox.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    if(e.target.checked) {
        document.getElementById('notes').style.display = 'none'
    } else {
        document.getElementById('notes').style.display = 'block'
    }
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})