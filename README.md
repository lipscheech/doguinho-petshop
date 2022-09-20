# Doguinho petshop

Este projeto foi desenvolvido no curso **JS na WEB: CRUD com javascript assincrono** da alura.

onde foi utilizado um banco de dados fake apenas para demonstração do CRUD.

## Depêndencias

Para executar o projeto, é necessário ter instalado o nodeJS, que por sua vez possibilitará instalar o json-server, necessário para execução. E opcionalmente o browser-sync.

Tendo já instalado o nodeJS, insira o seguinte comando pelo terminal na pasta do projeto:

```js
npm i
```

para poder instalar todas as dependências necessárias para executar o código.

Para instalar o json-server, execute:

```js
npm i -g json-server
```

caso queira instalar globalmente. Caso queira instalar apenas para este projeto, execute na pasta principal o seguinte comando:

```js
npm i json-server
```

Logo após, execute:

```js
npm i -g browser-sync
```

ou

```js
npm i browser-sync
```

Lembrando que o browser-sync não é necessário, caso tenha a extensão do live server no vscode.

## Executando o código

Para executar o código desenvolvido, abra a pasta no seu editor de preferência, no meu caso eu utilizei o vscode. No terminal, abra a pasta do projeto e digite o seguinte comando para rodar o json server:

```js
json-server --watch db.json
```

para gerar um servidor com o banco de dados.

Caso não vá utilizar o live server, execute então:

```js
browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
```
