loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit',submit);
}

function submit(event){
    event.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
        input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}