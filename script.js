const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const message = document.getElementById("message");
const count = document.getElementById("count");


// Array som innehåller alla todos
let todos = [];


// Lägg till todo
button.addEventListener("click", function () {

    const text = input.value.trim();

    // Om input är tom
    if (text === "") {
        message.textContent = "You must write something!";

        // Starta om animationen
        message.classList.remove("error-animation");
        void message.offsetWidth;
        message.classList.add("error-animation");

        return;
    }

    // Ta bort eventuellt felmeddelande
    message.textContent = "";


    // Skapa objektet som sparas i arrayen
    const todo = {
        text: text,
        done: false
    };

    todos.push(todo);


    // Skapa li
    const li = document.createElement("li");


    // Texten
    const todoText = document.createElement("span");
    todoText.textContent = todo.text;


    // Delete-knapp
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-button");


    li.appendChild(todoText);
    li.appendChild(deleteButton);

    list.appendChild(li);


    // Klick på todo = completed
    li.addEventListener("click", function () {

        todo.done = !todo.done;

        li.classList.toggle("done");

        updateCount();
    });


    // Radera todo
    deleteButton.addEventListener("click", function (event) {

        // Hindrar klicket från att också markera todo som klar
        event.stopPropagation();

        const index = todos.indexOf(todo);

        if (index !== -1) {
            todos.splice(index, 1);
        }

        li.remove();

        updateCount();
    });


    // Töm input
    input.value = "";
});


// Uppdatera räknaren
function updateCount() {

    const completedTodos = todos.filter(function (todo) {
        return todo.done === true;
    });

    count.textContent = completedTodos.length;
}
