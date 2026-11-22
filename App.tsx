import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}

export default App;
