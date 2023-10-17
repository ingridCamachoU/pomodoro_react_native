
import { View,Text, StyleSheet, Image, ScrollView } from "react-native";
import {useRoute} from '@react-navigation/native';
import HeaderNasa from "../../components/nasa/HeaderNasa";

const DetailPost = () => {

    const {params: {title, url, explanation, date}} = useRoute();

    console.log('title:', title)
    return (
        <View style={styles.container}>
            <HeaderNasa />
            <View style={styles.content}>
                <Image source={{uri: url}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
            
      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(7,26,93,255)',
        paddingHorizontal: 16
    },
    content: {
        backgroundColor: '#2e509e',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1
    },
    image: {
        width: '100%',
        height: '50%',
        borderColor: '#ffff',
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16
    },
    title: {
        color: '#ffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16
    },
    date: {
        color: '#ffff',
        fontSize: 16
    },
    explanationContainer: {
        marginVertical: 16
    },
    explanation: {
        color: '#ffff',
        fontSize: 16
    }
})
export default DetailPost;
