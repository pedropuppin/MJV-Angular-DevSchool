# Angular - Arquitetura

Instalar dependencias com `npm install`

Abrir dois terminais:
Rodar servidor do angular com `npm run start`
e rodar servidor do backend no outro terminal com `npm run server`

** Arquivos com explicações:
    - app.module.ts
    - shared/core/async/todos-api.service.ts
    - shared/enviroments

# Anotações

1) No arquivo package.json temos o `"server": "json-server db.json"` que vai simular um banco de dados
    - cada campo na raiz do db.json vai representar um tipo de entidade

2) Retomar do 13:45

# Exercícios

- Adicionar o campo de descrição de uma tarefa
- Implementar uma página de detalhes do Todo (/todos/:id) que lista todos os dados da tarefa, utilizando o observable de ActivatedRoute.params para pegar o id da rota e mapear o id para o todo respectivo.
- Implementar estratégia de sincronização de dados otimista nas operações de adicionar/editar/deletar Todo (opcional)
