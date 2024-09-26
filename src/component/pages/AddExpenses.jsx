import React from 'react'
import Header from '../Header'
import './pages.css'

const AddExpenses = () => {
    return (
        <>
            <Header />

            {/* add-expenses start  */}

            <div className="add-expenses-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="form">
                                <div className="head">
                                    <h2>Add Expenses</h2>
                                </div>
                                <form action="">
                                    <div className="pay flex">
                                        <div className="amount">
                                            <input type="number" placeholder='Add amount' />
                                        </div>
                                        <div className="method">
                                            <select name="" id="">
                                                <option >method</option>
                                                <option >cash</option>
                                                <option >credit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="des">
                                        <input type="text" placeholder='Description' />
                                    </div>
                                    <div className="date">
                                        <input type="date" />
                                    </div>
                                    <div className="cat">
                                        <input type="text" placeholder='Categories' />
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Save draft</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add-expenses end */}
        </>
    )
}

export default AddExpenses