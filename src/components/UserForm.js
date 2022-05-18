import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserForm() {
    const navigate = useNavigate()
    const [data, setData] = useState({})

    const onChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault();
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
                            <td><input type="text" name='first_name' onChange={onChange} placeholder='Your First Name' required /></td>
                            <td>Last Name:</td>
                            <td><input type="text" name='last_name' onChange={onChange} placeholder='Your Last Name' required /></td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td><input type="email" name='email' onChange={onChange} placeholder='Your Email' required /></td>
                            <td>Contact number:</td>
                            <td><input type="tel" name='contact_number' onChange={onChange} placeholder='Your Contact number' required /></td>
                        </tr>
                        <tr>
                            <td >Choice of Car:</td>
                            <td><select name="car_option" onChange={onChange} required>
                                <option value="ford_fiesta">Ford Fiesta</option>
                                <option value="vw_golf">VW Golf</option>
                                <option value="audi_q3">Audi Q3</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Pick-Up:</td>
                            <td><input type="date" name='start_date' onChange={onChange} required /></td>
                            <td>Return:</td>
                            <td><input type="date" name='end_date' onChange={onChange} required /></td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit" className="btn" onSubmit={handleSubmit}>Make an Order</button>
            </form>
        </div>
    )
}

export default UserForm