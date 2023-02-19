const btn1 = document.querySelector('#create-note')
btn1.addEventListener('click', (e) => {
    e.target.textContent = 'The button was clicked'
})

const btn2 = document.querySelector('#remove-all')
btn2.addEventListener('click', (e) => {
    document.querySelectorAll('.note').forEach(note=> {
        note.style.display = 'none'
    })
})