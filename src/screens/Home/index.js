import React from 'react';
import {View , ImageBackground, Text , Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
    const navigation = useNavigation();
return (
    <View>

        {/* // serach button */}

       

       <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>        
       <Pressable style={styles.searchButton} 
    //    onPress={() => navigation.navigate('Destination Search')}
       >

        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>

        </Pressable>
        {/* go near text */}
       <Text style={styles.title}>Go Near</Text>

        {/* explore near by text */}
       <Pressable style={styles.button} onPress={() => alert('Explore near button pressed...')}>

        <Text style={styles.buttonText}>Explore nearby Stays</Text>

       </Pressable>

       </ImageBackground>

       
    </View>
)
}

export default HomeScreen;