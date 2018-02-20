import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground style={{ flex: 1, padding: 10 }} source={require('../imgs/bg.png')} >
        <View style={{ flex: 1, padding: 10 }} >
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, color: 'white' }} > Seja Bem Vindo!! </Text>
                <View style={{ paddingTop: 20 }} >
                    <Image source={require('../imgs/logo.png')} />
                </View>
            </View>

            <View style={{ flex: 1 }} >
                <Button color='#115E54' title="Fazer Login" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </ImageBackground>    
);
