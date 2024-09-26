import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="logo">
                                <Link to={'/'}>
                                    <div className="name">
                                        <span className='span-title'>ex</span>
                                        <span className='span-title'>p</span>
                                        <span className='span-title'>en</span>
                                        <span className='span-title'>e</span>
                                        <span className='span-title'>i</span>
                                        <span className='span-title'>o</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="menu">
                                <ul className='flex'>
                                    <li>
                                        <Link to={'/'}>
                                            home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/viewExpenses'}>expenses</Link>
                                    </li>
                                    <li>trips</li>
                                    <li>approvals</li>
                                    <li>settings</li>
                                    <li>
                                        <Link to={'/addExpenses'}>
                                            Add expenses
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header