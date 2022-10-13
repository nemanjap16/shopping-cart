## Redux project

#### Docs

[Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started) - Here you can find more info about Redux Toolkit

- #### Get started

###### to install all dependencies

```sh
npm run install
```

###### to start development mode

```sh
npm run dev
```

##### An existing project

```sh
# NPM
npm install @reduxjs/toolkit
```

### What's included

#### Redux Toolkit included these APIs:

- `configureStore()` - wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes `redux-thunk` by default, and enables use of the Redux DevTools Extension.

- `createReducer()` - that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the [`immer`](https://immerjs.github.io/immer/) library to let you write simpler immutable updates with normal mutative code, like `state.todos[3].completed = true`.

- `createAction()` - generates an action creator function for the given action type string. The function itself has `toString()` defined, so that it can be used in place of the type constant.

- `createSlice()` - accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

- `createAsyncThunk` - accepts an action type string and a function that returns a promise, and generates a thunk that dispatches `pending/fulfilled/rejected` action types based on that promise.

- `createEntityAdapter` - generates a set of reusable reducers and selectors to manage normalized data in the store.

- The `createSelector` utility from the [**Reselect**](https://github.com/reduxjs/reselect) library, re-exported for ease of use.

#### Setup Store

> create file **store.js** in folder **src/app**

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducers: {},
});
```

#### Setup Provider

> in **index.js** or **main.js**

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import store and provider
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

#### Setup Slice

> create file **counterSlice.js** in **src/features/counter/counterSlice.js**

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

#### Setup counterReducer in store.js

> can be multiple reducers

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

> store with multiple reducers
>
> - automatically setup combine reducers

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
```

#### Use useSelector() and useDispatch() to update store

> in App.js

```js
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment by amount"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}

export default App;
```

#### Fetching data with createAsyncThunk()

> In cartSlice.js

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const url = `https://course-api.com/react-useReducer-cart-project`;

export const getCartItems = createAsyncThunk(`cart/getCartItems`, () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
```
