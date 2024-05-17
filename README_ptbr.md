# Aplicativo _Find Books_ (Recomendação de Livros)

Bem-vindo ao repositório do Aplicativo de Recomendação de Livros _Find Books_! Esta aplicação utiliza o poder da Inteligência Artificial para fornecer recomendações personalizadas de livros com base nas buscas dos usuários. Construído com um conjunto de tecnologias modernas, incluindo JavaScript, React e a API do OpenAI, este projeto visa oferecer uma experiência de usuário fluida e inteligente.

## Funcionalidades

- **Recomendações Personalizadas de Livros**: Utiliza a API do OpenAI para analisar as consultas dos usuários e gerar recomendações de livros personalizadas.
- **UI Responsiva**: Construído com React, garantindo uma interface de usuário suave e responsiva.
- **Funcionalidade de Busca**: Os usuários podem buscar livros por título, autor ou gênero e receber recomendações baseadas em suas entradas.
- **Arquitetura Escalável**: Projetado com escalabilidade em mente para lidar com um número crescente de usuários e grandes volumes de dados.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação principal para desenvolvimento tanto no frontend quanto no backend.
- **React**: Biblioteca de frontend para construir interfaces de usuário dinâmicas e interativas.
- **API do OpenAI**: Fornece as capacidades de IA para analisar consultas de busca e gerar recomendações.

## Iniciando

### Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/cleitonfco/find-books-app.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd find-books-app
   ```
3. crie o arquivo `.env` e coloque sua própria chave da API OPENAI:
   ```
    PORT=5000
    BASE_URL=http://localhost:5000
    OPENAI_API_KEY=ss-proj-Ts5sxo8ZX5cBHsrAjmTkT3BluaFJX8xhh1FcjStiLUkYTPuv
   ```
4. Instale as dependências no diretório raiz:
   ```bash
   npm install
   ```
5. Instale as dependências no diretório `frontend`:
   ```bash
   cd frontend && npm install
   ```

## Preparando o Banco de Dados

Este aplicativo usa um banco de dados SQLite3 para armazenar um cache de dados de _embeddings_ obtidos do OpenAI. Para preencher o banco de dados, usaremos um arquivo CSV contendo dados de milhares de livros provenientes do Kaggle.com: [Amazon Books Reviews](https://www.kaggle.com/datasets/mohamedbakhet/amazon-books-reviews).

### Passos para preparar o Banco de Dados

1. **Download o arquivo CSV**

   Baixe o dataset do site Kaggle.com e descompacte o arquivo `books_data.csv` para a pasta `backend/data`.

2. **Converta o arquivo de dados para JSON**

   Execute o código abaixo para criar um arquivo JSON:
   ```bash
   cd backend/data
   node extract_from_csv.js
   ```

3. **Crie e popule o banco de dados**

   Ao executar o código a seguir, você cria o banco de dados, sua estrutura e ainda popula-o com _embeddings_ da IA:
   ```bash
   cd backend/data
   node createEmbeddings.js
   ```

### Executando a Aplicação

1. Inicie o servidor backend:
   ```bash
   cd backend && npm start
   ```
2. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   cd frontend && npm start
   ```

A aplicação deve estar rodando em `http://localhost:3000`. Abra-a em seu navegador para começar a usar.

## Uso

1. Insira uma entrada de pesquisa (prompt) na barra de pesquisa.
2. O aplicativo enviará a consulta para a API do OpenAI, que encontrará um conjunto de livros relacionados ao que foi buscado.
3. Navegue pelas recomendações e clique em qualquer livro para ver mais informações.

## Contribuindo

Agradecemos contribuições para melhorar este aplicativo! Por favor, siga estes passos para contribuir:

1. Faça um fork do repositório.
2. Crie um novo branch:
   ```bash
   git checkout -b feature/sua-nova-funcionalidade
   ```
3. Faça suas alterações e faça commit delas:
   ```bash
   git commit -m 'Adicione uma nova funcionalidade'
   ```
4. Faça o push para o branch:
   ```bash
   git push origin feature/sua-nova-funcionalidade
   ```
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença GNU GPLv3. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou contatar o proprietário do repositório em [cleitonfco@gmail.com].
