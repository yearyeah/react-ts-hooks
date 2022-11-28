import { legacy_createStore as createStore } from 'redux';

const store = createStore((state = '', action) => {
  console.log(action);
  return action.value;
});

export default store;
