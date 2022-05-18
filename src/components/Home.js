import React from 'react'
import CarOptions from './CarOptions'
import UserForm from './UserForm'

function Home() {
    return (
        <div className='app_container'>
            <h1>Rent A Car</h1>
            <CarOptions />
            <UserForm />
        </div>
    )
}

export default Home