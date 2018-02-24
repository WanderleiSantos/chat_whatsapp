import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { modificaMensagem, enviarMensagem } from '../actions/AppActions';

class Conversa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }} >
                <View style={{ flex: 1, paddingBottom: 20 }} >

                </View>
                <View style={{ flexDirection: 'row', height: 45, alignItems: 'center' }} >
                    <TextInput 
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: 'white', fontSize: 15 }}
                    />

                    <TouchableHighlight
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            backgroundColor: '#115E54',
                            borderRadius: 45,
                            marginLeft: 5                            
                        }}  
                        activeOpacity={ 0.3 }             
                        underlayColor={'#115E54'}
                        onPress={() => this.props.enviarMensagem(this.props.mensagem) }
                    >
                        <Icon name="send" style={{ fontSize: 26, marginLeft: 10, color: 'white' }} />
                    </TouchableHighlight>
                    

                </View>
            </View>
        );
    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa);