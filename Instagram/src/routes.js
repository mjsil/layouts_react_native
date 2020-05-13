import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MenuHeader } from './setting';
import logo from './assets/logo.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Feed from './pages/Feed';
import Profile from './components/BottomTab/Profile';

const icons = {
    Feed: {
        lib: Feather,
        name: 'home'
    },
    Search: {
        lib: Feather,
        name: 'search'
    },
    More: {
        lib: FontAwesome,
        name: 'plus-square-o'
    },
    Heart: {
        lib: Feather,
        name: 'heart'
    }
}

export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Profile') {
                        return <Profile focused={focused} />
                    }

                    const { lib: Icon, name } = icons[route.name];

                    return <Icon name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#000'
            }}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Search' component={Feed} />
            <Tab.Screen name='More' component={Feed} />
            <Tab.Screen name='Heart' component={Feed} />
            <Tab.Screen name='Profile' component={Feed}
                options={{
                    title: ''
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: () => (
                    <Image source={logo} />
                ),
                headerLeft: () => (
                    <MenuHeader>
                        <TouchableOpacity>
                            <Feather name='camera' size={25} color='#000' />
                        </TouchableOpacity>
                    </MenuHeader>
                ),
                headerRight: () => (
                    <MenuHeader>
                        <TouchableOpacity>
                            <Feather name='send' size={25} color='#000' />
                        </TouchableOpacity>
                    </MenuHeader>
                )
            }}
            >
                <Stack.Screen name='Stack' component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}