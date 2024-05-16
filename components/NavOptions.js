import { FlatList, TouchableOpacity } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { StyleImage, StyledText, StyledView } from "../common";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../features/slices/navSlice";
import { useSelector } from "react-redux";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(item.screen)
                    }}
                    style={tw`p-2 pl-6 pb-5 pt-2 bg-gray-300 m-2 w-40`}
                    disabled={!origin}
                >
                    <StyledView style={tw`${!origin && "opacity-20"}`}>
                        <StyleImage
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{
                                uri: item.image
                            }} />
                        <StyledText style={tw`mt-2 text-lg font-semibold`}>{item.title}</StyledText>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" color="white" type="antdesign"></Icon>
                    </StyledView>
                </TouchableOpacity>
            )
            }
        />

    )
}

export default NavOptions

