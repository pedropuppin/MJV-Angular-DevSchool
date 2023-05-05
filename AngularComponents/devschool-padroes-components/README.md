# Sobre o Storybook

É uma ferramenta para desenvolvimento UI. Ela torna o desenvolvimento mais rápido e fácil ao isolar componentes.
Isso permite trabalhar em um componente por vez.

Para instalar no projeto, rodamos `npx sb init`

# Instruções

Instalar dependências com `npm install`

Rodar projeto com `npm run storybook`

# Exercícios

1) Crie um componente de formulário
2) Crie um componente que utilize ng-content
3) Crie um componente que se possa customizar o template a partir de um input de TemplateRef
4) Crie um mixin e o utilize para adicionar comportamento a um dos componentes acima.


# Arquivos com explicações

1) Pure Components -> src/app/shared/components/pure-components

2) Form Components -> src/app/shared/components/counter

3) Father/Son Component -> src/app/shared/components/parent-child

4) Content-Projection -> src/app/shared/components/ng-content-select
                      -> src/app/shared/components/ng-content-simple

5) Diretivas para adicionar comportamento à conteúdo -> src/app/shared/components/content-trigger

6) Custom templates -> src/app/shared/components/custom-templates

7) Configurable Templates -> src/app/shared/components/configurable/configurable

8) Dynamic Components -> src/app/shared/components/dynamic

9) Mixin Components -> src/app/shared/components/post

10) Recursive Components -> src/app/shared/components/recursive
