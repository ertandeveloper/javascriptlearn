// Fonksiyon Tanımlama
/*function merhaba(name = "Bilgi Yok", age = "Bilgi yok") { //Varsayılan Değer Gönderme
    /!*if (typeof name === "undefined") name = "Bilgi Yok";  Varsayılan Değer Gönderme
    if (typeof age === "undefined") age = "Bilgi Yok";*!/    //Varsayılan Değer Gönderme

    console.log(`İsim:${name} Yaş:${age}`);
}

merhaba("Ertan", 19); //Fonksiyon Çağrısı(Function Call)
merhaba("Behçet", 20);
merhaba();
merhaba("Kadir");

//Fonksiyon'da return
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

let a = cube(square(12));

console.log(a);*/

//Function Expression  (Bir Değere Fonksiyonu eşitleme)

/*const merhaba = function (name) {
    console.log(`Name: ${name}`);
};
merhaba("Ertan");*/

//Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log("Merhaba " + name)
})("Ertan");
//

const database = {
    host: "localhost",
    add:function () {
        console.log("eklendi");
    },
    get:function () {
        console.log("elde edildi");
    },
    update:function (id) {
        console.log(`Id: ${id} Güncellendi`)
    },
    delete:function (id) {
        console.log(`Id: ${id} Silindi`)
    }
};
console.log(database.host);
database.add();
database.get();
database.update(2);
database.delete(3);








