import Login from './screens/login/login'
import Registro from './screens/registro/registro'
import Registro2 from './screens/registro2/registro2'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes(){
    return <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='Registro' component={Registro} options={{headerShown: false}}/>
                <Stack.Screen name='Registro2' component={Registro2} options={{headerShown: false}}/>
                
            </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;

