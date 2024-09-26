import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './pages.css'

const AddExpenses = () => {

    const [record, setRecord] = useState([])
    const [amount, setAmount] = useState('')
    const [method, setMethod] = useState('')
    const [des, setDes] = useState('')
    const [date, setDate] = useState('')
    const [cat, setCat] = useState('')
    let id = Math.floor(Math.random() * 1000)

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            id, amount, method, des, date, cat
        }

        let allData = [...record, obj]

        setRecord(allData)

        localStorage.setItem('expenses', JSON.stringify(allData))

        setAmount('')
        setMethod('')
        setDes('')
        setDate('')
        setCat('')
    }

    useEffect(() => {
        let aldData = JSON.parse(localStorage.getItem('expenses')) ? JSON.parse(localStorage.getItem('expenses')) : []

        setRecord(aldData)
    }, [])

    console.log(record);

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
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="pay flex">
                                        <div className="amount">
                                            <input type="number" placeholder='Add amount' onChange={(e) => setAmount(e.target.value)} value={amount} />
                                        </div>
                                        <div className="method">
                                            <select name="" id="" onChange={(e) => setMethod(e.target.value)} value={method}>
                                                <option >method</option>
                                                <option value={'case'}>cash</option>
                                                <option value={'credit'}>credit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="des">
                                        <input type="text" placeholder='Description' onChange={(e) => setDes(e.target.value)} value={des} />
                                    </div>
                                    <div className="date">
                                        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                                    </div>
                                    <div className="cat">
                                        <input type="text" placeholder='Categories' onChange={(e) => setCat(e.target.value)} value={cat} />
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