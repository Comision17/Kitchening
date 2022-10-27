window.addEventListener('load', () => {
    let $ = (elemento) => document.querySelector(elemento)
    console.log('scrollTop vinculado');
    let goTop = $('#goTop') 
    goTop.style.display = 'none'
    function scrollTop() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            goTop.style.display = 'block'
        }else{
            goTop.style.display = 'none'
        }
    }

    window.onscroll = function () {
        scrollTop()
    }

    goTop.onclick = () => document.documentElement.scrollTop = 0
})