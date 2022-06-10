var lista = [];

function addNum(){
    let numeroEl = document.getElementById('txtNum');

    if(numeroEl.value.length === 0){
        window.alert('[ERRO] Por favor digite um número');
        return;
    }

    if(numeroEl.value < 1 || numeroEl.value > 100){
        window.alert('[Erro]Valor inválido, por favor tente novamente');
        return;
    }

    if(numeroEl.value >= 1 || numeroEl.value <= 100){
        let item = document.createElement('option');
        let n = Number(numeroEl.value);
        item.text = `O valor ${n} foi adicionado`;
        lista.push(n);
        tab.appendChild(item);
        return;
    }
}

function finalizar(){
    let soma = 0;
    let res = document.getElementById('interface2')
    let menor = Math.min(...lista)
    let maior = Math.max(...lista)

    for (let item of lista){
        soma += item
    }

    const media = soma/lista.length
    res.innerHTML =
     `<p>Ao todo temos ${lista.length} elementos</p>
     <p>A soma de todos os valores é ${soma}</p>
     <p>O maior valor é de ${maior}</p>
     <p>O menor valor é de ${menor}</p>
     <p>A media dos elementos adicionados é ${media}</p>`
}