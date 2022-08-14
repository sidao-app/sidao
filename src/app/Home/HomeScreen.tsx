import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation('home');

  return (
    <View style={styles.container}>
      <Text>{t('demoScope.title')}</Text>
      <Text>
        {t('demoScope.welcome', {
          val: new Date(),
          formatParams: {
            val: {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          },
        })}
      </Text>
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
