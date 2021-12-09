import UI from './Ui.js';
import Store from './Store.js';

// Project Class: Represents a Project
export default class Project {
    constructor(title) {
        this.id = Date.now()
        this.title = title
        this.statue = 'Todo'
    }
}

// Event: Display Projects
document.addEventListener('DOMContentLoaded', UI.displayProjects)

// // Event: Add a Project
document.querySelector('#project-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title = document.querySelector('#project-title').value

    // Validate
    if (title === '') {
        UI.showAlert('Please fill in all fields', 'danger')
    } else {
        // Instantiate project
        const project = new Project(title)

        // Add Project to UI
        UI.addProjectToList(project)

        // Add project to store
        Store.addProject(project)

        // Show success message
        UI.showAlert('Project Added', 'success')

        // Clear fields
        UI.clearFields()
    }
})

// Event: Remove a Project
document.querySelector('#projects').addEventListener('click', (e) => {
    // Remove project from UI
    UI.deleteProject(e.target)

    // Remove project from store
    Store.removeProject(e.target.parentElement.lastChild.previousElementSibling.value)

    // Show success message
    UI.showAlert('Project Removed', 'success')
})

console.log(Project);