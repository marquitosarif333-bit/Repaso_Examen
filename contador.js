const numero = document.getElementById("numero");
const btn = document.getElementById("btnIncrementar");

let contador = localStorage.getItem("contador");

contador = contador ? parseInt(contador) : 0;

numero.textContent = contador;

btn.addEventListener("click", () => {
    contador++;
    numero.textContent = contador;
    localStorage.setItem("contador", contador);
});