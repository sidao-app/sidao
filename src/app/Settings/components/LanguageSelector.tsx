import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, ButtonGroup } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

const LANGUAGES = ['en', 'zh_CN'];

const Selector = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { t, i18n } = useTranslation('settings');
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code: string) => {
    return i18n.changeLanguage(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{t('selectLanguage')}</Text>
        <Ionicons color="#444" size={28} name="ios-language-outline" />
      </View>
      <ButtonGroup
        buttons={['English', '中文']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
          setLanguage(LANGUAGES[value]);
        }}
        containerStyle={styles.buttonGroup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#444',
    fontSize: 28,
    fontWeight: '600',
  },
  buttonGroup: {
    marginTop: 10,
  },
});

export default Selector;
