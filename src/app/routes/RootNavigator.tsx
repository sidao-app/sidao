import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from '@rneui/themed';

import { useTranslation } from 'react-i18next';
import '../../locale/i18n';

import HomeScreen from '../Home/HomeScreen';
import SettingsScreen from '../Settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { t } = useTranslation('home');

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }
            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            let tabBarLabel: string;
            if (route.name === 'Home') {
              tabBarLabel = tabBarLabel = t('demoScope.home');
            } else if (route.name === 'Settings') {
              tabBarLabel = t('demoScope.settings');
            }
            return <Text>{tabBarLabel!}</Text>;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
