 const todoList = document.getElementById('todo-list');
        const newTodoInput = document.getElementById('new-todo');
        const addTodoButton = document.getElementById('add-todo');

        addTodoButton.addEventListener('click', () => {
            const newTodoText = newTodoInput.value.trim();
            if (newTodoText) {
                const newTodoItem = document.createElement('li');
                newTodoItem.textContent = newTodoText;

                // ✅ strike off on click
                newTodoItem.addEventListener('click', () => {
                    newTodoItem.classList.toggle('completed');
                });

                todoList.appendChild(newTodoItem);
                newTodoInput.value = '';
            }
        });