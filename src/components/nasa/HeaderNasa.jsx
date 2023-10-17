import { Image, Text, View, StyleSheet } from "react-native";

const HeaderNasa = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rigthContainer}>
                <Image 
                    source={require('../../assets/logo_nasa.png')}
                    style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex:1,
        alignItems: 'flex-start'
    },
    rigthContainer: {
        flex:1,
        alignItems: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    image: {
        width: 70,
        height: 70
    }
})

export default HeaderNasa;
