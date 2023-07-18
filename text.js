var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
var novaLista = []

for(i = 0; i < lista.length; i++){
    if(lista[i] === "Vermelho"){
        console.log('off')
    }else{
        novaLista.push(lista[i])  
    }
}
console.log(novaLista)
novaLista = lista;
console.log(lista)

cor = "Branco"
lista.splice(cor)
console.log(lista)