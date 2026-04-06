function calcular() {
    //nJS é uma linguagem não tipada (sem tipo de dados) 
    // Number() é uma função que convert texto em número

    // recuperta os valores 
    // reacupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // calcular o valor total de pontos dos itens avulsos 
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    // calcula o valor total das metas
    // recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaProva1 //declara  a variável
    if (cor == "amarela") {
        metaProva1 = 54 
    }
    else if (cor == "cinza") {
        metaProva1 = 51
    }
    else if (cor == "laranja") {
        metaProva1 = 21
    }
    else if (cor == "marrom") {
        metaProva1 = 88
    }
    else if (cor == "preta") {
        metaProva1 = 60
    }
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000 // 5000 garantidos 
        if (kitAlimentacao > 60) {
            // ganhamos 83.33 a mais de ponto por itens  que utrapassaram 60 
            pontos = pontos + (kitAlimentacao-metaProva1) * (5000/metaProva1) // 5000/60(Alunos)=83.33
        }
    }
    else {
        pontos = pontos + kitAlimentacao * 83.33
    }

    //vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
}
