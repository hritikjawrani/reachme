import React from 'react'
// import { NavLink } from 'react-router-dom'
import technology from '../src/images/technology.png'
import Common from './Common'
const Home = () => {
    return (
        <>
            
        <Common
         name="Grow your business with"
        imgsrc={technology}
        visit="/service"
        btname="Get Started"
        />
        </>
    )
}

export default Home
