import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Ditailecom, FoterComponent} from '../components';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={FoterComponent}
                options={{
                    headerShown: false,
                    tabBarColor: "#333",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="Details"
                component={Ditailecom}

                options={{
                    headerShown: false,
                    tabBarColor: "#333",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="details" color={color} size={size}/>
                    )
                }}
            />


            <Tab.Screen
                name="Settings"
                component={FoterComponent}
                options={{
                    headerShown: false,
                    tabBarColor: "#333",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="settings-helper" color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export {BottomTab}