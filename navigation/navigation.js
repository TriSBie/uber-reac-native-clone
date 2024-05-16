import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{
                flex: 1
            }}>
            <NavigationContainer
                theme={{
                    colors: {
                        background: 'white',
                    },
                }}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="MapScreen"
                        component={MapScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </KeyboardAvoidingView>
    )
}

export default Navigation

const styles = StyleSheet.create({})