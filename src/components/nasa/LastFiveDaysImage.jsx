import { View, Text, StyleSheet, ScrollView } from "react-native";
import PostImage from "./PostImage";

const LastFiveDaysImage = ({lastFiveImages}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days </Text>
            <ScrollView style={styles.content}>
            {
                lastFiveImages?.map( post => (
                    <PostImage 
                        key={post.title}
                        post={post}/>
                ))
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    content: {
        paddingHorizontal: 24
    },
    title: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 18,
    }
})

export default LastFiveDaysImage;
