
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function UserForm() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const ref_firstName = useRef()
    const ref_lastName = useRef()
    const ref_email = useRef()
    const ref_number = useRef()
    const ref_car = useRef()
    const ref_startDate = useRef()
    const ref_endDate = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            userName: ref_firstName.current.value + ' ' + ref_lastName.current.value,
            email: ref_email.current.value,
            number: ref_number.current.value,
            car: ref_car.current.value,
            startDate: ref_startDate.current.value,
            endDate: ref_endDate.current.value
        }
        setData(data)
        console.log(data);
        navigate('/confirmation', { state: data })
    }

    return (
        <div>
            <h2>Make An Order</h2>
            <form className='user_form' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td><input type="text" ref={ref_firstName} name='first_name' placeholder='Your First Name' required /></td>
                            <td>Last Name:</td>
                            <td><input type="text" ref={ref_lastName} name='last_name' placeholder='Your Last Name' required /></td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td><input type="email" ref={ref_email} name='email' placeholder='Your Email' required /></td>
                            <td>Contact number:</td>
                            <td><input type="tel" ref={ref_number} name='contact_number' placeholder='Your Contact number' required /></td>
                        </tr>
                        <tr>
                            <td >Choice of Car:</td>
                            <td><select name="car_option" ref={ref_car}>
                                <option value="ford_fiesta">Ford Fiesta</option>
                                <option value="vw_golf">VW Golf</option>
                                <option value="audi_q3">Audi Q3</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Pick-Up:</td>
                            <td><input type="date" ref={ref_startDate} name='start_date' placeholder='' required /></td>
                            <td>Return:</td>
                            <td><input type="date" ref={ref_endDate} name='end_date' placeholder='' required /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn" onSubmit={handleSubmit}>Make an Order</button>
            </form>
        </div>
    )
}

export default UserForm