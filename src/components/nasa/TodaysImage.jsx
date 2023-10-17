import { Image, View, StyleSheet, Text, Button } from "react-native";
import {useNavigation} from '@react-navigation/native'

const TodaysImage = ({todaysImage}) => {
    const {navigate} = useNavigation();

    const handleViewPress = () => {
       navigate('Detail', {...todaysImage});
    };

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    source={{uri: todaysImage?.url}}/>
            
                <Text style={styles.title}>{todaysImage?.title}</Text>
                <Text style={styles.date}>{todaysImage?.date}</Text>
                <View style={styles.btn}>
                    <Button 
                        title="view"
                        onPress={handleViewPress}/>
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2e509e',
        marginVertical: 16,
        borderRadius: 32,
        padding: 20,
        marginHorizontal: 24,
        flex: 1
    },
    image: {
        width: '100%',
        height: '55%',
        borderColor: '#ffff',
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 10
    },
    btn: {
        alignItems: 'flex-end',
    },
    title: {
        color: '#ffff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#ffff'
    }
});

export default TodaysImage;
