import { createStackNavigator } from '@react-navigation/stack';

import NasaIndex from '../views/nasa/NasaIndex';
import DetailPost from '../views/nasa/DetailPost';
import DrawerNavigation from './DrawerNAvigation';
import TabNavigator from './TabNAvigator';

const routeScreenDefaultOptions = {

    headerStyle: {
        backgroundColor: 'rgba(7,26,93,255)',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        color: '#FFFF'
    },    
}

const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Nasa'>
            <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={routeScreenDefaultOptions} 
            />
            <Stack.Screen 
                name='Nasa' 
                component={NasaIndex} 
                options={{ headerShown: false }}
                />
            <Stack.Screen 
                name='Detail' 
                component={DetailPost}
                options={routeScreenDefaultOptions}  />
            </Stack.Navigator>
    );
}

export default StackNavigator;
