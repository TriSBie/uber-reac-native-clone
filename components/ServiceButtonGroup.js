import { Icon } from '@rneui/base'
import React from 'react'
import { StyleTouchableOpacity, StyledText, StyledView } from '../common'
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';

const ServiceButtonGroup = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <StyledView className="justify-evenly flex-row items-center mt-8">
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionCard')}
                    style={tw`flex flex-row mx-3 bg-black justify-between items-center p-3 rounded-full w-30`}
                >
                    <Icon name="car" type="font-awesome" size={16} color={"white"} />
                    <StyledText className="text-base font-medium text-slate-50 mx-2">Drivers</StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row mx-3 bg-slate-50 justify-between items-center p-3 rounded-full w-24 border-2 border-slate-900`}>
                    <Icon name="fast-food-outline" type="ionicon" size={16} color={"black"} />
                    <StyledText className="text-base font-medium text-slate-900 mx-2">Eats</StyledText>
                </TouchableOpacity>
            </StyledView>
        </KeyboardAvoidingView>
    )
}

export default ServiceButtonGroup