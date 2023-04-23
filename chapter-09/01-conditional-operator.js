const myAge = 29
const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Vivek', 'Naveen']

const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(teamMessage)