import React from 'react'
import { FlatList, View } from 'react-native'
import Movie from './Movie'
import { useNavigation } from '@react-navigation/native';
import LargeText from './LargeText';

const CarouselMovies = ({title, data}) => {
    const navigation = useNavigation();
    return (
        <View>
            <LargeText style={{marginHorizontal: 10}}>{title}</LargeText>
            <FlatList 
            data={data}
            extraData={data}
            horizontal={true}
            renderItem={({item}) => <Movie item={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
        />
        </View>
    )
}

export default CarouselMovies
