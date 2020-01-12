//Session Storage  Key ve Value

//Buttons
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//Inputs
const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");


//Event
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);


function addItem(e) {
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}
function clearItems(e) {
        sessionStorage.clear();
}















