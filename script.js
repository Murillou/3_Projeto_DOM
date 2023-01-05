const divs  = document.querySelectorAll('div')
for(item of divs){
    item.style.textAlign = 'Center'
}

const quantidade = document.querySelector('#count')
quantidade.textContent = `Numéro de países total = ${paises.length}`

let container = document.createElement('div')

let tabela = document.createElement('table')

let contadorPais = 0

while(contadorPais < paises.length){
    
    let linha = document.createElement('tr')
    for(let i = 0; i < 6; i++){
        let dados = document.createElement('td')
        dados.textContent = paises[contadorPais]
        dados.style.margin = '1%'
        dados.style.padding = '2.5%'
        dados.style.backgroundColor = '#D3D3D3'

        linha.appendChild(dados)
        contadorPais++
    }
    tabela.appendChild(linha)
}

tabela.style.textAlign = 'center'
tabela.style.margin = 'auto'
tabela.style.padding = '2%'

container.appendChild(tabela)
document.body.appendChild(container)
