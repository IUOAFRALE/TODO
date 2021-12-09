// import UI from './Ui.js';
// import Store from './Store.js';

// // Task Class: Represents a Task
// export default class Task {
//     constructor(title, description, priority) {
//         this.id = Date.now()
//         this.title = title
//         this.description = description
//         this.priority = priority
//         this.statue = 'Todo'
//     }
// }

// // Event: Display Tasks
// document.addEventListener('DOMContentLoaded', UI.displayTasks)

// // // Event: Add a Task
// document.querySelector('#task-form').addEventListener('submit', (e) => {
//     // Prevent actual submit
//     e.preventDefault()

//     // Get form values
//     const title = document.querySelector('#title').value
//     const description = document.querySelector('#description').value
//     const priority = document.querySelector('#priority').value

//     // Validate
//     if (title === '' || description === '' || priority === '') {
//         UI.showAlert('Please fill in all fields', 'danger')
//     } else {
//         // Instantiate task
//         const task = new Task(title, description, priority)

//         // Add Task to UI
//         UI.addTaskToList(task)

//         // Add task to store
//         Store.addTask(task)

//         // Show success message
//         UI.showAlert('Task Added', 'success')

//         // Clear fields
//         UI.clearFields()
//     }
// })

// // Event: Remove a Task
// document.querySelector('#tasks').addEventListener('click', (e) => {
//     // Remove task from UI
//     UI.deleteTask(e.target)

//     // Remove task from store
//     Store.removeTask(e.target.parentElement.lastChild.previousElementSibling.value)

//     // Show success message
//     UI.showAlert('Task Removed', 'success')
// })
