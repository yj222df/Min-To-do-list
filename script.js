const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const message = document.querySelector("#message");
const count = document.querySelector("#count");

let todos = [];

button.addEventListener("click", function() {

    if (input.value == "") {
        message.textContent = "Du måste skriva något";
        return;
    }

    message.textContent = "";

    let todo = {
        text: input.value,
        done: false
    };

    todos.push(todo);

    let li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function() {

        todo.done = !todo.done;

        li.classList.toggle("done");

        let antal = 0;

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].done == true) {
                antal++;
            }
        }

        count.textContent = antal;
    });

    list.appendChild(li);

    input.value = "";
});