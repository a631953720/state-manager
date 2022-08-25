import { allReducer, allSelector } from "./mockRedux";

const { userDispatch, movieDispatch } = allReducer();
const { userSelector, movieSelector } = allSelector();

userDispatch({ type: 'Set Current User', payload: '1234656' });
console.log(userSelector());

userDispatch({ type: 'Set Current Token', payload: '444888' });
console.log(userSelector());

movieDispatch({ type: 'Set Current Movie', payload: 'sssss' });
console.log(movieSelector());

movieDispatch({ type: 'Set Movie List', payload: ['1', '2'] });
console.log(movieSelector());
