//banner
const changeNameEmpresa = document.querySelector(".phrase-interval").innerHTML = "sua empresa";

let tempo = setInterval(time, 1000);

function time (){
    const i = document.querySelector(".phrase-interval").innerHTML;
    if (i === "sua empresa"){
        document.querySelector(".phrase-interval").innerHTML = "sua casa"
     } 
    else {
        document.querySelector(".phrase-interval").innerHTML = "sua empresa"
    }

}


// optional
$('#blogCarousel').carousel({
    interval: 2500
});
