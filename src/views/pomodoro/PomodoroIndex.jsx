import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header_pomodoro from '../../components/pomodoro/Header_pomodoro';
import Timer from '../../components/pomodoro/Timer';

const colors =['#f7DC6F', '#A2D9CE', '#D7BDE2'];

const PomodoroIndex = () => {

  const [isWorking, setIsWorking] = useState(true);
  const [time, setTime] = useState(60*25);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);
  
  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null; 

    if(isActive){
      interval = setInterval(() => {
        setTime(time -1);
      }, 1000)
    }else{
      clearInterval(interval);
    }

    if(time === 0){
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);
  
  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={{
        flex: 1,
        paddingHorizontal: 15, 
        paddingTop: Platform.OS === 'android' && 30}}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header_pomodoro
          setTime={setTime}
          handleStartStop={handleStartStop}
          setCurrentTime={setCurrentTime}
          currentTime={currentTime}/>
        <Timer time={time}/>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleStartStop}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{isActive ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32, 
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center'
  }
});

export default PomodoroIndex;