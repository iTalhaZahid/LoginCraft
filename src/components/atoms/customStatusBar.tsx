import React from 'react';
import { StatusBar, View, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar = ({ backgroundColor = '#008069' }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { height: insets.top, backgroundColor }]}>
      <StatusBar
        translucent={Platform.OS === 'android'}
        backgroundColor={backgroundColor}
        barStyle="dark-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CustomStatusBar;
