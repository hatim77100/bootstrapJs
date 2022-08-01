// let init = document.querySelector("#js");
// // let para = document.querySelector("#paragraphe");
// init.addEventListener("click",  () => {
//     let p = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, architecto! Esse modi officia"
//     document.body.append(p);  
// })

// 2 ème méthode :

let button = document.querySelector("#js");
const body = document.querySelector("body");


const txt = () => {
    let p = ducument.createElement("p");
    p.innerHTML = "lorem"
    body.append(p);
}

button.addEventListener("click", txt);