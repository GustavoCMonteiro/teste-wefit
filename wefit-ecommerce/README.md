# **Front End WeFit Ecommerce**

O projeto consiste em uma página feita com React, de um mini e-commerce de filmes. Foi requisitado para um teste e vaga para empresa Wefit.

## **Desafio de Estruturação de Projeto React + TypeScript + styled-components**
O desafio consiste na criação de um site de e-commerce simplificado do zero, onde o candidato terá que criar um fluxo com três módulos/telas.

### **São elas**

**Home**: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho.
**Carinho**: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de empty com a opção de voltar para tela inicial.
**Compra realizada**: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.

### **Sobre a API**

Para o desafio, simularemos uma API, onde o candidato poderá baixar o .json com a lista de objetos aqui:

Para simular um servidor, recomendamos que o candidato utilize o json-server. Se preferir outra biblioteca, pode ficar à vontade para utilizar. 😄

Se possível, inclua o comando para iniciar o servidor da API no package.json do projeto.

## **Tecnologias usadas**

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## **Rodar Projeto Front-end**

Primeiramente clone o repositório e entre no diretório:

```bash
    # Clone o repositório
    > git clone git clone https://github.com/GustavoCMonteiro/teste-wefit.git

    # Entre no diretório
    > cd wefit-ecommerce
```

Instale as depedências do projeto:

**Para instalar as dependências e rodar o projeto é necessário ter [Node](https://nodejs.org/en/) e [NPM](https://www.npmjs.com/) instalados na sua máquina**

```bash
    # Instale as dependências
    > npm install
```

Após instalar as depêndencias você já pode rodar o projeto:

```bash
    # Rodar o projeto
    > npm run dev

    # Rodar o servidor Json
    > npm run json-server
```
