const m = document.getElementById('nav');
const b = document.getElementById('burguer');
const c = document.getElementById('close');
function aparece(){
    m.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'block';
}
function desaparece(){
    m.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
}