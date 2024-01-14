import React from 'react'
import Header from './util/Header/Header'
import Footer from './util/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
