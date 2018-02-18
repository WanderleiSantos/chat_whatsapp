import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const imageFundo = require('../imgs/bg.png');

const formLogin = props => {    
    return (
    <ImageBackground 
        style={{ flex: 1 }}
        source={imageFundo}
    >
        <View style={{ flex: 1, padding: 10 }}  >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 25 }} > Chat WhatsApp </Text>
            </View>

            <View style={{ flex: 2 }} >
                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder="E-mail" 
                    onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder="Senha" 
                    secureTextEntry
                    onChangeText={texto => props.modificaSenha(texto)}                
                />
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
    </ImageBackground>
    );
};

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);