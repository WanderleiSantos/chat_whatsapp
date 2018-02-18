import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}  >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontSize: 25 }} > Chat WhatsApp </Text>
        </View>

        <View style={{ flex: 2 }} >
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder="E-mail" />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder="Senha" />
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <TouchableHighlight 
                    activeOpacity = {0.3}
                    underlayColor = {'white'}                    
                    onPress={() => Actions.formCadastro() }
                >
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}  > Ainda não tem cadastro? Cadastre-se </Text>
                </TouchableHighlight>
            </View>
        </View>

        <View style={{ flex: 2 }} >
            <Button color='#115E54' title="Acessar" onPress={() => false} />
        </View>
        
    </View>
);