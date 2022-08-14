import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello Sidao!</Text>
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
