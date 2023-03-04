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

// Remove a todo from the list
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function(todo) {
        return todo.id === id
    })

    if(todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const div = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')
    
    // Setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    div.appendChild(checkbox)
    checkbox.addEventListener('change', function() {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoText.textContent = todo.text
    div.appendChild(todoText)

    removeButton.textContent = 'x'
    div.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    document.getElementById('todos').appendChild(div)
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