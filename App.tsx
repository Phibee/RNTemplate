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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;