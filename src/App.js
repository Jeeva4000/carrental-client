
// import './App.css';
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import BookinCar from "./pages/BookingCar"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'antd/dist/antd.css';



// function App() {
//   return (
//     <div className="App">
//       {/* <h1>welocme to my carrental</h1> */}

//       <Router>
//         <Routes>
//           <Route path='/' exacr Component={Home} />
//           <Route path='/login' exacr Component={Login} />
//           <Route path='/register' exacr Component={Register} />
//           <Route path='/bookingcar' exacr Component={BookinCar} />
//         </Routes>
//       </Router>

//     </div>
//   );
// }

// export default App;


import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import AdminHome from './pages/AdminHome';
// import Redirect from 'react-dom'
//import 'antd/dist/antd.css';
// import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={localStorage.getItem('user') ? <Home /> : <Login />} />


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path="booking/:carid" element={localStorage.getItem('user') ? <BookingCar /> : <Login />} />
          <Route path='/userbookings' exact component={UserBookings} />
          <Route path='/addcar' exact component={AddCar} />
          <Route path='/editcar/:carid' exact component={EditCar} />
          <Route path='/admin' exact component={AdminHome} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// export function ProtecterRouter(props) {
//   if (localStorage.getItem('user')) {
//     return <Routes><Route {...props} /></Routes>
//   }

//   return <Redirect to='/login' />

// }