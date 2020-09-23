import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './Styles';

function Char({name, height, mass, hair_color, eye_color,skin_color, birth_year, gender, navigation})  {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Details', {name, height, mass, hair_color, eye_color, skin_color, birth_year, gender})}>
            <View  style = {styles.listItemContainer}>
                <Text style = {styles.charHeader}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default Char;

