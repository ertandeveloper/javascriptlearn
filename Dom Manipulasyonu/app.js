// Window Object
/*let value;
value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[6];
value=document.all[document.all.length-1];*/


/*const elements=document.all; //Html Collection

/!*for (let i=0; i<elements.length; i++){
    console.log(elements[i]);
}*!/

/!*elements.forEach(function (element) { //Html Collection üzerinde for döngüsü dışında bir şey kullanımıyoruz.Array çevirerek kullanabiliriz.
console.log(element);
});*!/


//Html Collection Array çeviri forEach ile kullanımı
const collection=Array.from(document.all);
console.log(typeof collection);

collection.forEach(function (element) {
console.log(element);
});*/


/*value=document.all[8];
value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.location.port;

value=document.URL;

value=document.characterSet;

//Scriptler
value=document.scripts;
value=document.scripts.length;
value=document.scripts[0];

//Linkler
value=document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;

//Formlar
value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms["form"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;
value=document.forms[0].getAttribute("name");

value=document.forms[0].method;*/

/*
console.log(value);*/

//ELEMENT SELECT

/*let element ;

//Element ID göre seçme
element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");


//Element Class göre seçme
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("card-header");

//Element tag'e göre seçme
element=document.getElementsByTagName("li");

//Query Selector Tek bir elementi seçer
element=document.querySelector("#todo-form");
element=document.querySelector("#tasks-title");
element=document.querySelector(".list-group-item");
element=document.querySelector("li");

//Query Selector All Bütün elementleri seçmek istersen
element=document.querySelectorAll(".list-group-item"); // Node List 
element.forEach(function (el) {
console.log(el);
});

console.log(element);*/

//ELEMENT SEÇME STYLE DEĞİŞTİRME

/*const element =document.querySelector("#clear-todos");*/


/*console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);*/

//Style ve element özellikleri değiştirme
/*element.className="btn btn-primary";
element.style.color="#000";
element.style.marginLeft="5px";
element.href="https://google.com.tr";
element.target="_blank";*/

/*element.textContent="Silin";
element.innerHTML="<span>Silin</span>"*/

/*const element = document.querySelectorAll(".list-group-item");
element.forEach(function (el) {
    el.style.color = "red";
    el.style.background="#eee"
});*/


/*let element =document.querySelector("li:last-child");
element=document.querySelector("li:nth-child(2)");
element=document.querySelector("li:nth-child(3)");
element=document.querySelectorAll("li:nth-child(odd)"); //Tek Sayı Çoçukları 1-3 seçicek
element=document.querySelectorAll("li:nth-child(even)"); //Çift Sayı Çocukları 2 -4 seçicek
element.forEach(function (el) {
    el.style.background="#ccc";
    el.style.color="red";

});
console.log(element);*/

//DOM ELEMENTLERİ ÜZERİNDE GEZİNME
/*let value;
const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

value=todoList;
value=todo;
value=cardrow;

//Child Nodes -Text dahil alıyor
value=todoList.childNodes;
value=todoList.childNodes[0];

//Children-element alıyor
value=todoList.children;
value=todoList.children[0];
value=todoList.children[todoList.children.length-1];
value=todoList.children[2].textContent="değişti";

value=cardrow;
value=cardrow.children;
value=cardrow.children[2].children[1].textContent="Burasıda değişti";

value=todoList;
//Firs Element Child
value=todoList.firstElementChild;
//Last element Child
value=todoList.lastElementChild;


//Todo List Kaç tane olduğu ikiside aynı işlemi görüyor
value=todoList.children.length;
value=todoList.childElementCount;


value=cardrow;

//Main Elementi
value=cardrow.parentElement;

//Main Elementi Maini
value=cardrow.parentElement.parentElement;


//Element kardeşleri
value=todo;
//Bir önceki elemente
value=todo.previousElementSibling;

//Bir sonraki element
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;

value=todo;
console.log(value);*/

/*//DİNAMİK ELEMENT OLUŞTURMA
const  newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];


newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://google.com.tr";
newLink.target="_blank";
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);*/

/*//Text Node -Element içine text yazdırmak için
const text=document.createTextNode("Naber");
cardbody.appendChild(text);*/


//ELEMENT SİLME
/*const todolist=document.querySelector("ul.list-group");
const todos=document.querySelectorAll(".list-group-item");


//Remove
/!*todos[0].remove();
todos[1].remove();*!/

//Remove Child
/!*
todolist.removeChild(todolist.lastElementChild);
*!/
todolist.removeChild(todos[3]);*/


//ELEMENT DEĞİŞTİRME-Replace

/*const cardbody=document.querySelectorAll(".card-body")[1];
const newElement=document.createElement("h3");

newElement.className="card-title";
newElement.id="task-title";
newElement.textContent="Yeni Todolar";

//Eski Element
const oldElement=document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);*/

//ATTRIBUTE EKLEME,SİLME,DEĞİŞTİRME
const todoInput=document.getElementById("todo");
let element;

element=todoInput;
element=todoInput.classList;

//Class Ekleme
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");

//Class Çıkarma
/*
todoInput.classList.remove("form-control");
*/

element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");

//Attribute ekleme-değiştirme
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","Input");

element=todoInput;
//Attribute Silme
todoInput.removeAttribute("name");

//Attribute Varsa true,yoksa false döner
/*
element=todoInput.hasAttribute("name");
*/


console.log(element);
