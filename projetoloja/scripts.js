const esqbtn = document.getElementById('esquerda')
const dirbtn = document.getElementById('direita')

const items = document.querySelectorAll('.item')
const pontos = document.querySelectorAll('.ponto')

const numeroindicador = document.querySelector('.numeros')
const lista = document.querySelector('.lista')

let active = 0;
const total = items.length;
let timer;


function update(direcao){
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.ponto.active').classList.remove('active')

    if(direcao > 0){
        active += 1

        if(active === total){
            active = 0
        }
    }
    else if(direcao < 0){
        active -= 1

        if(active < 0){
            active = total - 1
        }
    }

    items[active].classList.add('active')
    pontos[active].classList.add('active')

    numeroindicador.textContent = String(active + 1).padStart(2,'0')

}

iniciatimer()

function iniciatimer(){
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 10000);
}
esqbtn.addEventListener('click', function(){
    update(-1)
    iniciatimer()
})

dirbtn.addEventListener('click', function(){
    update(1)
    iniciatimer()
})

