import React from 'react'
import ford from '../assets/Ford-Fiesta.jpeg'
import vw from '../assets/VW-Polo.jpeg'
import audi from '../assets/Audi-Q3.jpeg'


function CarOptions() {
    return (
        <div className='Car_container'>
            <h2>Which car would you like to rent?</h2>
            <div className='car_card'>
                <div className='car_picture'><img src={ford} alt="Ford Fiesta" /></div>
                <div className="car_detail">
                    <h3>Ford Fiesta</h3>
                    <ul>
                        <li>Make: Ford</li>
                        <li>Model: Fiesta</li>
                        <li>Number of doors: 3</li>
                        <li>Number of seats: 5</li>
                        <li>Colour: silver</li>
                        <li>Price:  £60 per day</li>
                    </ul>
                </div>
            </div>

            <div className='car_card'>
                <div className='car_picture'><img src={vw} alt="VW Golf" /></div>
                <div className="car_detail">
                    <h3>VW Golf</h3>
                    <ul>
                        <li>Make: VW</li>
                        <li>Model: Golf</li>
                        <li>Number of doors: 5</li>
                        <li>Number of seats: 5</li>
                        <li>Colour: red</li>
                        <li>Price:  £80 per day</li>
                    </ul>
                </div>
            </div>

            <div className='car_card'>
                <div className='car_picture'><img src={audi} alt="Audi Q3" /></div>
                <div className="car_detail">
                    <h3>Audi Q3</h3>
                    <ul>
                        <li>Make: Audi</li>
                        <li>Model: Q3</li>
                        <li>Number of doors: 5</li>
                        <li>Number of seats: 5</li>
                        <li>Colour: white</li>
                        <li>Price:  £80 per day</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CarOptions