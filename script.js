const fs=require('fs')

function CarregarContatos(){
    const data=fs.readFileSync('teste.json')
    const contatos=JSON.parse(data)
    return contatos
}

function ExbirContatos(contatos){
contatos.forEach((contato,index) => {
    console.log(`Contato: ${index+1}`);
    console.log(`nome: ${contato.nome}`);
    console.log(`telefone: ${contato.telefone}`)
    console.log(`email: ${contato.email}`)
    console.log('-----------------------')
});
}
const contatos=CarregarContatos()
    ExbirContatos(contatos)
