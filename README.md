# Desafio Upnid

Aqui ficará um breve resumo (...)

Imagem da estrutura de pastas

### Documentação

### Testes

## Tecnologias usadas

- [Visual Studio Code]()
- [Postman]()
- [Node.js]()

### Pacotes
- [Nodemon]()
- [Express]()

## Rodando o projeto

Faça um clone do repositório:
```
git clone https://github.com/RafaelEmery/desafio-upnid.git
```

Instale as dependencias referenciadas em *package.json*:
```
npm install
```

Rode no servidor local *https://localhost:3000*:
```
npm start
```

## Usando a API

A principal funcionalidade está em um **endpoint do método POST** no qual você irá passar no corpo (*body*) da requisição a transação, e será retornado um array contendo o id da mesma e a **score**, que representa o risto de fraude. Veja um teste do Postman abaixo.

[Imagem do postman]()

## Algoritmo e pontuação

Para realizar a pontuação, usei como base 4 parâmetros, presentes no arquivo *score.js*:
- Caso o nome do cliente e o nome presente no cartão sejam diferente (**40 pontos**).
- Caso a localização da compra seja diferente da localização do usuário (**40 pontos**).
- Caso o comprador seja menor de idade, visto que é não é comum menores realizarem compras e ter cartão de crédito (**10 pontos**).
- Caso o valor da compra seja acima da média de valores das transações do ecommerce (**10 pontos**)

## Gestão e organização

## Considerações finais



Feito com :hearts: para Upnid por [Rafael Emery](https://rafaelemery.github.io)

