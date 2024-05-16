import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '@rneui/base'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const RideOptionCard = () => {
    const navigate = useNavigation();
    return (
        <View style={tw`flex-grow flex-1`}>
            <TouchableOpacity
                style={tw`absolute left-5 top-6`}
                onPress={() =>
                    navigate.navigate('NavigationCard')
                }
            >
                <Icon
                    name='chevron-left'
                    type='font-awesome'
                    color='black'
                />
            </TouchableOpacity>
            <Text style={tw`text-xl py-5 text-center`}>Select a Ride</Text>
        </View>
    )
}

export default RideOptionCard