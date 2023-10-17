import { View, Text, StyleSheet} from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        color: 'black'
    }
});

export default Home;
