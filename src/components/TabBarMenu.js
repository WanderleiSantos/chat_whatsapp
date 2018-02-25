import React from 'react';
import { View, Text, StatusBar, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { habilitaContatoInclusao } from '../actions/AppActions';

const TabBarMenu = props => (
    <View style={{ backgroundColor: '#42a5f5', elevation: 4, marginBottom: 6 }} >
        <StatusBar backgroundColor='#0077c2'/>   

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <View style={{ height: 50, justifyContent: 'center' }} >
                <Text style={{ color:'#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10  }} > Chat WhatsApp </Text>
            </View>   

            <View style={{ flexDirection: 'row', marginRight: 10 }} >
                <View style={{ justifyContent: 'center', marginRight: 10, alignItems: 'center' }} >
                    <TouchableHighlight
                        activeOpacity={ 0.3 }
                        underlayColor={ '#42a5f5' }
                        onPress={() =>  { Actions.addContato(); props.habilitaContatoInclusao(); }}
                    >
                        <Icon name="md-person-add" style={{ paddingLeft: 10, color: 'white' }} />
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center' }} >  
                    <TouchableHighlight
                        activeOpacity={ 0.3 }
                        underlayColor={ '#42a5f5' }
                        onPress={() => firebase.auth().signOut().then(() => Actions.formLogin()) }
                    >                                  
                        <Icon name="md-exit" style={{ marginLeft: 10, color: 'white' }} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>

        <TabBar {...props} style={{ backgroundColor: '#42a5f5', elevation: 0 }} />
    </View>
);

export default connect(null, { habilitaContatoInclusao })(TabBarMenu);