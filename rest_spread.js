// Função que criar um botao
// function createButton(background = 'blue', color = 'red') {

//     const buttonElement = document.createElement('button')
//     buttonElement.style.background = background;
//     buttonElement.style.color = color;
//     return buttonElement;
// }

// const redButton = createButton('black', 'tomato')

// Utilize o método push para inserir as frutas ao final de comidas
const frutas = ['banana', 'uva', 'morango']
const comidas = ['pizza', 'batata']
comidas.push('Cenoura', 'arroz', ...frutas)
console.log(comidas)