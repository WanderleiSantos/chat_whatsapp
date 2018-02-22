import React from 'react';
import { View, Text, StatusBar, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }} >
        <StatusBar backgroundColor='#114D44'/>   

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <View style={{ height: 50, justifyContent: 'center' }} >
                <Text style={{ color:'#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10  }} > Chat WhatsApp </Text>
            </View>   

            <View style={{ flexDirection: 'row', marginRight: 10 }} >
                <View style={{ justifyContent: 'center', marginRight: 10, alignItems: 'center' }} >
                    <TouchableHighlight
                        activeOpacity={ 0.3 }
                        underlayColor={ '#115E54' }
                        onPress={() => Actions.addContato()}
                    >
                        <Icon name="md-person-add" style={{ paddingLeft: 10, color: 'white' }} />
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center' }} >                    
                    <Icon name="md-exit" style={{ marginLeft: 10, color: 'white' }} />
                </View>
            </View>
        </View>

        <TabBar {...props} style={{ backgroundColor: '#115E54', elevation: 0 }} />
    </View>
);