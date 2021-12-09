import Store from './Store.js';

// UI Class: Handle UI
export default class UI {
    // // Task
    // static displayTasks() {
    //     const tasks = Store.getTasks()

    //     tasks.forEach((task) => UI.addTaskToList(task))
    // }

    // static addTaskToList(task) {
    //     const list = document.querySelector('#tasks')

    //     const row = document.createElement('tr')

    //     row.innerHTML = `
    //     <td>${task.title}</td>
    //     <td>${task.description}</td>
    //     <td>${task.priority}</td>
    //     <td>${task.statue}</td>
    //     <td><a href="#" class="btn btn-danger btn-sm delete">X</a>
    //     <input type="hidden" name="id" id="id" value="${task.id}">
    //     </td>`

    //     list.appendChild(row)
    // }

    // static deleteTask(el) {
    //     if (el.classList.contains('delete')) {
    //         el.parentElement.parentElement.remove()
    //     }
    // }

    // static showAlert(message, className) {
    //     const div = document.createElement('div')
    //     div.className = `alert alert-${className}`
    //     div.appendChild(document.createTextNode(message))
    //     const container = document.querySelector('.task-container')
    //     const form = document.querySelector('#task-form')
    //     container.insertBefore(div, form)

    //     // Vanish in 3 seconds
    //     setTimeout(() => document.querySelector('.alert').remove(), 3000)
    // }

    // static clearFields() {
    //     document.getElementById('title').value = ''
    //     document.getElementById('description').value = ''
    //     document.getElementById('priority').value = ''
    // }

    // Project

    static displayProjects() {
        const projects = Store.getProjects()

        projects.forEach((project) => UI.addProjectToList(project))
    }

    static addProjectToList(project) {
        const list = document.querySelector('#projects')

        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${project.title}</td>
        <td>${project.statue}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete-project">X</a>
        <input type="hidden" name="id" id="id" value="${project.id}">
        </td>`

        list.appendChild(row)
    }

    static deleteProject(el) {
        if (el.classList.contains('delete-project')) {
            el.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.project-container')
        const form = document.querySelector('#project-form')
        container.insertBefore(div, form)

        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    static clearFields() {
        document.querySelector('#project-title').value = ''
    }
}
console.log(UI);
