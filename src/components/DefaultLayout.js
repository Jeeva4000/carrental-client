// // import { Button, Dropdown, Menu } from 'antd'
// //import MenuItem from 'antd/es/menu/MenuItem'
// import React from 'react'
// import { Menu, Dropdown, Button, Row, Col } from 'antd';


// function DefaultLayout(props) {
//     const user = JSON.parse(localStorage.getItem('user'))
//     const menu = (
//         <Menu>
//             <Menu.Item>
//                 <a href="http://www.alipay.com/">
//                     Home
//                 </a>
//             </Menu.Item>
//             <Menu.Item>
//                 <a href="http://www.taobao.com/">
//                     Bookings
//                 </a>
//             </Menu.Item>
//             <Menu.Item>
//                 <a href="http://www.tmall.com/">
//                     Profile
//                 </a>
//             </Menu.Item>
//             <Menu.Item onClick={() => {
//                 localStorage.removeItem('user')
//                 window.location.href = '/login'
//             }}>
//                 <li>Logout</li>

//             </Menu.Item>
//         </Menu>
//     );


//     return (
//         <div>
//             <div className='header bs1'>
//                 <Row gutter={16}>
//                     <Col lg={20} sm={24} xs={24}>
//                         <div className='d-flex justify-content-between'>
//                             <h1>Jeeva Cars</h1>


//                             <Dropdown overlay={menu} placement="bottomCenter">
//                                 <Button>{user.username}</Button>
//                             </Dropdown>
//                     </Col>
//                 </Row>
//                 <div className='d-flex justify-content-between'>
//                     {/* <h1>Jeeva Cars</h1>


//                     <Dropdown overlay={menu} placement="bottomCenter">
//                         <Button>{user.username}</Button>
//                     </Dropdown> */}




//                 </div>
//             </div>
//             <div className='content'>
//                 {props.children}
//             </div>
//         </div>
//     );
// }

// export default DefaultLayout

import React from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const menu = (
        <Menu>
            <Menu.Item>
                <a href="http://www.alipay.com/">Home</a>
            </Menu.Item>
            <Menu.Item>
                <a href="http://www.taobao.com/">Bookings</a>
            </Menu.Item>
            <Menu.Item>
                <a href="http://www.tmall.com/">Profile</a>
            </Menu.Item>
            <Menu.Item onClick={() => {
                localStorage.removeItem('user');
                window.location.href = '/login';
            }}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className='header bs1'>
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className='d-flex justify-content-between'>
                            <h1>Jeeva Cars</h1>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>{user.username}</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}

export default DefaultLayout;
