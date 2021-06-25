# ListaJavaScript

Exercícios 

1. O que é o ES6?
    O ES6 ou ECMAScript nada mais é do que a especificação utilizada para implementar 
    a linguagem JavaScript. Além disso, o ES6 é a primeira atualização significativa para a linguagem desde ES5 que foi inicialmente lançado em 2009.
    O Java Script possui tipagem fraca, uma vez que as variáveis podem ser convertidas
    implicitamente. Além do mais a tipagem do JavaScript é dinâmica visto que os tipos
    das variáveis, retornos e parâmetros não são declarados pelo programador, mas sim
    verificados durante o tempo de execução. 



2. Exemplifique algumas features introduzidas no ES6.
    default parameters: Nos permite inicializar parâmetros com valores padrão, caso nenhum valor tenha sido especificado, ou caso o valor seja undefined.
        Exemplo:
        (function braziljs( date = '26 e 27 de Agosto',city = 'Porto Alegre' ) {   
            console.log(`BrazilJS Conf, ${date}, ${city}`); 
        }());
    
    RegExp flags "y": A RegExp /y, também chamada de sticky, busca apenas a partir do índice indicado pela propriedade lastIndex da expressão regular na string.
        Exemplo: 
        // Exemplo retirado da MDN var str = '#foo#'; var regex = /foo/y; regex.lastIndex = 1; regex.test(str); // true regex.lastIndex = 5; regex.test(str); // false (lastIndex é levado em conta com a flag /y) regex.lastIndex; // 0 

    
     RegExp flags "u": A RefExp /u (unicode) lida com pares substitutos (tais como \uD83D\uDE80) como code points e permite que você use code points escapes Unicode (como o \u{1F680}) em expressões regulares.
        Exemplo:
        "𠮷".match(/^.$/u)[0].length === 2; 
   

3. Qual a diferença entre var, let e const?

    var: utilizada para armazenar qualquer tipo de dado em variáveis, desde os primários (String, Number, Boolean, etc) até tipos complexos (estruturas criadas pelo desenvolvedor). Além disso, o var possui o que chamamos de escopo de função. Isso significa que dentro de uma mesma função, a referência da variável é a mesma. 

    let: utilizada quando o valor de uma variável pode ser sobrescrito. Além disso, o let possuei o que chamamos de escopo de bloco. Ou seja, uma mesma referência só existe enquanto estiver dentro de um bloco. 

    const: utilizado quando não podemos sobrescrever o valor de uma variável. Além disso, o let possuei o que chamamos de escopo de bloco. Ou seja, uma mesma referência só existe enquanto estiver dentro de um bloco. 

4. O que é destructuring e para quais propósitos pode ser utilizado?
    O destructuring é uma expressão JavaScript que torna possível extrair dados de qualquer objeto que seja iterável e coloca-los em outras variáveis.


5. O que é o DOM?
    O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS.
    Um dos grandes responsáveis por isso tudo é o objeto document que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da página Web poderá ser acessado através do objeto Javascript document.
  
6. Quais problemas o JavaScript assíncrono soluciona?
    O JavaScript assíncrono soluciona problemas de gargalos no sistema, pelo fato de ser assíncrono o sistema pode recarregar uma página ao mesmo tempo em que busca dados no banco de dados ou servidor, o que não ocorre com o JavaScript síncrono uma vez que é necessário esperar o término da execução da instrução anterior para então somente executar a próxima instrução.

7. Para que servem os comandos async e await?
    A palavra reservada async é utilizado antes de uma função para informar que esta função é assíncrona e o comando await necessita que a função tenha sido declarada como assíncrona para poder funcionar. Além disso, o comando await informa que o interpretador deve esperar que a promisse seja resolvida para continuar a execução. Portanto, o propósito dos comandos async/await é simplificar o uso de forma síncrona das promises.

8. Quais as vantagens de se usar Promises ao invés de callbacks?
    As promises sempre retornam algo, pode ser um valor que o programador espera, pode ser um valor qualquer ou pode retornar um erro, diferentemente do callback que é chamado e executado por uma função externa e normalmente não retorna valor algum.



ANOTAÇÕES DA AULA:

**Comparações de igualdade e uniformidade**

    Igualdade ampla ( == ): compara se os valores são iguais, porém, não compara se são do mesmo tipo.

    Igualdade estrita ( === ): compara se os valores são iguais e do mesmo tipo.

 
**Arrow Functions**

Sítaxe:
   =>

   Funções anônimas simples/curtas

**Callbacks**
    Callbacks são funções passadas como parâmetro para outras funções. Além disso, uma função callback é invocada pela função externa, além de ser uma ferramenta importante da programação assíncrona.
    Normalmente o callback é utilizado dentro de funções assíncronas para executar determinada ação ou tarefa complementar em cima do retorno.

    Exemplo:

    seTimeout( () => console.log('Olá'), 2000)

    Além disso, podemos criar nossa própria callback.

    Exemplo:

    function sum(a, b, callback){
        return callback(a + b);
    }

    sum (4, 7, e =>{
        let s = e * 2;
        console.log(s);
    });

**Programação Síncrona**
    Na programação síncrona todo código é executado em sequência de forma ordenada. Desse modo, a programação assíncrona pode ocasionar gargalos no sistema.

**Programação Assíncrona**
    Na progração assíncrona o código é executado de forma desordenada. Normalmente utiliza multithreads, o que reduz o garglado que funçoes pesada geram 

**Arrow Functions** 
    
    Funções anônimas simples/curtas, representado pela =>.
    Existem dois tipos de Arrow Functions, que são elas:

    Statemente: função caracterizada por conter um bloco de instruções determinados por chaves {}, além de possuir retorno explícito.

    Exemplo:

        const y = (a,b) => {
            let r = a + b;
            r /= 4;
            return r; 
        }

    Expression Body: função caracterizada por conter uma única expressão em seu corpo e não um bloco de comandos, além de possuir retorno explícito.

    Exemplo:
        const x = (a, b) => a + b;

    Promises: é a forma moderna de se programar assíncrono.