const Form = document.querySelector('#CreateNewTaskForm');
const TasksArea = document.querySelector('#TasksArea');
let Tasks = [];
let Task = {
    headerText: '',
    mainText: '',
    createDate: '',
    complete: 'No',
}

let CreateNewTask = () => {
    event.preventDefault();

    let headerText = Form.querySelector('#HeaderText').value;
    let mainText = Form.querySelector('#MainText').value;
    let createDate = new Date(); //Исправить (использовать мировое время и преобразововать его в локальное)

    Task.headerText = headerText;
    Task.mainText = mainText;
    Task.createDate = createDate;

    let TaskLS = JSON.stringify(Task);
    Tasks.push(TaskLS);

    SetTasksToLocalStorage('Tasks');
    AddNewTaskToPage (Task);
}

let AddNewTaskToPage = (Task) => {
    let div = document.createElement('div');
    div.className = 'Task';
    div.innerHTML = `<h2 class="Task__HeaderText">${Task.headerText}</h2><p class="Task__MainText">${Task.mainText}</p>`;
    TasksArea.append(div);
}

let SetTasksToLocalStorage = (key) => {
    let TasksLS = JSON.stringify(Tasks);
    localStorage.setItem(key, TasksLS);
    console.log(1);
}

let Update = () => {
    Tasks = JSON.parse(localStorage.getItem('Tasks'));

    Tasks.forEach(function(item){
        item = JSON.parse(item);
        let div = document.createElement('div');
        div.className = 'Task';
        div.innerHTML = `<h2 class="Task__HeaderText">${item.headerText}</h2><p class="Task__MainText">${item.mainText}</p>`;
        TasksArea.append(div);
    });
}

let DeleteTask = () => {

}

document.addEventListener("DOMContentLoaded", Update);
Form.addEventListener("submit", CreateNewTask);