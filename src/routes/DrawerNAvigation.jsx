import { createDrawerNavigator} from '@react-navigation/drawer';

import NasaIndex from '../views/nasa/NasaIndex';
import PomodoroIndex from '../views/pomodoro/PomodoroIndex';
import TabNavigator from './TabNAvigator';
import StackNavigator from './StackNavigator';

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

const DrawerNavigation = () => {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator>
        <Drawer.Screen  
            name='Nasa'
            component={StackNavigator}
            options={routeScreenDefaultOptions}/>
        
        
        <Drawer.Screen  
            name='Pomodoro'
            component={PomodoroIndex}
            options={routeScreenDefaultOptions} />
    </Drawer.Navigator>
    
  );
}

export default DrawerNavigation;
