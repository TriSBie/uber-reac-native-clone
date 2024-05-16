import { Icon } from '@rneui/base'
import React from 'react'
import { StyleFlatList, StyleTouchableOpacity, StyledText, StyledView } from '../common'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, London, UK'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK'
    }
]
const NavFavourites = () => {
    return (
        <StyleFlatList
            data={data}
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={() =>
            //     <StyledView style={tw`bg-gray-400 h-1 mx-2`}></StyledView>
            // }
            renderItem={({ item: { location, destination, icon } }) => (
                <StyleTouchableOpacity
                    className='flex-row rounded-full items-center p-2 m-2'
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <StyledView>
                        <StyledText className='font-bold mb-2 text-medium'>{location}</StyledText>
                        <StyledText>{destination}</StyledText>
                    </StyledView>
                </StyleTouchableOpacity>
            )}
        />
    )
}

export default NavFavourites