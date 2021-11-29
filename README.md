# NLW - Valoriza

## Regras

- Criação de utilizadores
  - Não é permitido criar mais do que um utilizador com o mesmo email;
  - Não é permitido registar utilizador sem email;

- Registo de TAG
  - Não é permitido registar mais uma tag com o mesmo nome;
  - Não é permitido registar tag sem nome;
  - Não é permitido registar tags a utilizadores que não sejam administradores;

- Registo de elogios
  - Não é permitido um utilizador registar um elogio para ele próprio;
  - Não é permitido registar elogios para utilizadores inválidos;
  - Não é permitido registar utilizador sem email;
  - O utilizador precisa de estar devidamente autenticado na aplicação.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`
