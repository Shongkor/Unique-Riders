import React from 'react';
import { useState } from 'react'
import { vehicles } from '../../FakeData/Vehicles'
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'

const Home = () => {
    const [Vehicles, setVehicles] = useState(vehicles)

    return (
        <div className='home'>
            <div className='p-3 container'>
                <div className='row text-center'>
                    {
                        Vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;