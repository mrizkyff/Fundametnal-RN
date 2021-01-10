import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionRN from './PositionRN';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent />
        <MateriFlexBox /> */}
        <PositionRN />
      </ScrollView>
    </View>
  );
};



export default App;
