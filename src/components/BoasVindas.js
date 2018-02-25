import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#FFF' }} >
        <View style={{ flex: 1, padding: 10 }} >
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >                
                <View style={{ paddingTop: 20 }} >
                    <Image style={{ height: 145, width: 145 }} source={require('../imgs/logoblue.png')} />
                </View>
                <Text style={{ fontSize: 20, color: '#8d8d8d', paddingTop: 15 }} > Seja Bem Vindo!! </Text>                
            </View>

            <View style={{ flex: 1 }} >
                <Button color='#42a5f5' title="Fazer Login" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </View>    
);
