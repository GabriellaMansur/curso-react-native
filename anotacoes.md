# React native

## Criando e iniciando o projeto

* Para criar o projeto executar `npx react-native init [nomeDoProjeto]`
* Já dentro da pasta criada, para rodar o projeto, execute `npx react-native run-android`
* Crie uma pasta src que é onde deixaremos o App.js e os componentes
* Veja exemplos simples da estrutura de um componente:
```javascript
import React from 'react'
import { Text } from 'react-native'

function App() {
    return <Text>Primeiro Componente</Text>
}

export default App

// componente usando função anônima
export default function () {
    return <Text>Primeiro Componente</Text>
}

// usando arrow function

```
* Tudo o que for colocado entre um par de chaves, mesmo que esteja com a tag text, é interpratada como JavaScript

### Componentes com propriedades
* Até o mommento o foco está sendo entender como funciona a componentização do react native, exportantoo e importando os componentes nas pastas
* Relenbrando: em JS podemos instanciar objetos de funções. Exemplo:
```javascript
function Produto(nome) {
    this.nome = nome
}

const p1 = new Produto('Caneta')
const p1 = new Produto('Caderno')

console.log(p1.nome, p2.nome)
```
* **Exemplo:**
  * Em App.js importamos o componente e passamos duas propriedades
```javascript
import React from 'react'
import { View, StyleSheet  } from 'react-native'

import MinMax from './components/MinMax'

export default () => (
    <View style={style.App}>
        <MinMax min={3} max={20}/>
    </View>
)

// O componente em si ficou:
export default (props) => {
    console.warn(props)
    return(
        <Text style={Estilo.fontG}>
            O valor {props.max} é maior que o valor de {props.min}
        </Text>
    )
}
```

* Desafio 1: crie um componente e passe dois valores numéricos para ele, um número mínimo e um máximo, e gere um valor aleatório enntre o valor min e max

* **Usando destructing para ler propriedades**
```javascript
const props = {min: 1, max: 60}

const { min, max } = props
```

* Essas pros que usamos são somente leitura, então sempre que precisarmos de modificar alguma coisa dentro do componente, usamos outra coisa. Não é bom alterar direamente nas propriedades, melhor criar outra variável e usá-la
* Como congelar um objeto para ele não ser alterado
```javascript
let props = Object.freeze({min: 1, max: 60})

// tentando alterar e não vai dar certo
props.min += 1000

```

### React Fragment
* Não é possível retonar múltiplos elementos a apartir de um elemento. Então se quisermos que isso aconteça. temos que envolver esses elementos pelo que o react native chama de fragment
```javascript
import React from "react";
import {Text } from "react-native"
import Estilo from "./estilo";

export default props => {

    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>     
    )
}

// deixar dessa outra forma mais simplificada também significa que está envolvido com fragment
    return(
        <>
            <Text style={Estilo.fontG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>     
    )
```

### Usando um botão