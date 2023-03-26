let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })

    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})

// The storage event fires when any of the data in local storage changes
// You can test by opening home page on one window and edit page on another window
// Change in edit page will reflect on home page title dynamically without having to refresh it.

window.addEventListener('storage', function (e) {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})