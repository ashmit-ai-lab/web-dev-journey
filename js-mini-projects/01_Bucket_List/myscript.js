document.addEventListener('DOMContentLoaded', () => {
    const BucketList = document.getElementById('todo-list')
    const addTaskButton = document.getElementById('add-task-btn')
    const Input = document.getElementById('todo-input')

    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const text = Input.value.trim()
        if(text == "") return;

        const newTask = {
            id: Date.now(),
            text: text,
            isComp: false
        }

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        Input.value = "";
        console.log(tasks);
    });
    
    function renderTask(task){
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        if(task.isComp) li.classList.add('completed');

        li.innerHTML = `<span>${task.text}</span>
        <button>Delete</button>`;

        li.addEventListener('click', (e) => {
            if(e.target.tagName == 'BUTTON') return;
            task.isComp = !task.isComp;
            li.classList.toggle('completed') 
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        })

        BucketList.appendChild(li);
    }

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})