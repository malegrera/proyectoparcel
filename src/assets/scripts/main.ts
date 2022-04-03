import 'bootstrap';
import {nombre, i as ranas, fecha} from "./otro";

const mensaje:string = `<p>Hola ${nombre}</p>`;
const mensaje2:string = "<p>Hello World again!</p>";

document.querySelector("div").insertAdjacentHTML('beforeend', mensaje);
document.querySelector("div").insertAdjacentHTML('beforeend', mensaje2);
console.log(ranas);
let p:HTMLElement=document.querySelector("p:nth-of-type(2)");
p.className="fa-solid";
for (let i=1; i<=ranas; i++) {
    p.insertAdjacentHTML('afterbegin',`<i class="fa-solid fa-${i}"></i> `)
}

fecha();