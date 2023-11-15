import { message } from 'antd';
import axios from 'axios';
export const setLoading = (isLoading) => {
    return {
        type: 'SET_LOADING',
        payload: isLoading,
    };
};
export const bookcar = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        await axios.post('https://rent-pjsv.onrender.com/bookings/bookcar', reqobj)
        // dispatch({ type: "GET_ALL_CARS", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
        message.success('Your car booked successfully')
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
        message.error('Something went wrong,Please try later')
    }
}
export const getAllBookings = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get('https://rent-pjsv.onrender.com/bookings/getallbookings', reqobj)

        dispatch({ type: "GET_ALL_CARS", payload: response.data })
        dispatch({ type: 'LOADING', payload: false })
        message.success('Your car booked successfully')
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
        message.error('Something went wrong,Please try later')
    }
}