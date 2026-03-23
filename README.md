# Controle de Estoque - Mini ERP Industrial

Este projeto é uma API de um sistema de gestão industrial focado no controle rigoroso de inventário, movimentações e gestão de acessos por cargos. Desenvolvida com foco em escalabilidade e organização seguindo o padrão de módulos no Node.js.

## 🚀 Funcionalidades

* **Gestão de Usuários e Acessos:** Sistema de Login e Registro com autenticação JWT.
* **Controle de Cargos (RBAC):** Diferentes níveis de permissão onde cada cargo possui funções específicas dentro do sistema.
* **Gestão de Produtos:** Cadastro e manutenção do catálogo de itens industriais.
* **Controle de Estoque e Inventário:** Monitoramento em tempo real das quantidades disponíveis.
* **Movimentações:** Registro de entradas e saídas com lógica de validação.
* **Tratamento de Conflitos:** Validação de erros para evitar estoque negativo ou inconsistências em operações simultâneas.

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework Web:** Express
* **Banco de Dados:** MySQL 2
* **Autenticação:** JSON Web Token (JWT)
* **Variáveis de Ambiente:** Dotenv

## 📂 Estrutura do Projeto

A API utiliza uma arquitetura modularizada para facilitar a manutenção e separação de responsabilidades:

* `src/config/db`: Configurações de conexão com o banco de dados e scripts SQL.
* `src/middlewares`: Camadas de interceptação para validações e segurança.
* `src/modules`: Divisão da lógica de negócio por domínio (Auth, Movements, Products, Stock, Users).
* `src/utils`: Funções utilitárias e helpers compartilhados.
* `app.js` & `server.js`: Configurações do servidor e inicialização da aplicação.

## 🔧 Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Antonyduarte/Controle-de-estoques-mini-ERP.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Banco de Dados:**
    * Utilize o arquivo `src/config/db/schema.sql` para criar as tabelas no seu MySQL.
    * Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais:
        ```env
        DB_HOST=localhost
        DB_USER=seu_usuario
        DB_PASS=sua_senha
        DB_NAME=controle_estoque
        JWT_SECRET=sua_chave_secreta
        PORT=3000
        ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```

## 🔐 Endpoints Principais

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/auth/login` | Realiza o login e retorna o token JWT. |
| `POST` | `/auth/register` | Cadastra um novo usuário no sistema. |
| `GET` | `/products` | Lista todos os produtos cadastrados. |
| `POST` | `/movements` | Registra uma nova entrada ou saída de material. |
| `GET` | `/stock` | Exibe o status atual do inventário e alertas de estoque. |

---

Desenvolvido por **Antony**