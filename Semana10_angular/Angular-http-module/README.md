# Aula Angular http-module

** O objetivo dessa aula é integrar a aplicação com um back-end (project-nodejs), ou seja, tirar o array de colaboradores que antes se encontrava no
"shared/services/colaborators.service.ts" e passar a fazer a requisição dela através de http requests

** Para o funcionamento desse projeto, é necessário baixar o "project-nodejs" e rodar o comando `npm run start` no terminal

** Arquivos com explicações:
- shared/shared.module.ts
- shared/services/colaborators.service.ts
- features/listing/components/colabs/colabs.component.ts

# Notas

1) O Angular tem um módulo próprio chamado `HttpClientModule` que serve pra ajudar a fazer as requisições para o back-end.
Ele é importado no "shared.module".

2) As requisições podem demorar um tempo para ser completada, então precisamos de algum processo para lidar com isso que seja parecido
com uma promise. No Angular nos temos o RxJs com os Observables que ajudam nesses casos de requisiçoes assíncronas. Basicamente, todas
as requisições http feitas na nossa "colaborators.service.ts" vão devolver um Observable
