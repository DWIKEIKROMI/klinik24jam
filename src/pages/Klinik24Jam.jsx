import React, { Component } from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import HomeComponent from '../component/HomeComponent';
import AboutComponent from '../component/AboutComponent';
import DokterComponent from '../component/DokterComponent';
import News from '../component/News';
import Daftar from '../component/Daftar';
import Footer from '../component/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // Redirect,
    // useHistory,
    // useLocation,
    // useParams,
    // useRouteMatch
} from "react-router-dom";


class Klinik24Jam extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <HomeComponent />
                <AboutComponent />
                <DokterComponent />
                <News />
                <Daftar />
                <Footer />
            </div>
        );
    }
}



export default Klinik24Jam;