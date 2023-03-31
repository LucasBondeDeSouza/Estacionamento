let dados = [ ]

function estacionarCarro(){
    let modelo = document.getElementById("modelo").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let entrada = document.getElementById("entrada").value
    let saida = document.getElementById("saida").value

    let objeto = { modelo: `${modelo}`, placa: `${placa}`, cor: `${cor}`, entrada: `${entrada}`, saida: `${saida}`}

    dados.push(objeto)

    console.log(dados)
}

function saidaCarro(){
    let entrada = document.getElementById("entrada").value
    let saida = document.getElementById("saida").value
    let placa = document.getElementById("placa").value
    
    dados.forEach(function(elem, index){

        if(placa == dados[index].placa){
            let valor = parseFloat(saida) - parseFloat(entrada)
            let valorPagar = parseFloat(valor)*2 + 5
            alert("Valor a Pagar: R$"+parseFloat(valorPagar))
        } else {
            alert("Carro não encontrado!")
        }
    })
}

function mostrarCarro(){
    document.getElementById("corpotabela").innerHTML = ""

    dados.forEach(function(elem, index){
        let tabela = document.getElementById("corpotabela")
        let tr = document.createElement('tr')

        tr.innerHTML = `
        <tr>
           <td>${dados[index].modelo}</td>
           <td>${dados[index].placa}</td>
           <td>${dados[index].cor}</td>
           <td>${dados[index].entrada}</td>
           <td>${dados[index].saida}</td>
        </tr>`

        tabela.appendChild(tr)
    })
}