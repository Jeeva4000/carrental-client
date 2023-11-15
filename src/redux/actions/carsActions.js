import axios from 'axios';
export const setLoading = (isLoading) => {
    return {
        type: 'SET_LOADING',
        payload: isLoading,
    };
};
export const getAllCars = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get('https://rent-pjsv.onrender.com/cars/getallCars')
        dispatch({ type: "GET_ALL_CARS", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const deleteCar = (carid) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.delete(`https://rent-pjsv.onrender.com/cars/deletecar?carid=${carid}`)
        dispatch({ type: "GET_ALL_CARS", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const editCar = (carid) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.delete(`https://rent-pjsv.onrender.com/cars/deletecar?carid=${carid}`)
        dispatch({ type: "GET_ALL_CARS", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}