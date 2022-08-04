import React from 'react';
import { Provider } from 'react-redux';

import store from '@redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>123</div>
    </Provider>
  );
};
export default App;
