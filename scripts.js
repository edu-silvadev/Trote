function calcular(){
    // JS é uma linguagem não tipada (sem tipo de dados)
    // Number() é uma função que converte texto em número

    /* recupera valores de itens avulsos */

    // recupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    // recupera o valor informado no elemento com id qtdeFeijao
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    // recupera o valor informado no elemento com id qtdeOleo
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    // recupera o valor informado no elemento com id qtdeMacarrao
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // calcula o valor total de pontos dos itens avulsos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    // calcula o valor total das metas
    // recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaKit // declara meta de kit alimentação
    let metaSuplemento // declaração meta de suplemento
    if (cor == "amarela"){
        metaKit = 54
        metaSuplemento = 27
    }
    else if (cor == "cinza"){
        metaKit = 51
        metaSuplemento = 26
    }
    else if (cor == "laranha"){
        metaKit = 21
        metaSuplemento = 11
    }
    else if (cor == "marron"){
        metaKit = 88
        metaSuplemento = 44
    }
    else if (cor == "preta"){
        metaKit = 60
        metaSuplemento = 30
    }
    }
    // calcula meta de suplemento e de leite 
    let metaSuplemento // declaração meta de suplemento 
    let metaLeite = metaKit
    if (metaKit % 2 == 0){// par
        metaSuplemento = metaKit / 2
    }
    else {
        metaSuplemento = (metaKit / 2 ) + 0.5
    }
    // calcula pontuação do kit de alimentação
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > metaProva1){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - metaProva1) * (5000/metaProva1)
            pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
        }
    }
    else {
        pontos = pontos + kitAlimentacao * (5000 / metaProva1)
        pontos = pontos + kitAlimentacao * (5000 / metaKit)
    }
    // calcula pontuação do suplemento
    let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
    if (qtdeLatas >= metaSuplemento){
        pontos = pontos + 5000
        if (qtdeLatas > metaSuplemento){
            pontos = pontos + (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else  {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }
    // calcula pontuação do leite
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)
    if (qtdeLeite >= metaLeite){
        pontos = pontos + 5000
        if (qtdeLeite > metaLeite){
            pontos = pontos + (qtdeLeite - metaLeite) * (5000/metaLeite)
        }
    }
    else  {
        pontos = pontos + (qtdeLeite * (5000/metaLeite))
    }
    // calcula pontuação do snague
    let qtdeDoacoes = Number(document.getElementById("qtdeDoacoes").value)
    if (qtdeDoacoes >= metaDoacoes){
        pontos = pontos + 5000
        if (qtdeDoacoes > metaDoacoes){
            pontos = pontos + (qtdeDoacoes - metaDoacoes) * (5000/metaDoacoes)
        }
    }
    else  {
        pontos = pontos + (qtdeDoacoes * (5000/metaDoacoes))
    }
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos.tofixed(2) + " pontos"
function churras(){
    // recupera os dados do usuário
    let convidados = Number(document.getElementById("convidados").value)
    let total = convidados * 400 // em gramas
    let totalKg = total / 1000 // em kilos
    document.getElementById("resultadoCarne").innerText = 
            "Total em kg " + totalKg.toFixed(2)
}
function febre(){
    let temperatura = Number(document.getElementById("temperatura").value)
    if (temperatura >= 37.5){
        document.getElementById("resultadoFebre").innerText = "Está com febre"
    }
    else {
        document.getElementById("resultadoFebre").innerText = "Temperatura normal"
    }
}
function emprestimo(){
    let renda = Number(document.getElementById("renda").value)
    let idade = Number(document.getElementById("idade").value)
    if (renda > 2000 && idade > 18){
        document.getElementById("resultadoEmprestimo").innerText = "Empréstimo aprovado"
    }
    else {
        document.getElementById("resultadoEmprestimo").innerText = "Empréstimo reprovado"
    }
}
function luta(){
    let peso = Number(document.getElementById("peso").value)
    let idade = Number(document.getElementById("idadeLuta").value)
    if (idadeLuta < 18){
        document.getElementById("resultadoCategoria").innerText = "Categoria Juvenil"
    }
    else if (peso < 80){
        document.getElementById("resultadoCategoria").innerText = "Categoria adulto leve"
    }
    else {
        document.getElementById("resultadoCategoria").innerText = "Categoria adulto pesado"
    }
}