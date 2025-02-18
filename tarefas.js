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

const tarefas=carregartarefas();
exibirtarefas(tarefas);