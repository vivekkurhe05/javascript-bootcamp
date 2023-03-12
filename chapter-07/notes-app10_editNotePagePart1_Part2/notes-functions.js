// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })

    if(noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generare the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function() {
        removeNote(note.id)
        saveNotes(notes) 
        renderNotes(notes, filters)
    })

    if(note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.getElementById('notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.getElementById('notes').append(noteEl)
    })
}