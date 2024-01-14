import React from 'react'

import Features from '../Features/Features'
import Testimonials from '../Testimonials/Product_User'
import Connect from '../Connect/Connect_form'
import Banner from '../Banner/Banner'
import Patient from '../Features/Patient'

const Home = () => {
    return (
        <>
            <div>
                <Banner />
                <div >
                    <Features />
                    <Patient/>
                    <Testimonials />
                    <Connect />
                </div>
            </div>
        </>
    )
}

export default Home
