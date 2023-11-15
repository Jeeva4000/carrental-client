// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { carsReducer } from './reducers/carsReducer';
// import { alertsReducer } from './reducers/alertsReducer';

// const composeEnhancers = composeWithDevTools({});

// const rootReducer = combineReducers({
//     cars: carsReducer,
//     alertsReducer,
// })

// // const store = createStore(
// //     rootReducer,
// //     composeEnhancers(
// //         applyMiddleware(thunk)

// //     )
// // );
// const store = createStore(rootReducer, applyMiddleware(thunk));


// export default store;


import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';
import { bookingsReducer } from './reducers/bookingReducer';

const rootReducer = combineReducers({
    cars: carsReducer,
    alerts: alertsReducer,
    bookings: bookingsReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
