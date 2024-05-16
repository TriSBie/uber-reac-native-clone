import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledView } from '../common';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationCard from '../components/NavigationCard';
import RideOptionCard from '../components/RideOptionCard';
import tw from 'twrnc';

const MapScreen = () => {
    const SubStack = createNativeStackNavigator();
    return (
        <SafeAreaView style={tw`flex-1 h-full`}>
            <StyledView className='h-1/2 bg-black-500'>
                <Map />
            </StyledView>
            <StyledView className='h-1/2 bg-amber-500'>
                <SubStack.Navigator>
                    <SubStack.Screen
                        name="NavigationCard"
                        component={NavigationCard} options={{
                            headerShown: false,
                        }}
                    />
                    <SubStack.Screen
                        name="RideOptionCard"
                        component={RideOptionCard} options={{
                            headerShown: false,
                        }}
                    />
                </SubStack.Navigator>
            </StyledView>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});