
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import NasaIndex from '../views/nasa/NasaIndex';
import PomodoroIndex from '../views/pomodoro/PomodoroIndex'
  
const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'rgba(7,26,93,255)',
                },
                tabBarActiveTintColor: 'white'
                
            }}
        > 

            <Tab.Screen 
                name='Nasa' 
                component={NasaIndex} 
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false, 
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" size={24} color={color}/>
                    )
                }}
                />

            <Tab.Screen 
                name='Pomodoro' 
                component={PomodoroIndex} 
                />
        </Tab.Navigator>
    );
};

export default TabNavigator;
