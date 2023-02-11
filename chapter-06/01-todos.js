const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list
todos.splice(2, 1)
console.log(todos)

todos.push('New item')
console.log(todos)

todos.shift()
console.log(todos)