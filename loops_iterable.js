// Selecionar todos os li's
const itens = document.querySelectorAll('li');

for(const item of itens) {
    // Adicionando uma classe em cada li
    item.classList.add('ativo')
}

// Utilize o for...in para listar todos as propriedades e valores
// do objeto window
for(const windowKey in window) {
    console.log(windowKey + ': ' + window[windowKey])
}
