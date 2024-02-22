import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Chat from './src/screens/Chat';
import BlockMember from './src/screens/BlockMember';
import RemoveMember from './src/screens/RemoveMember';
import GroupImage from './src/screens/GroupImage';

import RemoveMessage from './src/screens/RemoveMessage';
import AddMembers from './src/screens/AddMembers';
import ForwardMessage from './src/screens/ForwardMessage';
import CameraPage from './src/screens/CameraPage';
import PhotoGallery from './src/screens/PhotoGallery';
import CrowdImage from './src/screens/CrowdImage';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BlockMember" component={BlockMember} options={{ headerShown: false }} />
        <Stack.Screen name="RemoveMember" component={RemoveMember} options={{ headerShown: false }} />
        <Stack.Screen name="GroupImage" component={GroupImage} options={{ headerShown: false }} />
        <Stack.Screen name="CrowdImage" component={CrowdImage} options={{ headerShown: false }} />
        <Stack.Screen name="RemoveMessage" component={RemoveMessage} options={{ headerShown: false }} />
        <Stack.Screen name="AddMembers" component={AddMembers} options={{ headerShown: false }} />
        <Stack.Screen name="ForwardMessage" component={ForwardMessage} options={{ headerShown: false }} />
        <Stack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }} />
        <Stack.Screen name="PhotoGallery" component={PhotoGallery} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
