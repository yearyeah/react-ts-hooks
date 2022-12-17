import * as React from 'react';
import './style.css';
import MyCountByState from './hooks/h1.state';
import MyCountByReducer from './hooks/h2.reducer';
import MyCountByEffect from './hooks/h3.effect';
import MyCountByLayoutEffect from './hooks/h4.layoutEffect';

import { Provider } from 'react-redux';
import store from './react-redux/store';
import TextBox from './react-redux/val-input';
import ShowText from './react-redux/val-show';

export default function App() {
  return (
    <Provider store={store}>
      <h2>hooks</h2>
      <div>
        <div>
          useState:
          <MyCountByState val={8} />
        </div>
        <div>
          useReducer:
          <MyCountByReducer val={88} />
        </div>
        <div>
          useEffect:
          <MyCountByEffect val={98} />
        </div>
        <div>
          useLayoutEffect:
          <MyCountByLayoutEffect val={98} />
        </div>
      </div>
      <h2>react-redux</h2>
      <div>
        <div>
          <TextBox />
          {Array(10)
            .fill('a')
            .map((item, index) => (
              <ShowText key={index} />
            ))}
        </div>
      </div>
    </Provider>
  );
}
