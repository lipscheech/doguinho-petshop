# Doguinho petshop

Este projeto foi desenvolvido no curso **JS na WEB: CRUD com javascript assincrono** da alura.

onde foi utilizado um banco de dados fake apenas para demonstração do CRUD.

## Depêndencias

Para executar o projeto, é necessário ter instalado o nodeJS, onde será necessário o json-server e opcionalmente o browser-sync.

Tendo já instalado o nodeJS, execute:

```js
npm i
```

para poder instalar todas a dependências necessárias para executar o código.

Para instalar o json-server, basta abrir seu terminal e execute:

```js
npm i -g json-server
```

caso queira instalar globalmente. Caso queira instalar apenas para executar este projeto, execute:

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

Para executar o código desenvolvido, abra a pasta no seu editor de preferência, no meu caso eu utilizei o vscode. No terminal digite o seguinte comando para rodar o json server:

```js
json-server --watch db.json
```

ou o live server no vscode.

Caso não vá utilizar o live server, execute então:

```js
browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
```
