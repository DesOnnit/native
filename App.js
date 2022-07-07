/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigate from './src/utils/navigate';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigate />
      </PersistGate>
    </Provider>
  );
}
