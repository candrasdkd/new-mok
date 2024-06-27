// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import NavigationContainer from "./navigations/NavigationContainer";
import { Animated } from 'react-native';

const App: React.FC = () => {
  const av = new Animated.Value(0);
  av.addListener(() => { return });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
