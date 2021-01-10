import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import MateriFlexBox from './MateriFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};



export default App;
