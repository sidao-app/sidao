import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../locale/i18n';

import RootNavigator from './routes/RootNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
