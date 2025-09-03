# To Do List

Projeto de lista de tarefas (To Do List) utilizando as seguintes tecnologias:

## Stacks

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express
- **Banco de dados**: MySQL + Prisma ORM
- **Autenticação**: JWT (opcional, mas recomendada)

## Objetivo

Desenvolver uma aplicação web moderna para gerenciamento de tarefas, com autenticação de usuários.

## Estrutura Sugerida

- `/frontend` — Aplicação React.js com Tailwind CSS
- `/backend` — API REST com Node.js, Express, Prisma e integração com MySQL

## Como começar

1. Clone o repositório:
    ```bash
    git clone https://github.com/GuilhermeBotingnon/to-do-list.git
    ```

2. Siga as instruções de cada pasta (`/frontend` e `/backend`) para instalar as dependências e rodar os projetos.

## Funcionalidades Básicas

- Cadastro e login de usuário (JWT)
- Adicionar, editar, remover tarefas
- Filtrar tarefas por status
- Interface responsiva

## Sugestão de comandos para inicializar cada parte

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Contribuindo

Sinta-se à vontade para abrir issues e pull requests!
