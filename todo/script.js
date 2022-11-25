import { Todo } from "./todo.js";

const KEY = "localStorage";
const todo = new Todo();

const todoInput = document.getElementById("getTodoInput");
const addTaskBtn = document.getElementById("addTask");
const todoListContainer = document.getElementById("todoListContainer");
const clearBtn = document.getElementById("clear");

// Event handlers
addTaskBtn.addEventListener("click", addTodo);
todoListContainer.addEventListener("click", handleClick);
todoListContainer.addEventListener("dblclick", makeInputEditable);
clearBtn.addEventListener("click", clearInput);

const updateLocalStorage = () => {
  localStorage.setItem(KEY, JSON.stringify(todo.getTodos()));
};

const emptyNode = (parent) => {
  while (parent.firstChild) {
    parent.firstChild.remove();
    // parent.removeChild(parent.firstChild);
  }
};

const renderList = () => {
  emptyNode(todoListContainer);
  todo.getTodos().map((todo) => {
    const LI = document.createElement("li");
    const DIV = document.createElement("div");
    const INPUT = document.createElement("input");
    const SPAN = document.createElement("span");

    DIV.classList.add("task");
    INPUT.type = "text";
    INPUT.value = todo.value;
    INPUT.setAttribute("disabled", "");
    INPUT.setAttribute("id", `input_${todo.id}`);
    INPUT.addEventListener("blur", onInputEdit);
    SPAN.innerText = "X";
    SPAN.setAttribute("id", todo.id);

    DIV.appendChild(INPUT);
    DIV.appendChild(SPAN);
    LI.appendChild(DIV);

    todoListContainer.appendChild(LI);
    updateLocalStorage();
  });
};

function onInputEdit(e) {
  const id = e.target.id;
  if (!id) return;
  // const num = Number(id.replace(/[^0-9]/g, ""));
  const num = Number(id.split("_")[1]);
  const value = e.target.value;
  todo.updateTodo(num, value);
  renderList();
}

function makeInputEditable(e) {
  const id = e.target.id;
  if (!id) return;
  const inputBox = document.querySelector(`#${id}`);
  inputBox.removeAttribute("disabled");
}

function handleClick(e) {
  if (e && e.target && e.target.id && e.target.nodeName === "SPAN") {
    todo.deleteTodo(Number(e.target.id));
    renderList();
  }
}

function addTodo() {
  const value = todoInput.value;
  if (!value) return;
  todo.addTodo(value);
  renderList();
  clearInput();
}

function clearInput() {
  todoInput.value = "";
}

(() => {
  const local = localStorage.getItem(KEY);
  if (local) {
    todo.setTodos(JSON.parse(local));
    renderList();
  }
})();
