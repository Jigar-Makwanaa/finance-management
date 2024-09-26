import React from 'react'
import Header from './Header'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />

            {/* panding-sedction start */}

            <div className="pandinng-task-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="box">
                                <div className="content">
                                    <div className="heading">
                                        <h2>pending task</h2>
                                    </div>
                                    <div className="details">
                                        <ul>
                                            <li>Pending Approvals <span>5</span></li>
                                            <li>New Trips Registered <span>4</span></li>
                                            <li>Unreported Expenses <span>6</span></li>
                                            <li>Upcoming Expenses <span>0</span></li>
                                            <li>Upcoming Expenses <span>0.00</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="heading">
                                        <h2>recent expenses</h2>
                                    </div>
                                    <div className="details flex">
                                        <div className="des">
                                            <h3>subject</h3>
                                            <ul>
                                                <li>Office Supplies</li>
                                                <li>Business Lunch</li>
                                                <li>Travel Expenses</li>
                                                <li>Client Dinner</li>
                                                <li>Hotel</li>
                                            </ul>
                                        </div>
                                        <div className="des">
                                            <h3>Employee</h3>
                                            <ul>
                                                <li>John Smith</li>
                                                <li>Sarah Jade</li>
                                                <li>Mike Brown</li>
                                                <li>Jennifer Lee</li>
                                                <li>David Wilson</li>
                                            </ul>
                                        </div>
                                        <div className="des">
                                            <h3>Team</h3>
                                            <ul>
                                                <li>Marketing</li>
                                                <li>Sales</li>
                                                <li>Operations</li>
                                                <li>Marketing</li>
                                                <li>Finance</li>
                                            </ul>
                                        </div>
                                        <div className="des">
                                            <h3>Amount</h3>
                                            <ul>
                                                <li>€150.00</li>
                                                <li>€75.50</li>
                                                <li>€450.25</li>
                                                <li>€120.00</li>
                                                <li>€275.75</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* panding-sedction end */}

            {/* quick-section start  */}

            <div className="quick-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="head">
                                <h3>quick access</h3>
                            </div>
                            <div className="all-box flex">

                                <div className="box">
                                    <div className="content">
                                        <Link to={'/addExpenses'}>
                                            <h3>create expenses</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h3>create receipt</h3>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h3>create report</h3>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h3>create trip</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* quick-section end */}
        </>
    )
}

export default Home