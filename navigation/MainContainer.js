import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen';
import LogScreen from './screens/LogScreen';

const homeName = "Programs";
const logName = "Workout Log";
const Tab = createBottomTabNavigator();
  

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'body' : 'body-outline';


            } else if (rn === logName) {
              iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          labelStyle: { fontSize: 12, padding: 2,},
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false, tabBarActiveBackgroundColor: '#15202B', tabBarInactiveBackgroundColor: '#15202B',}} />
        <Tab.Screen name={logName} component={LogScreen} options={{ headerShown: false, tabBarActiveBackgroundColor: '#15202B', tabBarInactiveBackgroundColor: '#15202B',}}  />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default MainContainer;