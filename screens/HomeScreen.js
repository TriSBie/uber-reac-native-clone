import { withExpoSnack } from 'nativewind';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleImage, StyledView } from "../common";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY_FIXED } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../features/slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView >
            <StyledView className="flex-1 p-2 bg-white">
                {/* Header - Uber title  */}
                <StyleImage
                    style={{ width: 100, height: 100, resizeMode: 'contain', marginLeft: 10 }}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
                    }}>
                </StyleImage>
                {/* Navigation Options - Body */}
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }}
                    onFail={(error) => console.stack(error)}
                    query={{
                        key: GOOGLE_MAP_API_KEY_FIXED,
                        language: 'en',
                    }}
                    debounce={400}
                    // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    nearbyPlacesAPI={'GooglePlacesSearch'}
                />
                <NavOptions />
                <NavFavourites />
            </StyledView>
        </SafeAreaView>
    );
}

export default withExpoSnack(HomeScreen);