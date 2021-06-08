import React, {Component} from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import HomeComponent from '../component/HomeComponent';
import Footer from '../component/Footer';
import TambahDokter from '../component/TambahDokter';

class TambahDataDokter extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Navbar/>
                <HomeComponent/>
                <TambahDokter/>
                <Footer/>
            </div>
        );
    }
}
export default TambahDataDokter;