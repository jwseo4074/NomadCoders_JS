const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function deleteToDo(event) {
    // console.log(event.target.parentElement.innerText);
    // console.dir(event.target.parentElement.innerText);
    
    // 여기서 target은 클릭된 HTML element 이다.
    // 해당 element에는 하나 이상의 property가 있다.

    const li = event.target.parentElement
    // 버튼의 부모는? li 태그.
    li.remove();
    // 삭제

    // remove 함수는 선택한 요소를 제거할 때 사용하거나, 요소 내의 태그들을 삭제할 때 사용합니다. 
}

function paintToDo(newTodo) {
    // toDo 를 그리는 역할을 하는 함수
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = " ❌";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    // li에 append는 무조건 젤 마지막!
}
function handleToDoSubmit(event) {
    event.preventDefault();
    
    // console.log(todoInput.value);

    const newTodo = todoInput.value;
    todoInput.value = ""; 

    // console.log(newTodo, todoInput.value)

    paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);


