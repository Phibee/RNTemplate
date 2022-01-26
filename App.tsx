import { TextInput } from '@components/Base/Input';
import Button from '@components/Base/Button';
import { SIZES } from '@constants/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App: React.FC<{}> = ({
}) => {
    return (
    <View style={styles.container}>
        <TextInput label="Username" placeholder='Enter your username' borderColorType="primary" />
        <TextInput label="Password" placeholder='Enter your password' borderColorType="primary" type="password" onChangeText={e => console.log(e)}/>
        <Button label='Submit' color='white' textStyle={{color: 'white'}} align="center"/>
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