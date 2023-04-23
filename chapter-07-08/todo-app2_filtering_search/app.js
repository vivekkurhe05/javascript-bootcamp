const todos = [
    {
        text: 'Order cat food',
        completed: true
    },
    {
        text: 'Clean kitchen',
        completed: false
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const h2 = document.createElement('h2');
    let count = 0;
    filteredTodos.forEach(todo => {
        if(!todo.completed) count++
    })

    document.getElementById('todos').innerHTML = ''

    h2.textContent = `You have ${count} todos left`
    document.getElementById('todos').append(h2)

    filteredTodos.forEach(todo => {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.getElementById('todos').append(p)
    })
    
}

renderTodos(todos, filters)

const searchFilter = document.getElementById('search-text')

searchFilter.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})