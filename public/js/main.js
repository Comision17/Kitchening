
/* window.addEventListener('load', () => {

}) */

window.onload = () => {
    let vinculacion = 'Documento vinculado con exito'
    console.log(vinculacion);

    let $ = (elemento) => document.querySelector(elemento)

    let liHome = document.querySelector('li#container')
    let li = document.querySelectorAll('li')

    let home = document.getElementById('home')

    home.addEventListener('click',(e) => {
        e.preventDefault()
        e.target.href = '/casita'
        return console.log(e.target);
    })

    let image = document.getElementsByClassName('image')

    /* document.getElementById('home').innerText += " o Inicio"
 */
    li.forEach(elemento => {
        elemento.classList.toggle('kitchening')
    });
    
    let menu = $('#menu')
    let boton = $('#hamburguesita')
    boton.onclick = () => {
        console.log('Hiciste un click en la hamburguesa');
        menu.classList.toggle('desaparecer')
    }

    console.log(boton);
}







