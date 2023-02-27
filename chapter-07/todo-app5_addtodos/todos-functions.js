// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function(todo) {
        if(filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })
    
    generateSummaryDOM(filteredTodos)

    filteredTodos.forEach(todo => {
        generateTodoDOM(todo)
    })
    
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.getElementById('todos').append(p)
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (filteredTodos) {
    const h2 = document.createElement('h2');
    let count = 0;
    filteredTodos.forEach(todo => {
        if(!todo.completed) count++
    })

    document.getElementById('todos').innerHTML = ''

    h2.textContent = `You have ${count} todos left`
    document.getElementById('todos').append(h2)
}