# API de Gerenciamento de Usuários

## **Descrição do Projeto**
Esta é uma API RESTful desenvolvida em **Node.js** com o framework **Express** e o ORM **Sequelize**, conectada a um banco de dados PostgreSQL. O objetivo principal é gerenciar usuários, permitindo operações como criação, listagem e exclusão de registros. A aplicação segue boas práticas de desenvolvimento e organização, sendo ideal para projetos que necessitem de uma base sólida para gerenciamento de dados.

---

## **Problema Resolvido**
A API resolve a necessidade de gerenciar dados de usuários de forma eficiente e escalável. Ela fornece endpoints para criar, listar e excluir usuários, permitindo que sistemas externos se integrem facilmente para realizar essas operações. Este projeto é especialmente útil para aplicações que demandam um backend simples e funcional para gerenciamento de dados.

---

## **Instruções de Instalação e Execução**

### **Pré-requisitos**
- Node.js instalado (versão LTS recomendada).
- PostgreSQL configurado e em execução.
- Gerenciador de pacotes `npm` ou `yarn`.

### **Passos para Instalação**
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd api-user-nodejs
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
    - Crie um banco chamado `db_users` no PostgreSQL.
    - Atualize as credenciais no arquivo `config/database.js`.

4. Execute as migrações para criar as tabelas:
   ```bash
   npx sequelize db:migrate
   ```

### **Executando a Aplicação**
1. Inicie o servidor:
   ```bash
   npm start
   ```

2. Acesse a API em `http://localhost:3000`.

---

## **Como Contribuir**
1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Descrição da feature"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request descrevendo suas alterações.

---

## **Documentação dos Endpoints**

### **Base URL**
`http://localhost:3000/usuarios`

### **Endpoints Disponíveis**

| Método | Endpoint         | Descrição                              | Corpo da Requisição (JSON)                     |
|--------|------------------|----------------------------------------|-----------------------------------------------|
| POST   | `/create`        | Cria um novo usuário                  | `{ "name": "John", "age": 30, "email": "john@example.com" }` |
| GET    | `/all`           | Retorna todos os usuários cadastrados | N/A                                           |
| DELETE | `/delete/:id`    | Exclui um usuário pelo ID             | N/A                                           |

**Exemplo de Resposta (GET /all):**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "John",
    "age": 30,
    "email": "john@example.com",
    "createdAt": "2025-01-21T19:00:00Z",
    "updatedAt": "2025-01-21T19:00:00Z"
  }
]
```

**Exemplo de Resposta (DELETE /delete/:id):**
```json
{
  "message": "Usuário deletado com sucesso"
}
```

---

## **Principais Features**
- Criação de usuários com validação básica.
- Listagem completa dos usuários cadastrados.
- Exclusão segura de registros por ID.

---

## **Exemplo de Consumo da API**

### Utilizando cURL:

1. Criar um usuário:
   ```bash
   curl -X POST http://localhost:3000/usuarios/create    -H "Content-Type: application/json"    -d '{"name":"John","age":30,"email":"john@example.com"}'
   ```

2. Listar todos os usuários:
   ```bash
   curl http://localhost:3000/usuarios/all
   ```

3. Deletar um usuário pelo ID:
   ```bash
   curl -X DELETE http://localhost:3000/usuarios/delete/123e4567-e89b-12d3-a456-426614174000
   ```

---

### O que foi aprendido com este projeto?
- Configuração do ambiente Node.js com Express e Sequelize.
- Conexão com banco de dados PostgreSQL utilizando ORM.
- Implementação de endpoints RESTful seguindo boas práticas.

---

## Contato

Para dúvidas ou sugestões, entre em contato através do meu [LinkedIn](https://www.linkedin.com/in/eduardoramiro).