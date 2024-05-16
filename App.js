import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './features/stores';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store} >
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
