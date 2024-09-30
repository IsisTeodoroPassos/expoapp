import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import card_cidade from './components/card_cidade';
import dados from './service/dados';

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
