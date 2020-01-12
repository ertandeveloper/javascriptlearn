/*//Local Storage

//Set Item
localStorage.setItem("hareket","burqee");
localStorage.setItem("tekrar",50);


//Get Item
/!*const value=localStorage.getItem("tekrar");
console.log( typeof value);*!/



//Clear Local Storage
/!*
localStorage.clear();
*!/


/!*localStorage.setItem("hareket","burqee");
localStorage.setItem("tekrar",50);


if(localStorage.getItem("hareket")===null){
    console.log("Sorguladığınız veri bulunmuyor");
}else{
    console.log("Sorguladığınız veri bulunuyor");

}*!/


//Local Storage - Array Yazma
const todos=["Todo 1","Todo 2","Todo 3"];

localStorage.setItem("todos",JSON.stringify(todos));

const value =JSON.parse(localStorage.getItem("todos"));

console.log(value);*/

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e) {
    const value=todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos")); //Array okurken parse ediyoruz.
    }
    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));  //Array yazarken stringify yaparak array şeklinde gönderiyoruz.
    e.preventDefault();
}















