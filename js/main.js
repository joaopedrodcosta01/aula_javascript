function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigador por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://google.com");
    window.location.href = "https://google.com";
}

function trocar(elemento){
          elemento.innerHTML = "Obrigado por passar o mouse!";
    //    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
//    alert("Trocar texto");
}

function voltar(elemento){
          elemento.innerHTML = "Passe o mouse aqui"
    //    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
//function clicou(){
//    alert("Obrigado por clicar");
//}

//function validaIdade(idade){
//    var validar;
//    if(idade >= 18){
//        validar = true
//    }else{
//        validar = false
//    }
//    return validar;
//}

//var idade = prompt("Qual sua idade:")
//console.log(validaIdade(idade));

//function soma(n1,n2){
//    return n1+n2;
//}

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/* var count;
for(count=0; count <=5;count++){
    alert(count);
};
*/
/* var count = 0;
while(count<=5){
    console.log(count);
    alert(count)
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?")
// var idade = 18;
if(idade >= 18){
    alert("Maior de idade")
}

else{
    alert("Menor de idade")
}
*/


/*var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var fruta = {nome: "maçã", cor:"vermelha"}
//console.log(fruta);

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var nome = "João Pedro";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem idade " + idade);
//alert(idade + idade2);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"))