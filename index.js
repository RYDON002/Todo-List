const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myDiv = document.getElementById("myDiv");
const dateTodo = document.getElementById("dateTodo");

const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-10'
},
];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoOject = todoList[i];
        const name = todoOject.name;
        const dueDate = todoOject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="myBtn">delete</button>
        `;

        todoListHtml += html;
        console.log(todoListHtml);
        myDiv.innerHTML = todoListHtml;
    }
}

function Add() {

    const dueDate = dateTodo.value;
    const name = myInput.value;
    
    todoList.push({
        name,
        dueDate
    }
    );
    console.log(todoList);

    renderTodoList();

    myInput.value = '';
}

// const myCounter = document.getElementById("myCounter");
// const incButton = document.getElementById("incButton");
// const decButton = document.getElementById("decButton");
// const resetButton = document.getElementById("resetButton");


// let count = 0;

// function Increase() {
//     count++;
//     myCounter.textContent = count;
// }

// function Decrease() {
//     count--;
//     myCounter.textContent = count;
// }

// function reset() {
//     count = 0;
//     myCounter.textContent = count;
// }