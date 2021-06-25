/*9. Uma requisição a um servidor é feita, caso o valor enviado para o
servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia
de caracteres em caixa-alta, caso contrário um erro é devolvido
informando “the request value is not supported”. Implemente uma
Promise que simule o caso descrito e implemente um teste para o caso
de sucesso e de erro. Além disso, a simulação deve conter um atraso
aleatório de 500 milissegundo a 2 segundos, simulando o atraso da
comunicação com o servidor. Dica: pesquisar sobre a função
setTimeout.*/


function query() {
    return new Promise((resolve, reject) => {
      let value = 111

      console.log('Aguardando resposta do servidor...')
      
      if (typeof value === 'string') {
        setTimeout(() => {
          resolve(value.toUpperCase())
        }, 2000)
      }else{
          setTimeout(() => {
            reject('The request value is not supported')
          }, 2000)
      }
    })
  }
  
  query()
    .then(result => { console.log(result) })
    .catch(message => { console.log(message) })


