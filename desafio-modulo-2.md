# Desafios Módulo 02

> 1º desafio

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

> 2º desafio

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```

> 3º desafio

A partir do seguinte vetor:

```
var nomes = ["Carlito", "Joao", "Mateus"];
```

Preencha uma lista (`<ul>`) no HTML com os itens da seguinte forma:

- Carlito
- Joao
- Mateus
