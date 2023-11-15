import DefaultLayout from '../components/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions';
import { Row, Col, Divider, DatePicker, Checkbox, Modal } from 'antd';
import Spinner from '../components/Spinner';
import moment from 'moment';
import { bookcar } from '../redux/actions/bookingActions';
import StripeCheckout from 'react-stripe-checkout';
import { useParams } from 'react-router-dom';


const { RangePicker } = DatePicker

function BookingCar({ match }) {
    const params = useParams()
    const { cars } = useSelector(state => state.cars);
    console.log(cars)
    const loading = useSelector(state => state.alerts);
    console.log(loading)
    const [car, setcar] = useState({})
    const dispatch = useDispatch()

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [totalHours, setTotalHours] = useState(0)
    const [driver, setDriver] = useState(false)
    const [totalAmount, setTotalAmount] = useState()
    const [showModal, setShowModal] = useState(false)


    // useEffect(() => {
    //     dispatch(getAllCars())
    //     if (cars.length > 0) {
    //         setcar(cars.find(o => o._id === match.params.carid))
    //     }

    // }, [cars, dispatch])
    useEffect(() => {
        // dispatch(getAllCars());
        if (cars.length === 0) {
            dispatch(getAllCars());
        }
        else {
            setcar(cars.find(o => o._id === params.carid));

        }
    }, [cars, loading, params.carid, dispatch]);

    // useEffect(() => {
    //     setTotalAmount((totalHours * car.rentPerHour))
    //     if (driver) {
    //         setTotalAmount(totalAmount + (30 * car.totalHours))
    //     }
    // }, [driver, totalHours, car.rentPerHour, car.totalHours, totalAmount])
    useEffect(() => {
        setTotalAmount((prevTotalAmount) => {
            let newTotalAmount = totalHours * car.rentPerHour;

            if (driver) {
                newTotalAmount += 30 * car.totalHours;
            }

            return newTotalAmount;
        });
    }, [driver, totalHours, car.rentPerHour, car.totalHours]);

    function selectTimeSlots(values) {
        // console.log(values)
        // console.log(moment(values[0]).format('MM DD YYYY HH:mm'))
        // console.log(moment(values[1]).format('MM DD YYYY HH:mm'))
        setFrom(moment(values[0]).format('MM DD YYYY HH:mm'))
        setTo(moment(values[1]).format('MM DD YYYY HH:mm'))
        setTotalHours(values[1].diff(values[0], 'hours'))
    }



    function onToken(token) {
        // console.log(token)
        const reqobj = {
            token,
            user: JSON.parse(localStorage.getItem('user'))._id,
            car: car._id,
            totalHours,
            totalAmount,
            driverRequired: driver,
            bookedTimeSlots: {
                from,
                to
            }
        }
        dispatch(bookcar(reqobj))
    }


    return (
        <DefaultLayout>
            {/* <h1>Booking Car</h1>
            <h1>Car Name ={car.name}</h1> */}
            {loading && (<Spinner />)}
            <Row justify='center' className='d-flex align-items-center' style={{ minheight: "90vh" }}>
                <Col lg={10} sm={24} xs={24}>
                    <img src={car.image} alt='cars' className='carimg2 bs1' />
                </Col>
                <Col lg={10} sm={24} xs={24} className='text-right'>
                    <Divider type='horizontal' dashed>Car Info</Divider>
                    <div style={{ textAlign: 'right' }}>
                        <p>{car.name}</p>
                        <p>{car.rentPerHour} Rent Per hour /-</p>
                        <p>Fuel: {car.fuelType}</p>
                        <p>Max Persons : {car.capacity}</p>
                    </div>
                    <Divider type='horizontal' dashed>Select Time Slots</Divider>
                    <RangePicker showTime={{ format: 'HH:mm' }} format="MM DD YYYY HH:mm" onChange={selectTimeSlots} />
                    {/* <div>
                        <p>Total Hours: <b>{totalHours}</b></p>
                        <p>Rent Per Hour : <b>{car.rentPerHour}</b></p>
                        <Checkbox onChange={(e) => {
                            if (e.target.checked) {
                                setDriver(true)
                            } else {
                                setDriver(false)
                            }
                        }}>Driver Required</Checkbox>
                        <h3>Total Amount : {totalAmount}</h3>
                        <button className='btn1' onClick={bookNow}>Book Now</button>
                    </div> */}
                    <br />
                    <button className='btn1 mt-2' onClick={() => { setShowModal(true) }}>See Booked Slots</button>
                    {from && to && (
                        <div>
                            <p>Total Hours: <b>{totalHours}</b></p>
                            <p>Rent Per Hour : <b>{car.rentPerHour}</b></p>
                            <Checkbox onChange={(e) => {
                                if (e.target.checked) {
                                    setDriver(true)
                                } else {
                                    setDriver(false)
                                }
                            }}>Driver Required</Checkbox>
                            <h3>Total Amount : {totalAmount}</h3>
                            <StripeCheckout
                                shippingAddress
                                token={onToken}
                                currency='inr'
                                amount={totalAmount * 100}
                                stripeKey="pk_test_51O8iXySCiMmKiUyyJObiMc1zw4YZrbYv6MVgUtbRzIewC37IBttIBvhXigE1zymyeouqe7qWnJ2vT1CR4hUAkEqC00Bv31yP4s"
                            >
                                {/* <button className='btn1' onClick={bookNow}>Book Now</button> */}
                                <button className='btn1' >Book Now</button>
                            </StripeCheckout>

                        </div>
                    )}
                </Col>
                {car.name && (
                    <Modal visible={showModal} closable={false} footer={false} title='Booked time slots'>
                        {car && (<div className='p-2'>
                            {car.bookedTimeSlots.map(slot => {
                                return <button className='btn1 mt-2'>{slot.from} - {slot.to}</button>
                            })}
                            <div className='text-right mt-5'>
                                <button className='btn1' onChange={() => { setShowModal(false) }}>CLOSE</button>
                            </div>
                        </div>)}

                    </Modal>
                )}
            </Row>

        </DefaultLayout>
    );
}

export default BookingCar

