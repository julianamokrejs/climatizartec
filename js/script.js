//banner
// const changeNameEmpresa = document.querySelector(".phrase-interval").innerHTML = "sua empresa";

// let tempo = setInterval(time, 1000);

// function time (){
//     const i = document.querySelector(".phrase-interval").innerHTML;
//     if (i === "sua empresa"){
//         document.querySelector(".phrase-interval").innerHTML = "sua casa"
//      } 
//     else {
//         document.querySelector(".phrase-interval").innerHTML = "sua empresa"
//     }

// }

$(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

// optional
$('#blogCarousel').carousel({
    interval: 2500
});

