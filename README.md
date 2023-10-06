# Pokemon 
![Pokemon](https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99)

Esta é uma API simples que fornece informações sobre Pokémon. Ela utiliza a biblioteca [utils-playground](https://www.npmjs.com/package/utils-playground) para buscar detalhes dos Pokémon.
  
## Tecnologias Utilizadas

- Linguagem de programação:     ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- Framework: [Express](https://www.npmjs.com/package/express)
- Biblioteca: [utils-playground](https://www.npmjs.com/package/utils-playground)



## Instruções de Uso da API PokeDex
A API Pokemon é uma ferramenta simples para obter informações sobre Pokémon. Siga estas etapas para começar a usá-la:

### 1. Clone o Repositório
- Clone o repositório da API Pokemon para seu ambiente de desenvolvimento local:

### 2. Instale as Dependências
- Certifique-se de ter as dependências necessárias instaladas. No diretório do projeto, execute o seguinte comando para instalar as dependências:

npm init -y
npm install express
npm install -D nodemon

### 3. Inicie o Servidor
- Inicie o servidor da API Pokemon com o seguinte comando:


nodemon ./src/index.js


### 4. Baixe o Insomnia
- Para testar os endpoints da API, você pode usar o [Insomnia](https://insomnia.rest/download), uma ferramenta de teste de API. Faça o download do [Insomnia](https://insomnia.rest/download) e instale-o no seu sistema.

- Agora você está pronto para começar a usar a API PokeDex e testar os endpoints usando o Insomnia.

## Uso

### Listar Pokémon
Endpoint: `/pokemon`
![Captura de Tela (16)](https://github.com/Lxcaxs-pessoa/Pokemon/assets/141878188/aefb5d67-8039-452f-8d47-eddd4f1c2ced)

- *GET* `http://localhost:3000/pokemon?page=<número_da_página>`
- Recupere uma lista de Pokémon. Você pode especificar o número da página para navegar pela lista.

### Pesquisar por um Pokémon

Endpoint: `/pokemon/:<Id_ou_nome>`
![Captura de Tela (17)](https://github.com/Lxcaxs-pessoa/Pokemon/assets/141878188/9064131c-c764-431c-b5b6-bbc9c766b626)

- *GET* `http://localhost:3000/pokemon/<Id_ou_nome>`
- Recupere detalhes sobre um Pokémon específico fornecendo seu ID ou nome.

## Observações:

- Todas as rotas seguem os padrões REST.
- Todas as requisições são assíncronas.
