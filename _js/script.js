function calculo(){/* só teste */

 var recnome = document.querySelector('input#qnome')
 var recqalt = document.querySelector('input#qalt')
 var recqpeso = document.querySelector('input#qpeso')

 var recebenome = (recnome.value)
 var recebealtura = Number(recqalt.value)
 var recebepeso = Number(recqpeso.value)

 console.log(`Nome: ${recebenome}`)
 console.log(`Altura ${recebealtura}`)
 console.log(`Peso ${recebepeso}`)
 Resposta.innerHTML = (`Agora`)

 if(recebenome == 0 || recebepeso == 0 || recebealtura == 0){
    alert ('Faltando dados')
    Resposta.innerHTML = ('?!')
 } // imc = peso / altura * altura

 var imc = 0
 var altura2 = (recebealtura * 2)
 imc = (recebepeso / altura2)
 let imc2 = imc.toFixed(2)

 console.log(`Imc de ${imc2}`)
 Resposta.innerHTML = (imc2)
}