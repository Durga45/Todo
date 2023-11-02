// Get references to the elements
let input = document.querySelector('.input'); // Use querySelector with the class
let add = document.getElementById('addbtn');
let todoList = document.getElementById('todoList');

function addTodo() {
    if (input.value.trim() !== '') {
        let newItem = document.createElement('li');
        newItem.textContent=input.value 
        newItem.style.fontWeight = 'bold';
        newItem.style.fontSize = '20px';
        newItem.style.display='flex'
        newItem.style.alignItems='center';
        newItem.style.justifyContent='space-between'
        // Create a delete icon and add it to the list item
        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('ri-delete-bin-line'); // Remix Icons delete icon
        deleteIcon.style.color = 'red'; // Delete icon color

        // Add a click event to remove the item
        deleteIcon.addEventListener('click', () => {
            todoList.removeChild(newItem);
        });

        newItem.appendChild(deleteIcon);
        todoList.appendChild(newItem);

        input.value = '';
    }
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

add.addEventListener('click', () => {
    addTodo();
});
