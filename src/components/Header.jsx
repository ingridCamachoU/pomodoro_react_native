import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Header = ({setTime, setCurrentTime, currentTime, handleStartStop}) => {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime *60);
        handleStartStop();
    };

  return (
    <View style={styles.content}>
        {options.map((item, index) => (
            <TouchableOpacity 
                key={index} 
                style={[styles.itemStyle, currentTime !== index && {borderColor: 'transparent'}]} 
                onPress={() => handlePress(index)}>
                <Text style={{fontWeight: 'bold',textAlign: 'center',  }}>{item}</Text> 
            </TouchableOpacity>
        ))}
             
    </View>
  );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
    },
    itemStyle: {
        width: '33%',
        borderWidth: 3,
        padding: 5, 
        borderRadius: 10,
        marginVertical: 20,
        borderColor:'white',
        
    },
});

export default Header;

