import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FoterComponent} from './components';
import {BottomTab} from './screens';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="home" component={BottomTab}/>
            </Stack.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Drawer.Navigator
        //         drawerContent={() => < FoterComponent/>}
        //         initialRouteName="Home"
        //         screenOptions={{
        //             headerShown: false
        //         }}
        //     >
        //
        //         <Drawer.Screen name="tap" component={BottomTab}/>
        //     </Drawer.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
