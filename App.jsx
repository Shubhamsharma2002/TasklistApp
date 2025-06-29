import { StyleSheet, View, } from 'react-native';
import AppManager from './manager/AppManager';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"lightpink"}/>
      <PaperProvider>
      <AppManager />
      </PaperProvider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight,
    // padding: 1,
  },
});
