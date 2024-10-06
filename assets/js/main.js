var registerform = document.querySelector(".registerform");
var nameinput = document.querySelector("#name");
var numberinput = document.querySelector("#number");
var priceinput = document.querySelector("#price");


var products = [];

registerform.onclick = function(e){
    e.preventDefault();

    console.log("e");
    var product = {
        name: nameinput.value,
        number: numberinput.value,
        price: priceinput.value,
    };


    products.push(product);


printdata();
};

function printdata(){
    var data = `  `;
    for(var i = 0; i < products.length; i++) {
        data += 
        `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].number}</td>
        <td>${products[i].price}</td>
        </tr>`;
    }

   
    document.querySelector("tbody").innerHTML = data;
};