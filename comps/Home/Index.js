import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './Styles';

function Home({navigation}) {
        return (
            <View style={styles.homeDiv}>
                <Image source=  {{uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png'}}
                    style = {styles.homePageImage} />
                <Text style = {styles.header}>Welcome to StarWars Wiki</Text>
                <Button 
                color = "#000"
                title = "Go to List"
                onPress = {() => navigation.navigate('List')}
            />
            <Button 
                color = "#000"
                title = "Go to Favorites"
                onPress = {() => navigation.navigate('Favorites')}
            />
            </View>
        )
    }


export default Home;