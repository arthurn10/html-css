function calcularExe1(){

    // JAVASCRIPT É UMA LINGUAGEM COM TIPAGEM DINÂMICA
    //let idade = 10; idade = "dez"
    
    // recupera dados do formulário
    let nro1 = document.getElementById("nro1").value;
    let nro2 = document.getElementById("nro2").value;
    // processamento
    let subtracao = nro1 - nro2;
    // saída dos dados
    document.getElementById("subtracao").innerHTML = "O resultado é " + subtracao;
}
function calcularExe2(){
    // recupera o peso do html
    let peso = Number(document.getElementById("peso").value)
    // calcular quando engorda
    let engorda = peso + peso*15/100
    // calcular quando emagrece
    let emagrece = peso - peso*20/100
    // devolve o resultado para html
    document.getElementById("engorda").innerHTML = "Quando engorda " + engorda
    document.getElementById("emagrece").innerHTML = "Quando emagrece " + emagrece
}
function calcularExe3(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let divisao = num1 / num2

    document.getElementById("divisao").innerHTML = "O resultado é " + divisao
}
function calcularExe4(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let media = ((n1*2) + (n2*3)) /2
    document.getElementById("media").innerHTML = "A média ponderada das notas é: " + media
}
function calcularExe5(){
    let preco = document.getElementById("preco").value
    let novop = preco - (preco * 10/100)
    document.getElementById("novop").innerHTML = "O novo valor do produto é: " + novop 
}
function calcularExe6(){
    let salario = Number(document.getElementById("salario").value)
    let venda = Number(document.getElementById("venda").value)
    let comissao = venda * 0.03
    let novosal = salario + comissao
    document.getElementById("comissao").innerHTML = "Sua comissão esse mês será de: R$ " + comissao
    document.getElementById("novosal").innerHTML = "Seu salario + comissão será de: R$ " + novosal
    
}
function calcularExe7(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value
    let mult = n1 * n2 * n3
    document.getElementById("mult").innerHTML = "A multiplicação dos três números é: " + mult


}
function calcularExe9(){
    let b1 = Number(document.getElementById("b1").value)
    let b2 = Number(document.getElementById("b2").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((b1 + b2) * altura ) / 2
    document.getElementById("area").innerHTML = "A área desse trapézio é: " + area
}
function calcularExe10(){
    let l1 = Number(document.getElementById("l1").value)
    let l2 = Number(document.getElementById("l2").value)
    let area = l1 * l2
    document.getElementById("area").innerHTML = "A área do quadrado é: " + area
}

