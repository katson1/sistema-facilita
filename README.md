# API-facilita
Sistema de Gerenciamento de Clientes e Geração de Menor Rota - Facilita

> [Como instalar a API localmente:](#dev)

> [Como usar a API:](#routes)

<a name="dev"></a>
## Como instalar a API localmente:

**Você precisa ter instalado na sua máquina:**  [node.js v20](https://nodejs.org/en/download/) e [postgres v16.0](https://www.postgresql.org/download/).

1. Acesso ao PostgreSQL
   
Abra o terminal ou prompt de comando e conecte-se ao PostgreSQL usando o seguinte comando. Você precisará inserir a senha do usuário do banco de dados quando solicitado.

```
psql -U usuario_do_banco
```

2. Criação do Banco de Dados
   
Substitua `usuario_do_banco` pelo nome de usuário do seu banco de dados PostgreSQL.
Uma vez conectado, crie o banco de dados executando:
```sql
CREATE DATABASE nome_do_seu_banco;
```
Substitua `nome_do_seu_banco` pelo nome desejado para o seu banco de dados.

3. Conexão ao Banco de Dados
   
Para se conectar ao banco de dados que você acabou de criar, use o comando:
```bash
\c nome_do_seu_banco
```
4. Criação da Tabela
   
Com o banco de dados selecionado, execute o seguinte comando SQL para criar a tabela clientes:
```
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(255) NOT NULL
);
```
5. Alteração da Tabela
   
Para adicionar as colunas coordenada_x e coordenada_y na tabela clientes, execute:
```
ALTER TABLE clientes
ADD COLUMN coordenada_x INTEGER,
ADD COLUMN coordenada_y INTEGER;
```

### Agora que temos o banco e tabela criados, vamos ao projeto:
1. Clone o projeto [frontend](https://github.com/katson1/sistema-facilita-frontend).
2. Instale os pacotes necessários no projeto.
  ```
npm install
  ```

### Agora que temos o frontend e tabela criados, vamos ao projeto back-end:
Na pasta do projeto, utilize o seguinte comando no terminal:
1. Clone este projeto.

2. Instale os pacotes necessários no projeto.
    
Na pasta do projeto, utilize o seguinte comando no terminal:
  ```
npm install
  ```
3. Configure o .env
   
Copie o arquivo .env.example para .env:
  ```
cp .env.example .env
  ```
Faça as mudanças necessárias no seu .env, seguindo os comentário no arquivo.

4. Execute o projeto
   
Na pasta do projeto, utilize o seguinte comando:
  ```
npm start
  ```
5. Execute o projeto front-end
   
Na pasta do projeto front-end, utilize o seguinte comando:
  ```
npm start
  ```
Uma janela do navegador padrão irá abrir.
<a name="routes"></a>
## Como usar a API (rotas):

Acesse: http://localhost:3001/api-docs/


## Authors:
- [Katson](https://github.com/katson1)
