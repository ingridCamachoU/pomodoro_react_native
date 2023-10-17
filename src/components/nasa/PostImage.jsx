import { View, Text, StyleSheet, Button } from "react-native";
import {useNavigation} from '@react-navigation/native'

const PostImage = ({post}) => {
    const {navigate} = useNavigation();

    const handleViewPress = () => {
        navigate('Detail', {...post});
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text> 
            <Text style={styles.date}>{post.date}</Text> 
            <View style={styles.contentBtn}>
                <Button 
                    title="View"
                    onPress={handleViewPress}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18, 39,113, 255)',
        borderRadius: 20,
        marginBottom: 12, 
        padding: 16
    },
    title: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },
    date: {
        color: '#ffff'
    },
    contentBtn: {
        alignItems: 'flex-end'
    }
});

export default PostImage;
