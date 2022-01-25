import { TextInput } from '@components/Base/Input';
import Button from '@components/Base/Button';
import { SIZES } from '@constants/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App: React.FC<{}> = ({
}) => {
    return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding
  },
});

export default App;