// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

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

let deleteTodo = function(todos, text) {

    let index = todos.findIndex( function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    
    if(index > -1) todos.splice(index, 1)

    return todos;
}

const getThingsToDo = function (todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

deleteTodo(todos, 'buy food')
console.log(todos)