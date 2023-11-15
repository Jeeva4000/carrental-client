import { Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Spinner from '../components/Spinner'
// ..
AOS.init();

function Login() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.alerts);
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)
    }

    return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center'>
                <Col lg={16} style={{ position: "relative" }}  >
                    <img
                        data-aos='slide-right'
                        data-aos-duration='1500'
                        src='https://img.freepik.com/premium-photo/black-modern-car-black-background-business-transportation_743855-6234.jpg?size=626&ext=jpg&ga=GA1.2.978013140.1691599949&semt=ais' alt='' />
                    <h1 className='login-logo'>JEEVACARS</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

                        <h1>Login</h1>
                        <br />
                        <Form.Item name='username' label='Username' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <button className='btn1 mt-2 '>LOGIN</button>

                        <hr />
                        <Link to='/register'>Click Here to Register ?</Link>

                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login