import { Icon } from '@rneui/base'
import React from 'react'
import { StyleTouchableOpacity, StyledText, StyledView } from '../common'
import { KeyboardAvoidingView, Platform } from 'react-native'

const ServiceButtonGroup = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <StyledView className="justify-evenly flex-row items-center mt-8">
                <StyleTouchableOpacity className="flex flex-row mx-3 bg-slate-900 justify-between items-center p-3 rounded-full w-30">
                    <Icon name="car" type="font-awesome" size={16} color={"white"} />
                    <StyledText className="text-base font-medium text-slate-50 subpixel-antialiased mx-2">Drivers</StyledText>
                </StyleTouchableOpacity>
                <StyleTouchableOpacity className="flex flex-row mx-3 bg-slate-50 justify-between items-center p-3 rounded-full w-24 border-2 border-slate-300">
                    <Icon name="fast-food-outline" type="ionicon" size={16} color={"black"} />
                    <StyledText className="text-base font-medium text-slate-900 subpixel-antialiased mx-2">Eats</StyledText>
                </StyleTouchableOpacity>
            </StyledView>
        </KeyboardAvoidingView>
    )
}

export default ServiceButtonGroup