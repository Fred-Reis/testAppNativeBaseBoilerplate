import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Home} from './src/pages/Home';

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};
export default App;
