import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AnimationWrapper} from './components/AnimationWrapper/AnimationWrapper';

const App = () => {
  const [click, setClick] = useState(true);
  const handlePress = () => setClick(state => !state);
  return (
    <>
      {click ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{marginBottom: 10}}>Тут може бути гра про пізнайко</Text>
          <Button title="Грати" onPress={handlePress} />
        </View>
      ) : (
        <AnimationWrapper />
      )}
    </>
  );
};

export default App;
