import React from 'react'
import { View, StyleSheet  } from 'react-native'

{/*import Aleatorio from './components/Aleatorio'
import MinMax from './components/MinMax'
import CompPadro, { Comp1, Comp2 } from './components/Multi'
import Primeiro from'./components/Primeiro'}*/}
import Titulo from './components/Titulo'


export default () => (
    <View style={style.App}>
        <Titulo principal="Cadastro principal"
            secundario="Tela de cadastro do produto"/>
        {/*<Aleatorio min={10} max={60}/>
        <MinMax min="3" max="20"/>
        <CompPadro></CompPadro>
        <Primeiro></Primeiro>
        <Comp1></Comp1> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#BB2719',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 40
    }
})