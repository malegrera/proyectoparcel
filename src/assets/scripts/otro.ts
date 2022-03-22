export const nombre:string = "mundo";
export const i:number = Math.floor(Math.random()*10);
export function fecha() {
    setTimeout(()=>document.querySelector("p").insertAdjacentHTML('afterbegin',`Hoy es ${new Date().toLocaleDateString()} - `),5000);
}


