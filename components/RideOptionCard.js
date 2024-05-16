import { View, Text, Touchable, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '@rneui/base'
import tw from 'twrnc'; import { useNavigation } from '@react-navigation/native'

const carInfoServices = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1, // 1x
        image: 'https://links.papareact.com/3pn',
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2, // 20% more
        image: 'https://links.papareact.com/5w8',
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75, // 75% more
        image: 'https://links.papareact.com/7pf',
    },
]

const RideOptionCard = () => {
    const navigate = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState({})

    return (
        <View style={tw`flex-grow flex-1`}>
            <View>
                <TouchableOpacity
                    style={tw`absolute left-5 top-6 z-50`}
                    onPress={() => { navigate.navigate('NavigationCard') }}
                >
                    <Icon
                        name='chevron-left'
                        type='font-awesome'
                        color='black'
                    />
                </TouchableOpacity>
                <Text style={tw`text-xl py-5 text-center font-semibold`}>Select a Ride</Text>
            </View>
            <FlatList
                data={carInfoServices}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image } }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedItem({ id, title, multiplier, image })}
                        style={tw`flex-row justify-between items-center px-10 
                        ${id === selectedItem.id && 'bg-gray-300'}` // using condition to change background color 
                        }
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{
                                uri: image,
                            }}
                        />
                        <View style={tw`ml-6`}>
                            <Text style={tw`font-semibold text-lg`}>{title}</Text>
                            <Text>Travel Time...</Text>
                        </View>
                        <Text style={tw`font-semibold text-base`}>$100</Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TouchableOpacity
                    style={tw`bg-black py-3 m-3 justify-center rounded-md  items-center ${!selectedItem && 'bg-gray-300'}`
                    }
                >
                    <Text style={tw`text-white font-semibold text-base`}>Choose : {selectedItem.title}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default RideOptionCard