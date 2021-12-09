export default class Store {
    // static getTasks() {
    //     let tasks
    //     if (localStorage.getItem('tasks') === null) {
    //         tasks = []
    //     } else {
    //         tasks = JSON.parse(localStorage.getItem('tasks'))
    //     }

    //     return tasks
    // }

    // static addTask(task) {
    //     const tasks = Store.getTasks()
    //     tasks.push(task)
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }

    // static removeTask(taskID) {
    //     const tasks = Store.getTasks()

    //     tasks.forEach((task, index) => {
    //         if (task.id == taskID) {
    //             tasks.splice(index, 1)
    //         }
    //     })

    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }

    // Project
    
    static getProjects() {
        let projects
        if (localStorage.getItem('projects') === null) {
            projects = []
        } else {
            projects = JSON.parse(localStorage.getItem('projects'))
        }

        return projects
    }

    static addProject(project) {
        const projects = Store.getProjects()
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    static removeProject(projectID) {
        const projects = Store.getProjects()

        projects.forEach((project, index) => {
            if (project.id == projectID) {
                projects.splice(index, 1)
            }
        })

        localStorage.setItem('projects', JSON.stringify(projects))
    }
}

console.log(Store);