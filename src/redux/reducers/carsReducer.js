// const intialData = {
//     cars: []
// };

// export const carsReducer = (state = intialData, action) => {
//     switch (action.type) {

//         case 'GET_ALL_CARS': {
//             return {
//                 ...state,
//                 cars: action.payload
//             }
//         }
//         default: return state
//     }
// }

// const initialState = {
//     cars: [],
//     loading: false,
// };

// export const carsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GET_ALL_CARS': {
//             return {
//                 ...state,
//                 cars: action.payload,
//             };
//         }
//         case 'SET_LOADING': {
//             return {
//                 ...state,
//                 loading: action.payload,
//             };
//         }
//         default:
//             return state;
//     }
// };

const initialState = {
    cars: [],
    loading: false,
};

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CARS': {
            return {
                ...state,
                cars: action.payload,
            };
        }
        case 'SET_LOADING': {
            return {
                ...state,
                loading: action.payload,
            };
        }
        default:
            return state;
    }
};



