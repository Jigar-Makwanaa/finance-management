import React from 'react'
import './pages.css'
import Header from '../Header'

const ViewExpenses = () => {
    return (
        <>
            <Header />

            {/* view-expenses start  */}

            <div className="view-expenses-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="table">
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>description</th>
                                            <th>date</th>
                                            <th>category</th>
                                            <th>amount</th>
                                            <th>method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>foods</td>
                                            <td>20/4/24</td>
                                            <td>weg</td>
                                            <td>250</td>
                                            <td>credit</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* view-expenses end */}
        </>
    )
}

export default ViewExpenses