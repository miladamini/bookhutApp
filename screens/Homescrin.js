import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {Ditailecom} from '../components'

const HomeScreen = (props) => {
    return (<View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#ffffff', height: 35, width: '100%', elevation: 20,}}>
            <Text style={{
                textAlign: 'center',
                marginTop: 'auto',
                margin: 5,
                fontSize: 25,
                color: '#7fa661',
                fontWeight: 'bold',
                flex: 1
            }}>کلبه کتاب</Text>
        </View>
        <StatusBar animateda/>
        <Ditailecom/>
    </View>)
}

export {HomeScreen}