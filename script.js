document.addEventListener('DOMContentLoaded', function() {
    // Add a new task
    function add_task() {
        var taskInp = document.getElementById('task-inp');
        var task = taskInp.value.trim();
        if (task !== '') {
            var task_item = document.createElement('li');
            task_item.innerHTML = `
            <span>${task}</span>
            <div class="task-actions">
                <button class="complete_btn">Complete</button>
                <button class="delete_btn">Delete</button>
            </div>
            `;
            var pending_tasks_list = document.getElementById('pending_tasks');
            pending_tasks_list.appendChild(task_item);
            taskInp.value = '';
        }
    }
    // Mark a task as complete
    function mark_task_complete() {
        var task_item = this.parentNode.parentNode;
        var completed_tasks_list = document.getElementById('completed_tasks');
        completed_tasks_list.appendChild(task_item);
        this.remove();
    }
    // Delete a task
    function delete_task() {
        var task_item = this.parentNode.parentNode;
        task_item.remove();
    }
    // Add event listener to the "Add Task" button
    var add_task_btn = document.getElementById('add_task_btn');
    add_task_btn.addEventListener('click', add_task);
    // Add event listeners to complete and delete buttons
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('complete_btn')) {
            mark_task_complete.call(event.target);
        } else if (event.target && event.target.classList.contains('delete_btn')){
            delete_task.call(event.target);
        }
    } );  
});