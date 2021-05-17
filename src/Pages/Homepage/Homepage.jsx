import './homepage.css'
import React from 'react'
import Button from '../../Components/Button/Button'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'

function Homepage() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Homepage
