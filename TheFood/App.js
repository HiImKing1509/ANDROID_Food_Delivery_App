import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/routes/RootNavigator.js';
// import {Provider} from 'react-redux';
// import {Store} from './src/redux/store.js';

const App = () => {
  return (
    // <Provider store={Store}>
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
    // </Provider>
  );
};

export default App;
