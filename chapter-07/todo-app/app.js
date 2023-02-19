const ps = document.querySelectorAll('p');

ps.forEach((p) => {
    if(p.textContent.includes('the')) {
        p.style.display = 'none'
        // or
        // p.remove()
    }
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.body.appendChild(newParagraph);