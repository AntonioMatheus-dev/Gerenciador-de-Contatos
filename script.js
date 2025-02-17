const fs=require('fs')

function recebercontatos(){
    const data=fs.readFileSync('teste.json')
    const contatos=JSON.parse(data)
    return contatos;
}
function exibircontatos(contatos){
    contatos.forEach((contato,index )=> {
        console.log(`Contato: ${index +1}`)
        console.log(`Nome: ${contato.nome}`)
        console.log(`Telefone:${contato.telefone}` )
        console.log(`e-mail: ${contato.email}`)
        console.log('------------------------------------')
    });
}
const contatos=recebercontatos()
exibircontatos(contatos)