//Tüm Elementler
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {  //Tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
    if (confirm("Tümünü Silmek istediğinize eminmisiniz?")) {
        //Arayüzden Todoları Temizleme
        /*
                todoList.innerHTML = ""; //Yavaş
        */
        while (todoList.firstElementChild != null) { //Null değilse işleme devam edicek elemen bitince null döneceği için while döngüsünden çıkıcak
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

//Filtreleme Todo
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //Bulamadı
            listItem.setAttribute("style", "display:none!important");
        } else {
            listItem.setAttribute("style", "display:block");
        }
    });
}

//Todo Silme
function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Silme İşlemi");
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Başarıyla Silindi  ");
    }
    e.preventDefault();
}

//Todo Silme
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);//Array'dan değeri sildik.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Sayfa yüklendiğinde local stogare'dan Todoları UI ekleme
function loadAllTodosUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

//Sayfa yüklendiğinde local stogare'dan Todoları UI ekleme

//Form event
function addTodo(e) {
    const newTodo = todoInput.value.trim();
    //Aynı Todo var mı kontrol
    const todos = getTodosFromStorage();
    let sameTodo = false;
    todos.forEach(function (todo) {
        if (todo === newTodo) {
            sameTodo = true;
            return sameTodo;
        }
    });

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin");
    } else if (sameTodo === true) {
        showAlert("warning", "Todo listede zaten bulunuyor.")
    } else {
        addTodoToUI(newTodo);
        addTodoToStroge(newTodo);
        showAlert("success", "Todo girdiniz");

    }
    e.preventDefault();
}

//Form event

//Storage
function getTodosFromStorage() { //Storagedan todoları alma
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStroge(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
}

//Storage

//Bilgilendirme Mesajları
function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    //Bilgilendirme mesajını UI ekleme
    firstCardBody.appendChild(alert);

    //setTimeout
    setTimeout(function () {
        alert.remove();
    }, 1000);

    console.log(alert);

}

//Bilgilendirme Mesajları

//UI todo ekleme
function addTodoToUI(newTodo) {  //String değerini list item olarak UI'ya  ekleyecek
    //List oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    //Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));

    //List'e link ekleme
    listItem.appendChild(link);

    //Todo list'e liist item  ekleme
    todoList.appendChild(listItem);

    todoInput.value = "";
}

//UI todo ekleme
