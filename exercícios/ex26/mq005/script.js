const m = document.getElementById('nav');
const b = document.getElementById('burguer');
const c = document.getElementById('close');
function aparece(){
    if(m.style.display == 'none'){
        m.style.display = 'block'
    }
    else{
        m.style.display = 'none'
    }
}

function changeSize(){
    if(window.innerWidth >= 992){
        m.style.display = 'block'
    }
    else{
        m.style.display = 'none'
    }
}