import axios from "axios";
import { message } from "antd";

//login
export const userLogin = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('https://rent-pjsv.onrender.com/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Login success')
        dispatch({ type: 'LOADING', payload: false })

        window.location.href = '/'


    } catch (error) {
        console.log(error)
        message.error('Something Went wrong')
        dispatch({ type: 'LOADING', payload: false })
    }
}

//register
export const userRegister = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('https://rent-pjsv.onrender.com/users/register', reqObj)
        // console.log(reqObj)
        const data = await response.data;
        console.log(data);
        // localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Registration successfully')
        // dispatch({ type: 'LOADING', payload: false })
        setTimeout(() => {
            window.location.href = '/login'

        }, 500);

    } catch (error) {
        console.log(error)
        message.error('Something Went wrong')
        dispatch({ type: 'LOADING', payload: false })
    }
}



// import { message } from "antd";

// //  handle the response and extract JSON data
// async function handleResponse(response) {
//     if (!response.ok) {
//         throw new Error(`Request failed with status: ${response.status}`);
//     }
//     return await response.json();
// }

// // Login
// export const userLogin = (reqObj) => async (dispatch) => {
//     dispatch({ type: 'LOADING', payload: true });
//     try {
//         const response = await fetch('localhost:6000/users/register', {
//             method: 'POST',
//             body: JSON.stringify(reqObj),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = await handleResponse(response);

//         localStorage.setItem('user', JSON.stringify(data));
//         message.success('Login success');
//         dispatch({ type: 'LOADING', payload: false });

//         setTimeout(() => {
//             window.location.href = '/';
//         }, 500);
//     } catch (error) {
//         console.error(error);
//         message.error('Something went wrong');
//         dispatch({ type: 'LOADING', payload: false });
//     }
// };

// // Register
// // export const userRegister = (reqObj) => async (dispatch) => {
// //     dispatch({ type: 'LOADING', payload: true });
// //     try {
// //         console.log(reqObj)
// //         const response = await fetch('http://localhost:6000/users/register', {
// //             method: 'POST',
// //             body: JSON.stringify(reqObj),
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //         });

// //         const data = await handleResponse(response);

// //         console.log(data);
// //         message.success('Registration successfully');

// //         setTimeout(() => {
// //             window.location.href = '/login';
// //         }, 500);
// //     } catch (error) {
// //         console.error(error);
// //         message.error('Something went wrong');
// //     } finally {
// //         dispatch({ type: 'LOADING', payload: false });
// //     }
// // };
