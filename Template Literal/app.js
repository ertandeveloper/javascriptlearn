const name = "Ertan Dönmez";
const departman = "Bilişim";
const salary = 4000;

//Eski
/*
const a = "İsim: " + name + "\n" + "Departman: " + departman + "\n" + "Maaş" + salary;
*/

//Yeni
/*
const a=`İsim:${name}\nDepartman:${departman}\nMaaş:${salary}`
*/


//Eski
/*const html = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + departman + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>";*/

function a() {
    return "Merhaba"
}
//Yeni Yöntem İçerisinde js kodlarınıda çalıştırabiliriz.
const html=`
<ul>
<li>${name}</li>
<li>${departman}</li>
<li>${salary}</li>
<li>${10/4}</li>
<li>${a()}</li>
</ul>
`;
const html2=`
<ul>
<li>${name}</li>
</ul>
`;
document.body.innerHTML=html;

