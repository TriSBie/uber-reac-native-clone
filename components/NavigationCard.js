import { GOOGLE_MAP_API_KEY } from "@env"
import React from 'react'
import { KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { StyleTouchableOpacity, StyledText, StyledView } from '../common'
import { setDestination } from "../features/slices/navSlice"
import { useNavigation } from "@react-navigation/native"
import NavFavourites from "./NavFavourites"
import { Icon } from "@rneui/base"
import ServiceButtonGroup from "./ServiceButtonGroup"

const NavigationCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigation();

    return (
        <SafeAreaView style={tw`bg-gray-100 flex-1`}>
            <StyledText className='py-5 text-center text-lg leading-6 tracking-wide tracking-wide font-semibold text-black-500'>Good morning, Harley</StyledText>
            <StyledView className='border-1 border-indigo-500'>
                <StyledView>
                    <GooglePlacesAutocomplete
                        debounce={400}
                        placeholder={"Where to?"}
                        fetchDetails={true}
                        minLength={2}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigate.navigate('RideOptionCard')
                        }}
                        keepResultsAfterBlur={true}
                        styles={{
                            container: {
                                flex: 0,
                                margin: 10,
                            },
                            textInput: {
                                fontSize: 18,
                                backgroundColor: "rgb(209,213,219)",
                            },
                            listView: {
                                marginTop: '-210px',
                            }
                        }}
                        query={{
                            key: GOOGLE_MAP_API_KEY,
                            language: 'en',
                        }}
                    />
                </StyledView>
                <NavFavourites />
            </StyledView>
            <ServiceButtonGroup />
        </SafeAreaView>
    )
}

export default NavigationCard