import React, { Component } from 'react';
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
import './assets/css/main.css';
import img from './assets/images/415.png';
import API from '../service/index';
import reg from './Register';


class Header extends Component {
    state = {
        listRegister: [],
        insertRegister: {
            idUser: 1,
            namaUser: "",
            alamatUser: "",
            tgl_lahirUser: "",
            noHp: "",
            userId: "",
            pwUser: "",
            level: "Pasien"
        }
    }
    render() {
        return (
            <Router>

                <div>
                    <header>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-5">
                                    <p>Selamat Datang di Klinik 24Jam</p>
                                </div>
                                <div className="col-md-8 col-sm-7 text-align-right">
                                    <span className="phone-icon"><i className="fa fa-phone" /> 010-060-0160</span>
                                    <span className="date-icon"><i className="fa fa-calendar-plus-o" /> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                                    <span className="email-icon"><i className="fa fa-user" /><Link to='/login'>Login</Link></span>
                                    <span className="email-icon"><i className="fa fa-user" /><Link to='/regis'>Register</Link></span>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <Switch>
                    <Route path="/login"><LoginPage /></Route>
                    <Route path="/regis" ><Register /></Route>
                </Switch>
            </Router>
        );
    }
}
function LoginPage() {
    return (
        <div>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={img} alt="IMG" />
                        </div>

                        <form class="login100-form validate-form">
                            <span class="login100-form-title">
                                Login Anggota
                            </span>

                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" name="userId" placeholder="Email" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pwUser" placeholder="Password" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Register() {
    return (
        <div>
            < reg />
        </div>
    );
}

export default Header;