import { View, Text, Image, Button} from 'react-native';
import styles from './Styles';

function addToFavorites(name) {
    
}

function Details({route}) {
    const {name, height, mass, hair_color, eye_color, skin_color, birth_year, gender} = route.params;
        return (
            <View style = {styles.container}>
                <Text style = {styles.nameOfChar}>{JSON.stringify(name).substring(1, JSON.stringify(name).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Height: {JSON.stringify(height).substring(1, JSON.stringify(height).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Mass: {JSON.stringify(mass).substring(1, JSON.stringify(mass).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Hair color: {JSON.stringify(hair_color).substring(1, JSON.stringify(hair_color).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Skin color:{JSON.stringify(skin_color).substring(1, JSON.stringify(skin_color).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Eye color: {JSON.stringify(eye_color).substring(1, JSON.stringify(eye_color).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Birth year: {JSON.stringify(birth_year).substring(1, JSON.stringify(birth_year).length-1)}</Text>
                <Text style = {styles.infoOfChar}>Gender: {JSON.stringify(gender).substring(1, JSON.stringify(gender).length-1)}</Text>
                <Button title = "Press me to add this char to favs" onPress = {() => addToFavorites(name)}></Button>

                
            </View>
        );
    }

export default Details;