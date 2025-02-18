const fs=require ('fs')

function carregartarefas(){
    const data=fs.readFileSync('tarefas.json', 'utf8')
    const tarefas=JSON.parse(data)
    return tarefas
}

function exibirtarefas(tarefas){
tarefas.forEach((tarefa,index)=> {
console.log(`tarefa: ${index +1}`)
console.log(`titulo: ${tarefa.titulo}`)
console.log(`descrição: ${tarefa.descricao}`)
console.log(`status: ${tarefa.status}`)
console.log(`_______________________________________`)
})}
function adicionartrefas(tarefas,novatarefa){
novatarefa.id=tarefas.length +1
tarefas.push(novatarefa);
fs.writeFileSync('tarefa.json', JSON.stringify(tarefas,null,2));
console.log('Tarefa adcionada com sucesso!')
}
const tarefas=carregartarefas();
exibirtarefas(tarefas);

const novatarefa={
    titulo:"fazer exercicio em JavaScript",
    descricao:"Completar exercicio json",
    status:"Pedente"
}
adicionartrefas(tarefas, novatarefa)

exibirtarefas(tarefas);