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

A principal funcionalidade está em um **endpoint que recebe via POST** um array contendo a transação a transação, e será retornado um array contendo o id da mesma e a **score**, que representa o risto de fraude. Veja um teste do Postman abaixo.

[]()

## Algoritmo e pontuação

Para realizar a pontuação, usei como base 4 parâmetros, presentes no arquivo *score.js*:
- Caso o nome do cliente e o nome presente no cartão sejam diferente (**40 pontos**).
- Caso a localização da compra seja diferente da localização do usuário (**40 pontos**).
- Caso o comprador seja menor de idade, visto que é não é comum menores realizarem compras e ter cartão de crédito (**10 pontos**).
- Caso o valor da compra seja acima da média de valores das transações do ecommerce (**10 pontos**). A média foi feita a partir do *JSON* de transações passadas no desafio.

**OBS**: Os casos que contam 40 pontos são considerados como **"evidencias" mais graves de uma possível fraude**, enquanto os de **10 pontos são mais moderadas** que podem acontecer em situações normais, porém devem ser analisadas.

## Gestão e organização

Para conseguir ser mais produtivo no desenvolvimento, utilizei:
- O [Trello]() para anotar requisitos/referencias e gerenciar tarefas.
- A ferramenta e extensão do Chrome [Clockify]() para marcar e metrificar o tempo gasto. O tempo gasto total foi de XX:XX
- Commits pequenos e descritivos para complementar na gestão de tarefas

## Considerações finais

- Inseri o *JSON* de transações no projeto para poder fazer uma requisição GET que retorna todas transações.
- Sobre fugir ou nao do escopo
- Sobre a experiencia


Feito com :hearts: para Upnid por [Rafael Emery](https://rafaelemery.github.io)

