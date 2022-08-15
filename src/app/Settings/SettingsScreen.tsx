import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import LanguageSelector from './components/LanguageSelector';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LanguageSelector />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
});
