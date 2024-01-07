import { Provider } from 'react-redux';

import { ContactsList } from './ContactsList/ContactsList';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContactsList />
      </PersistGate>
    </Provider>
  );
};

export { App };
