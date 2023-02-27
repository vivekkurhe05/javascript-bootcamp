let notes = []

const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if(notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.getElementById('notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')

        if(note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }

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

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        body: ''
    })

    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})