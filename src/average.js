/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
const average = (array) => {
  // adicione seu código aqui
  let b = 'true';
  let soma = 0;
for (let i = 0; i < array.length; i += 1) {
  let verify = typeof array[i] !== 'string';
  if (typeof array[i] !== 'number') {
  b = 'false';
  }
  soma += array[i];
}
if (b === 'false' || array.length === 0) {
  return undefined;
}
let media = Math.round(soma / array.length); 
return media;
};

module.exports = average;
