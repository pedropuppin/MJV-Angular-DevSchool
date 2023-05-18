# Semana 7 Angular - Template Driven

* Usa uma diretiva (ngModel) de two-way data-binding colocada na própria tag do input
que a gente quer ouvir.


# Passo a passo da aula

1) Criar uma service de usuários para guardar a lógica relacionada aos users (users.service.ts).
2) criar um model de user (user.model.ts).
3) Importar o `FormsModule` no módulo responsável pelo componente que vai usar o ngModel (login.module.ts).
4) Criar uma variável no TS para segurar o valor emitido pelo ngModule.
5) No HTML, colocar no input que vc quer escutar o `[(ngModule)] = "foo"`.
6) Criar a função de autenticação no "login-page.component.ts" e criar o bind no botão.
  - Essa função se aproveita do storage do navegador
  - O local storage fornece a possibilidade de vc armazenar informações sobre o usuário, o que premite, por exemplo, já deixar um usuário autenticado no site.
  - Nesse exemplo, usamos o session storage, ele guarda as informações por menos tempo. Quando fechamos a aba ele apaga as informaçôes.
  - Usamos o session storage para guardar uma chave e um valor.
7) Criar a função de `exit()` que vai limpar os dados do session storage
8) criar o guard para proteger as rotas
